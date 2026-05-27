// Hand-curated gazetteer of Preston city centre regeneration sites, landmarks, and street names that commonly appear in local Preston articles. Coordinates from OpenStreetMap. Aliases catch the variations writers use: "the Harris" vs "Harris Museum".

export const PRESTON_GAZETTEER = [
  // Major regeneration schemes
  {
    id: 'animate',
    name: 'Animate',
    aliases: ['Animate Preston', 'Animate scheme', 'former indoor market', 'Animate leisure'],
    lat: 53.7610901, lon: -2.7008463,
    category: 'regeneration',
  },
  {
    id: 'stoneygate',
    name: 'Stoneygate',
    aliases: ['Stoneygate regeneration', 'Stoneygate masterplan'],
    lat: 53.7577138, lon: -2.6964191,
    category: 'regeneration',
  },
  {
    id: 'harris-quarter',
    name: 'Harris Quarter',
    aliases: ['Harris Quarter Towns Fund', 'Harris Quarter Towns Deal'],
    lat: 53.7589637, lon: -2.6989985,
    category: 'regeneration',
  },
  {
    id: 'station-quarter',
    name: 'Station Quarter',
    aliases: ['Preston Station Quarter'],
    lat: 53.7535818, lon: -2.7030061,
    category: 'regeneration',
  },
  {
    id: 'city-centre-plan',
    name: 'City Centre',
    aliases: ['Preston city centre', 'city centre plan'],
    lat: 53.7580980, lon: -2.7006248,
    category: 'regeneration',
  },

  // Landmarks
  {
    id: 'harris',
    name: 'Harris Museum',
    aliases: ['Harris Museum and Art Gallery', 'the Harris', 'Harris Library'],
    lat: 53.7591, lon: -2.7028,
    category: 'landmark',
  },
  {
    id: 'flag-market',
    name: 'Flag Market',
    aliases: ['the Flag Market', 'Preston Flag Market'],
    lat: 53.759203597311114, lon: -2.699148877919565,
    category: 'landmark',
  },
  {
    id: 'winckley-square',
    name: 'Winckley Square',
    aliases: ['Winckley Square gardens'],
    lat: 53.756279146506586, lon: -2.701709570973587,
    category: 'landmark',
  },
  {
    id: 'guild-hall',
    name: 'Guild Hall',
    aliases: ['Preston Guild Hall', 'the Guild Hall', 'Charter Theatre'],
    lat: 53.759666418385926, lon: -2.6974790808700955,
    category: 'landmark',
  },
  {
    id: 'bus-station',
    name: 'Preston Bus Station',
    aliases: ['the bus station', 'Brutalist bus station'],
    lat: 53.7605, lon: -2.7008,
    category: 'landmark',
  },
  {
    id: 'preston-station',
    name: 'Preston Railway Station',
    aliases: ['Preston station', 'railway station'],
    lat: 53.76114775391008, lon: -2.696213553330682,
    category: 'landmark',
  },
  {
    id: 'markets',
    name: 'Preston Markets',
    aliases: ['the markets', 'covered market', 'box market', 'outdoor market'],
    lat: 53.76036349245426, lon: -2.6998056190909985,
    category: 'landmark',
  },
  {
    id: 'avenham-park',
    name: 'Avenham Park',
    aliases: ['Avenham', 'Miller Park', 'Avenham and Miller Park'],
    lat: 53.7535, lon: -2.7000,
    category: 'landmark',
  },
  {
    id: 'uclan',
    name: 'UCLan',
    aliases: ['University of Central Lancashire', 'UCLan campus', 'student centre'],
    lat: 53.76166962053733, lon: -2.708478545051091,
    category: 'landmark',
  },
  {
    id: 'cotton-court',
    name: 'Cotton Court',
    aliases: ['Cotton Court business centre'],
    lat: 53.75981251025268, lon: -2.6920315553873677,
    category: 'landmark',
  },

  // Streets (lower priority — match only if no landmark match found)
  { id: 'fishergate', name: 'Fishergate', aliases: [], lat: 53.75761986983696, lon: -2.704416276171275, category: 'street' },
  { id: 'friargate', name: 'Friargate', aliases: [], lat: 53.760393427284356, lon: -2.703526602280143, category: 'street' },
  { id: 'church-street', name: 'Church Street', aliases: [], lat: 53.75985812586067, lon: -2.693367640911167, category: 'street' },
  { id: 'lancaster-road', name: 'Lancaster Road', aliases: [], lat: 53.761460056968964, lon: -2.6989199734445135, category: 'street' },
  { id: 'ringway', name: 'Ringway', aliases: ['the Ringway'], lat: 53.76086581171621, lon: -2.701686202280124, category: 'street' },
  { id: 'fox-street', name: 'Fox Street', aliases: [], lat: 53.75833134428736, lon: -2.703688115773532, category: 'street' },
  { id: 'cheapside', name: 'Cheapside', aliases: [], lat: 53.758832128698735, lon: -2.6993016446090734, category: 'street' },
];

// Regeneration-relevant terms with weights. Used for scoring articles.
// Higher weight = more strongly indicates a regeneration story.
export const REGEN_KEYWORDS = {
  // Strong signals
  regeneration: 3,
  redevelopment: 3,
  'planning application': 3,
  'planning permission': 3,
  masterplan: 3,
  'towns fund': 3,
  'levelling up': 3,

  // Medium signals
  scheme: 2,
  development: 2,
  demolition: 2,
  refurbishment: 2,
  restoration: 2,
  consultation: 2,
  funding: 2,
  approved: 2,
  rejected: 2,
  proposal: 2,

  // Weaker signals
  building: 1,
  construction: 1,
  opens: 1,
  opened: 1,
  completed: 1,
  council: 1,
  investment: 1,
  transform: 1,
  unveiled: 1,
};
