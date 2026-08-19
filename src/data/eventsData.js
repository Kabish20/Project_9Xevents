export const EVENTS_DATA = [
  {
    id: 'isuc-2026',
    title: 'ISUC 2026 INDIA',
    type: 'Featured Event',
    category: 'International Convention',
    date: 'TBA 2026',
    venue: 'New Delhi, India',
    image: '/isuc-bg.png',
    desc: 'A premier international business convention bringing together entrepreneurs, industry professionals, suppliers, and strategic partners under one networking ecosystem.',
    featured: true,
    externalUrl: 'https://isuc2026.com/',
    highlights: [
      '5,000+ Global Delegates Expected',
      '200+ International Exhibitors',
      'Exclusive B2B Buyer-Seller Meets',
      'Global Keynote Speakers & Visionaries',
    ],
  },
  {
    id: 'global-trade-summit-2026',
    title: 'Global Trade Summit 2026',
    type: 'Conference & Expo',
    category: 'Trade Summit',
    date: 'Q3 2026',
    venue: 'Dubai, UAE',
    image: '/exhibition.png',
    desc: 'Focusing on the next generation of international trade, digital supply chains, and B2B commerce innovations in the Middle East and South Asia.',
    featured: false,
    externalUrl: null,
    highlights: [
      'Cross-Border Commerce Panels',
      'Emerging Markets Showcase',
      'Investor & Founder Matchmaking',
    ],
  },
  {
    id: 'saudi-b2b-expo',
    title: 'Saudi B2B Expo',
    type: 'Trade Show',
    category: 'B2B Exhibition',
    date: 'Q4 2026',
    venue: 'Riyadh, KSA',
    image: '/networking.png',
    desc: 'An expansive trade show connecting international brands with the booming Saudi Arabian economy under Vision 2030 initiatives.',
    featured: false,
    externalUrl: null,
    highlights: [
      'Industrial & Tech Pavilions',
      'G2B & B2B Matchmaking',
      'Regional Partnership Roundtables',
    ],
  },
];

export const FEATURED_EVENT = EVENTS_DATA.find((e) => e.featured);
export default EVENTS_DATA;
