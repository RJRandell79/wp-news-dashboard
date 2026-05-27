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
    name: 'Stoneygate Masterplan',
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
    id: 'st-johns',
    name: 'St John\'s',
    aliases: ['St John\'s shopping centre', 'St John\'s redevelopment'],
    lat: 53.76082962540588, lon: -2.6975918561862176,
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
    lat: 53.761238838393524, lon: -2.6961956734445343,
    category: 'landmark',
  },
  {
    id: 'preston-station',
    name: 'Preston Railway Station',
    aliases: ['Preston station', 'railway station'],
    lat: 53.75622432997201, lon: -2.7064721976825203,
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
    aliases: ['Avenham', 'Avenham and Miller Park', 'Miller and Avenham Park'],
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
  {
    id: 'preston-docks',
    name: 'Preston Docks',
    aliases: ['the docks', 'docks', 'Preston Docklands', 'Preston Marina', 'Bullnose', 'Preston Dock Swing Bridge'],
    lat: 53.760924291071845, lon: -2.735625612049353,
    category: 'landmark',
  },
  {
    id: 'park-hotel',
    name: 'Park Hotel',
    aliases: ['the Park Hotel', 'former Park Hotel', 'demolished Park Hotel', 'old Park Hotel', 'Park Hotel site', 'Park Hotel Preston', 'Heaton Group'],
    lat: 53.7527798939005, lon: -2.705200485024242,
    category: 'regeneration',
  },
  {
    id: 'miller-park',
    name: 'Miller Park',
    aliases: ['Miller', 'Avenham and Miller Park', 'Miller and Avenham Park'],
    lat: 53.75202649437027, lon: -2.7038848135723423,
    category: 'landmark',
  },
  {
    id: 'st-josephs-orphange',
    name: 'St Joseph\'s Orphanage',
    aliases: ['St Joseph\'s', 'the orphanage'],
    lat: 53.75674631237644, lon: -2.7039868911262346,
    category: 'landmark',
  },
  {
    id: 'cardinal-newman-college',
    name: 'Cardinal Newman College',
    aliases: ['the college', 'Cardinal Newman'],
    lat: 53.75653805954465, lon: -2.6899086850230587,
    category: 'landmark',
  },
  { 
    id: 'altura',
    name: 'Altura Tower',
    aliases: ['Altura Preston', 'Altura tower', 'Altura building', 'tallest building', 'tallest tower', 'tallest building in Preston', 'Preston\'s tallest building', 'tallest tower block'],
    lat: 53.76069845547714, lon: -2.694581567216919,
    category: 'regeneration',
  },
  {
    id: 'cuerdale-garden-village',
    name: 'Cuerdale Garden Village',
    aliases: ['Cuerdale Garden Village development', 'Cuerdale Garden Village scheme', 'Cuerdale Garden Village proposal'],
    lat: 53.75675186228656, lon: -2.623151281858694,
    category: 'proposed',
  },
  {
    id: 'city-centre-plan',
    name: 'City Centre',
    aliases: ['Preston city centre', 'city centre plan'],
    lat: 53.7580980, lon: -2.7006248,
    category: 'regeneration',
  },

  // Areas & districts — city neighbourhoods and outlying towns
  { id: 'fulwood', name: 'Fulwood', aliases: ['Fulwood area', 'Fulwood district'], lat: 53.7736, lon: -2.7094, category: 'area' },
  { id: 'ribbleton', name: 'Ribbleton', aliases: ['Ribbleton area', 'Ribbleton Avenue'], lat: 53.7637, lon: -2.6786, category: 'area' },
  { id: 'ashton', name: 'Ashton-on-Ribble', aliases: ['Ashton', 'Ashton district'], lat: 53.7565, lon: -2.7290, category: 'area' },
  { id: 'ingol', name: 'Ingol', aliases: ['Ingol area', 'Tanterton', 'Ingol and Tanterton'], lat: 53.7769, lon: -2.7298, category: 'area' },
  { id: 'larches', name: 'Larches', aliases: ['the Larches', 'Larches estate', 'Lea'], lat: 53.7644, lon: -2.7267, category: 'area' },
  { id: 'plungington', name: 'Plungington', aliases: ['Plungington area', 'Plungington Road area'], lat: 53.7686, lon: -2.7183, category: 'area' },
  { id: 'deepdale', name: 'Deepdale', aliases: ['Deepdale area', 'Deepdale district'], lat: 53.7661, lon: -2.6792, category: 'area' },
  { id: 'penwortham', name: 'Penwortham', aliases: ['Penwortham area', 'Penwortham district', 'Higher Penwortham', 'Lower Penwortham'], lat: 53.7440, lon: -2.7173, category: 'area' },
  { id: 'walton-le-dale', name: 'Walton-le-Dale', aliases: ['Walton', 'Walton le Dale', 'Bamber Bridge'], lat: 53.7427, lon: -2.6650, category: 'area' },
  { id: 'longridge', name: 'Longridge', aliases: ['Longridge town', 'Longridge area'], lat: 53.8237, lon: -2.6010, category: 'area' },
  { id: 'leyland', name: 'Leyland', aliases: ['Leyland town', 'Leyland area', 'South Ribble'], lat: 53.6929, lon: -2.6896, category: 'area' },
  { id: 'chorley', name: 'Chorley', aliases: ['Chorley town', 'Chorley area'], lat: 53.6524, lon: -2.6324, category: 'area' },

  // Streets (excluded from map markers — used for text matching only)
  { id: 'fishergate', name: 'Fishergate', aliases: [], lat: 53.75761986983696, lon: -2.704416276171275, category: 'street' },
  { id: 'friargate', name: 'Friargate', aliases: [], lat: 53.760393427284356, lon: -2.703526602280143, category: 'street' },
  { id: 'church-street', name: 'Church Street', aliases: [], lat: 53.75985812586067, lon: -2.693367640911167, category: 'street' },
  { id: 'lancaster-road', name: 'Lancaster Road', aliases: [], lat: 53.761460056968964, lon: -2.6989199734445135, category: 'street' },
  { id: 'ringway', name: 'Ringway', aliases: ['the Ringway'], lat: 53.76086581171621, lon: -2.701686202280124, category: 'street' },
  { id: 'fox-street', name: 'Fox Street', aliases: [], lat: 53.75833134428736, lon: -2.703688115773532, category: 'street' },
  { id: 'cheapside', name: 'Cheapside', aliases: [], lat: 53.758832128698735, lon: -2.6993016446090734, category: 'street' },
  { id: 'derby-street', name: 'Derby Street', aliases: [], lat: 53.76069845547714, lon: -2.694581567216919, category: 'street' },
  { id: 'herschell-street', name: 'Herschell Street', aliases: [], lat: 53.75506203580382, lon: -2.6908103929983045, category: 'street' },
  { id: 'deepdale-road', name: 'Deepdale Road', aliases: [], lat: 53.76660617369628, lon: -2.6916804022798444, category: 'street' },
  { id: 'watling-street-road', name: 'Watling Street Road', aliases: [], lat: 53.77834160605469, lon: -2.682249545710094, category: 'street' },
  { id: 'new-hall-lane', name: 'New Hall Lane', aliases: [], lat: 53.764751295290864, lon: -2.671510156804153, category: 'street' },
  { id: 'blackpool-road', name: 'Blackpool Road', aliases: [], lat: 53.76819607889435, lon: -2.756378839061908, category: 'street' },
  { id: 'broadgate', name: 'Broadgate', aliases: [], lat: 53.75134522679838, lon: -2.7159862562538297, category: 'street' },
  { id: 'queen-street', name: 'Queen Street', aliases: [], lat: 53.758963711036316, lon: -2.693367640911167, category: 'street' },
  { id: 'fylde-road', name: 'Fylde Road', aliases: [], lat: 53.764880397756095, lon: -2.7153101961822457, category: 'street' },
];

// Articles whose titles contain any of these are excluded regardless of regen score.
export const NEGATIVE_KEYWORDS = [
  // Road / traffic / Rail
  'speed limit', 'speed camera', 'speed bump', 'speed humps', 'bus gate', 'bus lane', 'road closure', 'road scheme', 'road works', 'roadworks', 'pothole', 'potholes', 'traffic light', 'traffic lights', 'traffic calming', 'cycle lane', 'cycle path', 'hs2', 'rail replacement', 'railway works', 'train delay', 'train cancelled', 'rail disruption', 'rail strike', 'bus strike',
  // Crime / incidents
  'stabbing', 'shooting', 'assault', 'murder', 'arson', 'drug', 'drugs', 'covid', 'coronavirus', 'covid-19',
  // Sport / events (unless tied to venue development)
  'preston north end', 'match report', 'fixtures', 'transfer',
  // Parking / fines
  'parking fine', 'parking fines', 'parking ticket',
  // Preston Culture / Events
  'festivals', 'encounter festival', 'caribbean festival', 'carnivals', 'carnival', 'egg-rolling', 'festival', 'music in the park', 'bluestreak arts', 
  // Support 
  'household support fund', 'ukraine', 'ukrainian', 'afghanistan', 'refugee', 'afghan'
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
