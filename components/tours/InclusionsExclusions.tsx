import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

interface InclusionsExclusionsProps {
  included: string[];
  excluded: string[];
}

export function InclusionsExclusions({
  included,
  excluded,
}: InclusionsExclusionsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
          What&apos;s Included &amp; Excluded
        </h3>
        <p className="text-sm text-stone-500 mt-0.5">
          Transparent pricing with zero hidden charges
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Included Card */}
        <div className="bg-emerald-50/60 rounded-2xl p-5 sm:p-6 border border-emerald-200/80">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-emerald-200/60">
            <CheckCircle2 className="w-5 h-5 text-emerald-700" />
            <h4 className="text-lg font-bold text-emerald-950">
              What&apos;s Included
            </h4>
          </div>

          <ul className="space-y-2.5">
            {included.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-900 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Excluded Card */}
        <div className="bg-rose-50/40 rounded-2xl p-5 sm:p-6 border border-rose-200/60">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-rose-200/60">
            <XCircle className="w-5 h-5 text-rose-600" />
            <h4 className="text-lg font-bold text-rose-950">
              What&apos;s Not Included
            </h4>
          </div>

          <ul className="space-y-2.5">
            {excluded.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
