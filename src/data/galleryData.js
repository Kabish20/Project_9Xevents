import { Layers, Camera, Play, Newspaper, Mic, Users } from 'lucide-react';

export const GALLERY_CATEGORIES = [
  { id: 'all', name: 'All', icon: Layers },
  { id: 'photos', name: 'Event Photos', icon: Camera },
  { id: 'videos', name: 'Video Highlights', icon: Play },
  { id: 'press', name: 'Press Coverage', icon: Newspaper },
  { id: 'speakers', name: 'Speaker Moments', icon: Mic },
  { id: 'networking', name: 'Networking', icon: Users },
];

export const GALLERY_ITEMS = [
  { id: 1, src: '/hero-bg.png', label: 'Main Conference Stage', cat: 'Event Photos', categoryId: 'photos' },
  { id: 2, src: '/networking.png', label: 'B2B Matchmaking Session', cat: 'Networking', categoryId: 'networking' },
  { id: 3, src: '/exhibition.png', label: 'International Trade Exhibition', cat: 'Event Photos', categoryId: 'photos' },
  { id: 4, src: '/isuc-bg.png', label: 'ISUC Convention India', cat: 'Event Photos', categoryId: 'photos' },
  { id: 5, src: '/about-bg.png', label: 'Executive Panel Discussion', cat: 'Speaker Moments', categoryId: 'speakers' },
  { id: 6, src: '/gallery-bg.png', label: 'Grand Exhibition Hall', cat: 'Event Photos', categoryId: 'photos' },
  { id: 7, src: '/services-bg.png', label: 'Summit Keynote Staging', cat: 'Event Photos', categoryId: 'photos' },
  { id: 8, src: '/networking.png', label: 'Cross-Border Deal Signing', cat: 'Networking', categoryId: 'networking' },
];

export default GALLERY_ITEMS;
