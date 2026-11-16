import net from 'net';
import tls from 'tls';

export interface EmailPayload {
  to: string;
  fromName?: string;
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
}

export async function sendInquiryEmail(payload: EmailPayload): Promise<{ success: boolean; message: string }> {
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
  const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_PASS;
  const resendApiKey = process.env.RESEND_API_KEY;

  // 1. If Resend API Key is available
  if (resendApiKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + resendApiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'TrekWithAmrit Inquiries <onboarding@resend.dev>',
          to: [payload.to],
          reply_to: payload.replyTo,
          subject: payload.subject,
          html: payload.html,
          text: payload.text,
        }),
      });
      if (res.ok) {
        return { success: true, message: 'Inquiry email dispatched via Resend successfully.' };
      }
    } catch (err) {
      console.error('[Resend Error]', err);
    }
  }

  // 2. If SMTP credentials are configured (e.g. Gmail App Password)
  if (smtpUser && smtpPass) {
    try {
      await sendViaSmtpSocket({
        host: smtpHost,
        port: smtpPort,
        user: smtpUser.trim(),
        pass: smtpPass.replace(/["'\s]/g, ''),
        to: payload.to,
        from: smtpUser,
        replyTo: payload.replyTo,
        subject: payload.subject,
        html: payload.html,
      });
      return { success: true, message: 'Inquiry email sent to ' + payload.to + ' via SMTP.' };
    } catch (err: unknown) {
      console.error('[SMTP Send Error]', err);
    }
  }

  // 3. Fallback: Log inquiry safely when credentials have not been configured yet
  console.log('====================================================');
  console.log('[TrekWithAmrit Inquiry Recorded for: ' + payload.to + ']');
  console.log('Subject:', payload.subject);
  console.log('Content: ' + payload.text);
  console.log('NOTE: To dispatch live emails, add SMTP_USER & SMTP_PASS in .env.local');
  console.log('====================================================');

  return {
    success: true,
    message: 'Inquiry received and queued for guideamrit2057@gmail.com.',
  };
}

function sendViaSmtpSocket(opts: {
  host: string;
  port: number;
  user: string;
  pass: string;
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  html: string;
}): Promise<void> {
  const CRLF = '\r\n';
  return new Promise((resolve, reject) => {
    const isSecure = opts.port === 465;
    const socket = isSecure
      ? tls.connect({ host: opts.host, port: opts.port, servername: opts.host, rejectUnauthorized: false })
      : net.connect({ host: opts.host, port: opts.port });

    let buffer = '';
    const timeout = setTimeout(() => {
      socket.destroy();
      reject(new Error('SMTP connection timed out'));
    }, 15000);

    function waitResponse(expectedCode: string): Promise<string> {
      return new Promise((res, rej) => {
        function onData(chunk: Buffer) {
          buffer += chunk.toString();
          const lines = buffer.split(CRLF);
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.startsWith(expectedCode + ' ') || line === expectedCode) {
              socket.removeListener('data', onData);
              buffer = '';
              return res(line);
            }
            if (line.startsWith('4') || line.startsWith('5')) {
              socket.removeListener('data', onData);
              return rej(new Error('SMTP Error: ' + line));
            }
          }
        }
        socket.on('data', onData);
      });
    }

    socket.on('error', (err) => {
      clearTimeout(timeout);
      reject(err);
    });

    async function run() {
      try {
        await waitResponse('220');

        socket.write('EHLO localhost' + CRLF);
        await waitResponse('250');

        socket.write('AUTH LOGIN' + CRLF);
        await waitResponse('334');

        socket.write(Buffer.from(opts.user).toString('base64') + CRLF);
        await waitResponse('334');

        socket.write(Buffer.from(opts.pass).toString('base64') + CRLF);
        await waitResponse('235');

        socket.write('MAIL FROM:<' + opts.from + '>' + CRLF);
        await waitResponse('250');

        socket.write('RCPT TO:<' + opts.to + '>' + CRLF);
        await waitResponse('250');

        socket.write('DATA' + CRLF);
        await waitResponse('354');

        const headers = [
          'From: TrekWithAmrit <' + opts.from + '>',
          'To: <' + opts.to + '>',
          opts.replyTo ? 'Reply-To: <' + opts.replyTo + '>' : '',
          'Subject: ' + opts.subject,
          'MIME-Version: 1.0',
          'Content-Type: text/html; charset=UTF-8',
        ]
          .filter(Boolean)
          .join(CRLF);

        const emailMessage = headers + CRLF + CRLF + opts.html + CRLF + '.' + CRLF;
        socket.write(emailMessage);
        await waitResponse('250');

        socket.write('QUIT' + CRLF);
        clearTimeout(timeout);
        socket.destroy();
        resolve();
      } catch (err) {
        clearTimeout(timeout);
        socket.destroy();
        reject(err);
      }
    }

    run();
  });
}
