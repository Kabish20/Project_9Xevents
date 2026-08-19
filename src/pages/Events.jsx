import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/common/SEO';
import { PageHero } from '@/components/common/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/common/Button';
import { EVENTS_DATA } from '@/data/eventsData';

export const Events = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Events & Conferences | 9X Events"
        description="Explore our upcoming trade shows, international business conferences, and networking forums across India, UAE, and Saudi Arabia."
      />

      {/* Hero Banner */}
      <PageHero
        title="Our"
        highlight="Events"
        subtitle="Explore our upcoming trade shows, conferences, and networking forums connecting businesses across the globe."
        bgImage="/gallery-bg.png"
        align="center"
      />

      {/* Events Listing */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {EVENTS_DATA.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col lg:flex-row group hover:shadow-xl transition-all"
              >
                {/* Event Image Column */}
                <div className="lg:w-2/5 relative overflow-hidden min-h-75">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-gold text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center shadow-lg">
                      <Star className="mr-1.5" size={12} fill="white" /> {event.type}
                    </span>
                  </div>
                  {event.featured && (
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-navy/90 to-transparent p-6">
                      <p className="text-gold text-xs font-bold uppercase tracking-widest">★ Flagship Global Convention</p>
                    </div>
                  )}
                </div>

                {/* Event Details Column */}
                <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-6 mb-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
                    <span className="flex items-center">
                      <Calendar className="mr-2 text-gold" size={16} /> {event.date}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="mr-2 text-gold" size={16} /> {event.venue}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                    {event.title}
                  </h3>

                  <p className="text-gray-500 text-base md:text-lg mb-6 leading-relaxed">
                    {event.desc}
                  </p>

                  {event.highlights && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {event.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center text-xs sm:text-sm text-gray-600">
                          <CheckCircle2 size={14} className="text-gold mr-2 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4">
                    {event.externalUrl ? (
                      <Button
                        href={event.externalUrl}
                        variant="gold"
                        size="md"
                        icon={ArrowRight}
                        iconPosition="right"
                      >
                        Visit Official Site
                      </Button>
                    ) : (
                      <Button
                        to="/contact"
                        variant="navy"
                        size="md"
                        icon={ArrowRight}
                        iconPosition="right"
                      >
                        Register Interest
                      </Button>
                    )}

                    <Button
                      to="/contact"
                      variant="outlineNavy"
                      size="md"
                    >
                      Sponsor Event
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want to Host or Co-Organize"
        highlight="an Event?"
        description="Partner with 9X Events to conceptualize, manage, and promote industry trade fairs, conventions, and networking summits."
        primaryBtnText="Discuss Partnership"
      />
    </div>
  );
};

export default Events;
