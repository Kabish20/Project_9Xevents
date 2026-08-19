import {
  Plane,
  Building2,
  Laptop,
  Stethoscope,
  GraduationCap,
  ShoppingBag,
  Landmark,
  Factory,
  Truck,
  Utensils,
  Shirt,
  Rocket,
  DollarSign,
  Package,
  Church,
} from 'lucide-react';

export const INDUSTRIES_DATA = [
  {
    name: 'Travel & Tourism',
    slug: 'travel-tourism',
    icon: Plane,
    desc: 'Connecting travel agencies, tour operators, and destination management companies through dedicated global trade platforms.',
  },
  {
    name: 'Hospitality',
    slug: 'hospitality',
    icon: Building2,
    desc: 'Platforms for luxury hotels, resorts, culinary brands, and hospitality service providers to network and expand.',
  },
  {
    name: 'Technology',
    slug: 'technology',
    icon: Laptop,
    desc: 'Showcasing breakthroughs in enterprise IT, AI, software solutions, and digital transformation at premier tech summits.',
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    icon: Stethoscope,
    desc: 'Connecting healthcare providers, pharma innovators, and medical technology pioneers through dedicated B2B expos.',
  },
  {
    name: 'Education',
    slug: 'education',
    icon: GraduationCap,
    desc: 'Facilitating global academic exchange, edtech showcases, and institutional partnerships at international forums.',
  },
  {
    name: 'Retail',
    slug: 'retail',
    icon: ShoppingBag,
    desc: 'Connecting global consumer brands, retail chains, and regional distribution networks through specialized trade fairs.',
  },
  {
    name: 'Real Estate',
    slug: 'real-estate',
    icon: Landmark,
    desc: 'Connecting property developers, international investors, and real estate consultants at high-profile property expos.',
  },
  {
    name: 'Manufacturing',
    slug: 'manufacturing',
    icon: Factory,
    desc: 'Trade platforms for industrial equipment, automation, raw materials, and advanced manufacturing solutions across borders.',
  },
  {
    name: 'Finance & Fintech',
    slug: 'finance',
    icon: DollarSign,
    desc: 'Connecting banking institutions, venture capital, fintech startups, and investment firms through executive networking.',
  },
  {
    name: 'Logistics & Supply Chain',
    slug: 'logistics',
    icon: Truck,
    desc: 'Optimizing supply chains, freight operations, and cross-border transport through strategic conferences and expos.',
  },
  {
    name: 'Food & Beverage',
    slug: 'food-beverage',
    icon: Utensils,
    desc: 'Exhibitions for global F&B brands, agri-food innovators, culinary equipment, and franchise opportunities.',
  },
  {
    name: 'Fashion & Lifestyle',
    slug: 'fashion-lifestyle',
    icon: Shirt,
    desc: 'Showcasing the latest luxury trends, apparel manufacturing, and connecting designers with international buyers.',
  },
  {
    name: 'Startups & Venture',
    slug: 'startups',
    icon: Rocket,
    desc: 'Empowering early-stage founders and connecting high-growth startups with global angel investors, VCs, and accelerators.',
  },
  {
    name: 'Religious & Community',
    slug: 'community',
    icon: Church,
    desc: 'Supporting community organizations and institutions in planning large-scale conventions and spiritual gatherings.',
  },
  {
    name: 'Export & Import',
    slug: 'export-import',
    icon: Package,
    desc: 'Facilitating bilateral trade agreements and strategic supplier-buyer relationships between international exporters and importers.',
  },
];

export const INDUSTRY_NAMES = INDUSTRIES_DATA.map((ind) => ind.name);
export default INDUSTRIES_DATA;
