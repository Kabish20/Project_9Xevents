import {
  Globe,
  Users,
  Briefcase,
  Calendar,
  Award,
  MessageSquare,
  Zap,
  Map,
  Megaphone,
  Hotel,
  Sparkles,
  BarChart3,
  Trophy,
} from 'lucide-react';

export const SERVICES_DATA = [
  {
    id: 'trade-shows',
    title: 'Trade Shows & Exhibitions',
    desc: 'Professional industry-focused trade events connecting businesses, exhibitors, and key decision-makers across international markets.',
    icon: Globe,
    isCore: true,
  },
  {
    id: 'conferences-summits',
    title: 'Conferences & Summits',
    desc: 'Large-scale knowledge-sharing platforms featuring keynote leaders, panel sessions, and industry-wide learning initiatives.',
    icon: Users,
    isCore: true,
  },
  {
    id: 'convention-management',
    title: 'Convention Management',
    desc: 'End-to-end planning, logistics, and on-ground execution of multi-day global conventions and organizational summits.',
    icon: Award,
    isCore: false,
  },
  {
    id: 'b2b-networking',
    title: 'B2B Networking Events',
    desc: 'Curated networking experiences and structured matchmaking designed to create high-value strategic partnerships and deals.',
    icon: Zap,
    isCore: true,
  },
  {
    id: 'table-meets',
    title: 'Table Meets',
    desc: 'Focused round-table interaction sessions engineered for targeted industry engagement, buyer-seller connects, and closed-door discussions.',
    icon: Calendar,
    isCore: true,
  },
  {
    id: 'sponsorship-management',
    title: 'Sponsorship Management',
    desc: 'Strategic brand partnership acquisitions, sponsorship packaging, and brand visibility maximization across global platforms.',
    icon: Briefcase,
    isCore: false,
  },
  {
    id: 'delegate-management',
    title: 'Delegate Management',
    desc: 'Seamless registration workflows, VIP hospitality, badge management, and round-the-clock support for domestic and international delegates.',
    icon: MessageSquare,
    isCore: false,
  },
  {
    id: 'event-marketing',
    title: 'Event Marketing & Promotions',
    desc: 'Multi-channel digital marketing, PR campaigns, and media outreach strategies to ensure maximum visibility and qualified attendance.',
    icon: Megaphone,
    isCore: false,
  },
  {
    id: 'venue-hospitality',
    title: 'Venue & Hospitality Coordination',
    desc: 'Premium venue sourcing, five-star accommodations, protocol arrangements, and flawless on-site guest experiences.',
    icon: Hotel,
    isCore: false,
  },
  {
    id: 'international-delegations',
    title: 'International Delegations',
    desc: 'Curated international business delegations providing cross-border market exploration, bilateral trade meets, and government liaisons.',
    icon: Map,
    isCore: true,
  },
  {
    id: 'corporate-events',
    title: 'Corporate Event Planning',
    desc: 'Bespoke corporate galas, product launches, shareholder meetings, and award ceremonies with world-class production standards.',
    icon: Sparkles,
    isCore: true,
  },
];

export const CORE_SERVICES = SERVICES_DATA.filter((s) => s.isCore);
export default SERVICES_DATA;
