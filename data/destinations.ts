import { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    id: "dest-1",
    slug: "everest-region",
    name: "Everest Region",
    region: "Eastern Himalayas, Solukhumbu",
    tagline: "Roof of the World & Sherpa Heartland",
    description:
      "Home to Mount Everest (8,848.86m), high glacial passes, legendary Sherpa villages like Namche Bazaar, and sacred mountain monasteries.",
    image: "/images/destinations/everest.jpeg",
    tourCount: 3,
    popularAttractions: [
      "Everest Base Camp & Khumbu Glacier",
      "Kala Patthar Sunrise Viewpoint (5,545m)",
      "Namche Bazaar Sherpa Hub",
      "Gokyo Sacred Turquoise Lakes",
    ],
    bestTimeToVisit: "March – May & September – November",
  },
  {
    id: "dest-2",
    slug: "annapurna-region",
    name: "Annapurna Region",
    region: "Central Himalayas, Gandaki",
    tagline: "Dramatic Amphitheater of Glacial Giants",
    description:
      "A trekker's wonderland combining lush rhododendron forests, terraced Gurung villages, and the towering 360-degree snow amphitheater of Annapurna.",
    image: "/images/destinations/annapurna-circuit-pass.jpg",
    tourCount: 4,
    popularAttractions: [
      "Annapurna Base Camp Sanctuary (4,130m)",
      "Poon Hill Golden Himalayan Sunrise",
      "Mardi Himal Ridge Trail",
      "Machhapuchhre (Fishtail) Panoramas",
    ],
    bestTimeToVisit: "September – December & March – May",
  },
  {
    id: "dest-3",
    slug: "langtang-region",
    name: "Langtang Region",
    region: "Central-North Nepal, Rasuwa",
    tagline: "The Valley of Glaciers & Tamang Heritage",
    description:
      "Nestled just north of Kathmandu, Langtang offers tranquil alpine yak pastures, dramatic glaciated valleys, and authentic Tamang cultural heritage.",
    image: "/images/destinations/langtang valley treak.jpeg",
    tourCount: 1,
    popularAttractions: [
      "Kyanjin Gompa & Local Yak Cheese Factory",
      "Kyanjin Ri (4,773m) Viewpoint",
      "Langtang National Park Flora & Fauna",
      "Traditional Tamang Mountain Villages",
    ],
    bestTimeToVisit: "March – May & October – December",
  },
  {
    id: "dest-4",
    slug: "manaslu-region",
    name: "Manaslu Region",
    region: "West-Central Himalayas, Gorkha",
    tagline: "Mountain of the Spirit & Remote Passes",
    description:
      "Circling the eighth-highest peak on Earth (8,163m), Manaslu is a pristine, untouched wilderness featuring Tibetan-influenced border villages and dramatic gorges.",
    image: "/images/destinations/manaslu-larke-pass.jpg",
    tourCount: 1,
    popularAttractions: [
      "Larkya La Pass (5,160m)",
      "Birendra Glacial Lake & Pungyen Gompa",
      "Sama Gaun Ancient Himalayan Settlement",
      "Budhi Gandaki River Canyons",
    ],
    bestTimeToVisit: "March – May & September – November",
  },
  {
    id: "dest-5",
    slug: "mustang-region",
    name: "Mustang Region",
    region: "Trans-Himalayan Plateau, Dhaulagiri",
    tagline: "The Ancient Walled Forbidden Kingdom",
    description:
      "A mystical high-altitude desert sheltered behind the Annapurna and Dhaulagiri ranges, famed for whitewashed palaces, sky caves, and red ochre canyons.",
    image: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1200&auto=format&fit=crop",
    tourCount: 1,
    popularAttractions: [
      "Walled Kingdom of Lo Manthang",
      "Centuries-old Cliff Sky Caves",
      "Chhoser Monastic Cave Complex",
      "Muktinath Sacred Pilgrimage Shrine",
    ],
    bestTimeToVisit: "April – November (Ideal during monsoon dry shadow)",
  },
  {
    id: "dest-6",
    slug: "dolpo-region",
    name: "Dolpo Region",
    region: "Remote Western Himalayas, Karnali",
    tagline: "The Hidden Land of Shey Phoksundo",
    description:
      "Nepal's deepest remote western frontier. Marvel at the crystal turquoise waters of Shey Phoksundo Lake, pre-Buddhist Bon culture, and ancient trans-Himalayan yak trails.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    tourCount: 1,
    popularAttractions: [
      "Deep-blue Shey Phoksundo Lake (3,611m)",
      "Shey Gompa (Crystal Mountain Monastery)",
      "Bon Po Ancient Religious Settlements",
      "Shey Phoksundo National Park Wildlife",
    ],
    bestTimeToVisit: "May – October",
  },
  {
    id: "dest-7",
    slug: "tilicho-lake",
    name: "Tilicho Lake",
    region: "Manang District, Annapurna Conservation Area",
    tagline: "Glacial Wonder at 4,919m in the High Himalayas",
    description:
      "Perched dramatically at 4,919 meters (16,138 ft) in Manang, Tilicho Lake is one of the highest alpine lakes on Earth. It features striking turquoise glacial meltwaters reflecting towering ice walls and the rugged Annapurna mountain range.",
    image: "/images/destinations/tilicho.jpg",
    tourCount: 1,
    popularAttractions: [
      "Turquoise glacial waters at 4,919m elevation",
      "Tilicho Base Camp & High Scree Trails",
      "Panoramic vistas of Tilicho Peak & Annapurna range",
      "Thorong La Pass (5,416m) side-trek option",
    ],
    bestTimeToVisit: "March – May & September – November",
  },
  {
    id: "dest-8",
    slug: "rara-lake",
    name: "Rara Lake",
    region: "Mugu & Jumla Districts, Karnali Province",
    tagline: "The Queen of Freshwater Lakes in Untamed Wilderness",
    description:
      "The largest freshwater lake in Nepal situated at 2,990 meters (9,810 ft) in Rara National Park. Pristine deep-blue water changes color with the mountain sky, framed by coniferous alpine forests and snowy Himalayan ridges.",
    image: "/images/destinations/rara.jpg",
    tourCount: 1,
    popularAttractions: [
      "Deep blue lake waters spanning over 10.8 sq km",
      "Rara National Park pine, spruce & juniper forests",
      "Scenic boating & tranquil lakeside wilderness trails",
      "Murma Top panoramic Himalayan viewpoint",
    ],
    bestTimeToVisit: "April – May & September – October",
  },
];

