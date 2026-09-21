export const site = {
  name: 'Safeguard Limited',
  legalName: 'Safeguard Kenya Limited',
  short: 'Safeguard',
  url: 'https://safeguardfumigation.co.ke',
  phoneDisplay: '0704 836 873 / 0755 256 669',
  phoneHref: 'tel:+254704836873',
  whatsapp: '254755256669',
  email: 'safeguardlimited2026@gmail.com',
  baseTown: 'Nairobi',
  hoursWeek: 'Monday to Saturday, 7:00am – 8:00pm',
  hoursSunday: 'Sunday and public holidays, emergency call-outs only',
  payment:
    'Payment is made as a 40% deposit after site inspection, remaining balance after the work is completed.',
  licence: 'Technicians licensed by the Pest Control Products Board (PCPB)',
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type IconKey =
  | 'roach'
  | 'bedbug'
  | 'rat'
  | 'termite'
  | 'mosquito'
  | 'flea'
  | 'spray'
  | 'building';

export type Service = {
  slug: string;
  name: string;
  icon: IconKey;
  short: string;
  from: number;
  summary: string;
  signs: string[];
  method: string[];
  prep: string[];
  warranty: string;
};

export const services: Service[] = [
  {
    slug: 'cockroach-control',
    name: 'Cockroach control',
    icon: 'roach',
    short: 'Kitchens, restaurants, hostels',
    from: 3500,
    summary:
      'German cockroaches breed inside cupboards, fridge motors and cracked tiles, so spraying the floor never ends it. We gel-bait the harbourages, then spray a residual film where they run.',
    signs: [
      'Brown specks or smear marks inside drawers and cupboard hinges',
      'A musty smell around the sink and cooker',
      'Roaches out in daylight, which means the hiding places are already full',
    ],
    method: [
      'Inspection of the kitchen, wet areas, ceiling boards and any shared wall',
      'Gel bait placed directly into cracks, hinges and appliance motors',
      'Residual spray on skirtings, drains and service ducts',
      'Free follow-up visit after 14 days to clear the second hatch',
    ],
    prep: [
      'Clear food and utensils from cupboards',
      'Empty the area under the sink',
      'Do not wash treated surfaces for 7 days',
    ],
    warranty: '6 months, with free re-treatment if they come back',
  },
  {
    slug: 'bedbug-treatment',
    name: 'Bedbug treatment',
    icon: 'bedbug',
    short: 'Homes, hostels, hotels, Airbnbs',
    from: 4000,
    summary:
      'Bedbugs hide in seams, joints and behind sockets, and the eggs survive one spray. We treat the whole room twice, two weeks apart, which is the only thing that actually finishes them.',
    signs: [
      'Bites in a line on arms, shoulders or ankles, worse in the morning',
      'Tiny black dots along mattress seams and bed joints',
      'A sweet, sharp smell in a closed bedroom',
    ],
    method: [
      'Dismantle beds and treat every joint, seam, socket and skirting',
      'Steam or residual application on mattresses and seats where needed',
      'Second visit at day 14 to kill whatever hatches after the first treatment',
    ],
    prep: [
      'Wash and bag bedding, hot water if possible',
      'Pull furniture 30cm off the walls',
      'Keep the room closed for 4 hours after treatment',
    ],
    warranty: '3 months from the second visit',
  },
  {
    slug: 'rodent-control',
    name: 'Rats and mice',
    icon: 'rat',
    short: 'Ceilings, godowns, shops',
    from: 4500,
    summary:
      'Poison alone leaves rats dying in the ceiling. We combine tamper-proof bait stations with snap traps and proofing, so the population drops and nothing rots above your head.',
    signs: [
      'Scratching in the ceiling at night',
      'Droppings behind the fridge or in the store',
      'Chewed packaging, wiring or door frames',
    ],
    method: [
      'Map the runs, entry points and food sources',
      'Lockable bait stations where children and pets cannot reach',
      'Snap traps in the ceiling and store rooms',
      'Proofing of gaps, vents and door gaps with steel mesh',
    ],
    prep: [
      'Clear open food and rubbish overnight',
      'Tell us where pets sleep',
      'Keep ceiling access hatches reachable',
    ],
    warranty: '3 months monitoring on contract clients',
  },
  {
    slug: 'termite-control',
    name: 'Termite treatment',
    icon: 'termite',
    short: 'Timber, roofing, foundations',
    from: 8000,
    summary:
      'Subterranean termites move up through the foundation and eat door frames and roofing timber from the inside. We treat the soil barrier and inject infested timber directly.',
    signs: [
      'Mud tubes running up a wall or foundation',
      'Door frames that sound hollow when tapped',
      'Winged swarmers around lights after the rains',
    ],
    method: [
      'Trenching and soil drenching around the foundation',
      'Drill-and-inject treatment of infested timber',
      'Pre-construction soil treatment for new builds',
    ],
    prep: [
      'Move furniture away from affected walls',
      'Give access to the roof space',
      'Expect drilling noise for part of the visit',
    ],
    warranty: '12 months on post-construction soil treatment',
  },
  {
    slug: 'mosquito-control',
    name: 'Mosquitoes and flies',
    icon: 'mosquito',
    short: 'Compounds, gardens, restaurants',
    from: 5000,
    summary:
      'We treat breeding water and resting surfaces rather than fogging the air for show. Compounds stay usable in the evening and restaurants stop losing tables to flies.',
    signs: [
      'Biting from dusk in the sitting room and bedrooms',
      'Standing water in drains, tanks, gutters or planters',
      'Flies settling on food counters and bins',
    ],
    method: [
      'Larvicide in drains, tanks and standing water',
      'Residual spray on walls, hedges and shaded resting spots',
      'Fly control units and bin treatment for food businesses',
    ],
    prep: [
      'Bring in washing and pet bowls',
      'Cover fish ponds',
      'Keep children out of the compound for 2 hours',
    ],
    warranty: '6 weeks, extended on maintenance plans',
  },
  {
    slug: 'fleas-and-ticks',
    name: 'Fleas and ticks',
    icon: 'flea',
    short: 'Homes with dogs and cats',
    from: 3500,
    summary:
      'Fleas live in the carpet and the dog basket, not on the animal. We treat the floor, the bedding and the kennel area together, otherwise they are back in a week.',
    signs: [
      'Bites around the ankles',
      'Pets scratching and biting at the base of the tail',
      'Black grit in pet bedding',
    ],
    method: [
      'Treatment of carpets, rugs, skirtings and kennel area',
      'Growth regulator to break the egg cycle',
      'Advice on timing the vet treatment with ours',
    ],
    prep: [
      'Vacuum and throw the bag away',
      'Wash pet bedding',
      'Keep pets out for 4 hours',
    ],
    warranty: '3 months',
  },
  {
    slug: 'fumigation-and-sanitisation',
    name: 'Fumigation and sanitisation',
    icon: 'spray',
    short: 'Move-ins, offices, clinics',
    from: 6000,
    summary:
      'Full-space treatment and disinfection for a house you are moving into, an office after an outbreak, or premises that need a certificate for inspection.',
    signs: [
      'Moving into a house with unknown history',
      'A landlord, school or clinic requiring proof of treatment',
      'Post-renovation or post-flood clean-up',
    ],
    method: [
      'Whole-space treatment including ceilings and ducts',
      'Surface disinfection of high-touch areas',
      'Certificate of fumigation issued on completion',
    ],
    prep: [
      'Remove pets, fish and plants',
      'Cover or remove open food',
      'Allow 3 to 4 hours of closed-up time',
    ],
    warranty: 'Certificate valid for 3 or 6 months depending on scope',
  },
  {
    slug: 'commercial-contracts',
    name: 'Commercial contracts',
    icon: 'building',
    short: 'Restaurants, hotels, schools, factories',
    from: 12000,
    summary:
      'Scheduled visits with signed service reports, pest logs and a bait station map, so you pass a health inspection without scrambling the night before.',
    signs: [
      'You are audited by public health or a franchise',
      'Staff report sightings faster than one-off spraying can handle',
      'You run several branches and need one point of contact',
    ],
    method: [
      'Site survey and risk mapping per branch',
      'Monthly or quarterly visits with a signed report each time',
      'Numbered bait stations and a pest activity log kept on site',
      'Call-outs between visits at no extra charge',
    ],
    prep: [
      'Nominate one contact per branch',
      'Give access outside service hours where needed',
      'Keep the pest log accessible to inspectors',
    ],
    warranty: 'Unlimited call-outs for the length of the contract',
  },
];

export const priceTable = [
  { space: 'Bedsitter or single room', cockroaches: 3500, bedbugs: 4000, general: 4500 },
  { space: 'One bedroom', cockroaches: 4000, bedbugs: 5000, general: 5500 },
  { space: 'Two bedroom', cockroaches: 5000, bedbugs: 6500, general: 7000 },
  { space: 'Three bedroom', cockroaches: 6500, bedbugs: 8500, general: 9000 },
  { space: 'Maisonette or bungalow', cockroaches: 8500, bedbugs: 11000, general: 12000 },
];

export const plans = [
  {
    name: 'One-off treatment',
    price: 'From KSh 3,500',
    unit: 'per visit',
    description: 'A single problem in a single space. Most homes start here.',
    includes: [
      'Inspection and written findings',
      'Targeted treatment for one pest',
      'One free follow-up within 14 days',
      '6-month warranty on cockroaches',
    ],
    cta: 'Book a treatment',
    featured: false,
  },
  {
    name: 'Whole-house plan',
    price: 'From KSh 9,000',
    unit: 'per quarter',
    description:
      'Cockroaches, rodents and crawling insects handled together, four visits a year.',
    includes: [
      'All rooms, store, ceiling and compound',
      'Four scheduled visits a year',
      'Free call-outs between visits',
      'Priority booking, same-day where possible',
      'Certificate of fumigation on request',
    ],
    cta: 'Start a plan',
    featured: true,
  },
  {
    name: 'Business contract',
    price: 'From KSh 12,000',
    unit: 'per month',
    description:
      'For restaurants, hotels, schools and factories that get inspected.',
    includes: [
      'Site survey and branch risk map',
      'Monthly or quarterly service with signed reports',
      'Numbered bait stations and on-site pest log',
      'Unlimited call-outs',
      'Support during health inspections',
    ],
    cta: 'Request a site survey',
    featured: false,
  },
];

export const areas = {
  nairobi: [
    'Kilimani',
    'Kileleshwa',
    'Westlands',
    'Lavington',
    'Karen',
    'Langata',
    'South B and South C',
    'Embakasi',
    'Donholm',
    'Kasarani',
    'Roysambu',
    'Ngara and Parklands',
    'Eastleigh',
    'CBD',
    'Rongai',
    'Kitengela',
  ],
  beyond: ['Thika', 'Ruiru', 'Juja', 'Kiambu', 'Limuru', 'Machakos', 'Naivasha', 'Nakuru'],
};

export const testimonials = [
  {
    quote:
      'We had roaches in the kitchen for close to a year and three different sprayers failed. Safeguard baited the cupboards instead of spraying the floor and came back after two weeks as promised. Nothing since February.',
    name: 'Wanjiku N.',
    role: 'Tenant, Kileleshwa',
  },
  {
    quote:
      'They worked at 11pm after we closed so we never lost a day of service, and the report they leave behind is what public health asked for during inspection.',
    name: 'Brian Otieno',
    role: 'Restaurant owner, Westlands',
  },
  {
    quote:
      'Bedbugs in four hostel rooms. They dismantled the beds, treated the joints and returned two weeks later. The students stopped complaining.',
    name: 'Faith Chepkoech',
    role: 'Hostel manager, Ruiru',
  },
];

export const faqs = [
  {
    q: 'Is the treatment safe for children and pregnant women?',
    a: 'Yes, when the re-entry time is respected. We use PCPB-registered products at label dosage and tell you exactly how long to stay out, usually 2 to 4 hours. Tell us in advance if anyone in the house is pregnant, asthmatic or under two years old and we will pick a low-odour product and treat around them.',
  },
  {
    q: 'Do we have to move out of the house?',
    a: 'For most treatments you leave for 2 to 4 hours and come back after airing the rooms. Full fumigation of a whole house takes longer, about 6 hours. Nobody needs to sleep out.',
  },
  {
    q: 'How much does it cost?',
    a: 'A bedsitter starts at KSh 3,500 and a two bedroom at KSh 5,000 for cockroaches. Price depends on the pest, the size of the space and how long the problem has run. We quote on the phone and the price does not change when we arrive.',
  },
  {
    q: 'How soon can you come?',
    a: 'Same day within Nairobi if you call before 3pm, next morning otherwise. Emergency call-outs for restaurants and hotels run on Sundays too.',
  },
  {
    q: 'Will the pests come back?',
    a: 'Cockroach treatment carries a 6-month warranty and bedbug treatment 3 months from the second visit. If they return inside that window we come back and re-treat free.',
  },
  {
    q: 'Do I need to prepare anything before you arrive?',
    a: 'Clear cupboards for kitchen work, wash and bag bedding for bedbugs, and pull furniture off the walls. We send the exact list by WhatsApp once the visit is booked.',
  },
  {
    q: 'Do you give a fumigation certificate?',
    a: 'Yes. Landlords, schools, clinics and food businesses get a signed certificate and service report on completion, valid for 3 or 6 months depending on the treatment.',
  },
  {
    q: 'How do I pay?',
    a: 'M-Pesa or cash, after the work is done. Businesses on contract are invoiced monthly and can pay by bank transfer.',
  },
];

export const stats = [
  { value: '2,400+', label: 'homes and businesses treated' },
  { value: '6 months', label: 'warranty on cockroach work' },
  { value: 'Same day', label: 'call before 3pm in Nairobi' },
  { value: '9 years', label: 'working in Nairobi' },
];