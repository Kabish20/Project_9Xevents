import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '@/components/common/SEO';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeader } from '@/components/common/SectionHeader';
import { CTASection } from '@/components/sections/CTASection';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '@/data/galleryData';
import { cn } from '@/utils/cn';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.categoryId === activeCategory);

  return (
    <div className="min-h-screen">
      <SEO
        title="Media & Gallery | 9X Events"
        description="Explore visual highlights, keynote stages, exhibitions, and networking moments from 9X Events international conferences."
      />

      {/* Hero Banner */}
      <PageHero
        title="Media &"
        highlight="Gallery"
        subtitle="Visual highlights and moments from our international exhibitions, conferences, and executive networking platforms."
        bgImage="/gallery-bg.png"
        align="center"
      />

      {/* Category Filter Bar */}
      <section className="py-6 border-b border-gray-100 sticky top-18 z-40 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-none justify-start md:justify-center">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const Icon = cat.icon;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    'flex items-center px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer',
                    isActive
                      ? 'bg-navy text-white shadow-md shadow-navy/20'
                      : 'bg-gray-50 text-gray-500 hover:bg-gold/10 hover:text-gold border border-gray-100'
                  )}
                >
                  <Icon size={16} className="mr-2" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50 min-h-125">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filteredItems.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group relative cursor-pointer bg-white"
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/85 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div>
                      <p className="text-white font-bold text-lg">{img.label}</p>
                      <p className="text-gold text-xs uppercase tracking-widest font-bold mt-1">
                        {img.cat}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Highlights Placeholder */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Media Stream"
            title="Video"
            highlight="Highlights"
            description="Experience the atmosphere, keynote sessions, and delegate perspectives from our premier summits."
            align="center"
          />

          <div className="aspect-video bg-gray-50 rounded-3xl flex flex-col items-center justify-center border border-gray-200 shadow-inner p-8">
            <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-4 border border-gold/20">
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-navy font-bold text-lg mb-1">Event Video Showreels</p>
            <p className="text-gray-400 text-sm max-w-md">
              High-definition showreels and interviews will be uploaded post-event broadcast.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
};

export default Gallery;
