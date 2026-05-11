import { motion } from 'framer-motion';
import { Play, Camera, Newspaper, Mic, Users, Layers } from 'lucide-react';

const Gallery = () => {
  const categories = [
    { name: 'All', icon: Layers },
    { name: 'Event Photos', icon: Camera },
    { name: 'Video Highlights', icon: Play },
    { name: 'Press Coverage', icon: Newspaper },
    { name: 'Speaker Moments', icon: Mic },
    { name: 'Networking', icon: Users },
  ];

  const images = [
    { src: '/hero-bg.png', label: 'Conference Stage', cat: 'Event Photos' },
    { src: '/networking.png', label: 'B2B Networking', cat: 'Networking' },
    { src: '/exhibition.png', label: 'Trade Exhibition', cat: 'Event Photos' },
    { src: '/isuc-bg.png', label: 'ISUC Convention', cat: 'Event Photos' },
    { src: '/about-bg.png', label: 'Corporate Meeting', cat: 'Speaker Moments' },
    { src: '/gallery-bg.png', label: 'Exhibition Floor', cat: 'Event Photos' },
    { src: '/services-bg.png', label: 'Event Staging', cat: 'Event Photos' },
    { src: '/networking.png', label: 'Deal Networking', cat: 'Networking' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/gallery-bg.png" alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black text-white mb-6"
          >
            Media & <span className="text-gold">Gallery</span>
          </motion.h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Visual highlights from our international exhibitions, conferences, and networking events.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`flex items-center px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all shrink-0 ${
                  i === 0
                    ? 'bg-navy text-white'
                    : 'bg-gray-50 text-gray-500 hover:bg-gold/10 hover:text-gold border border-gray-100'
                }`}
              >
                <cat.icon size={16} className="mr-2" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group relative cursor-pointer"
              >
                <img src={img.src} alt={img.label} className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <p className="text-white font-bold text-lg">{img.label}</p>
                    <p className="text-gold text-xs uppercase tracking-widest font-bold">{img.cat}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-navy mb-6">Video Highlights</h2>
          <p className="text-gray-500 mb-12">Coming soon — video highlights from our international events and conferences.</p>
          <div className="aspect-video bg-gray-100 rounded-3xl flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-gold transition-colors cursor-pointer">
                <Play size={32} className="text-white ml-1" fill="white" />
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Event Highlights Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

