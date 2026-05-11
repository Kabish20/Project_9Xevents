import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const events = [
    {
      title: 'ISUC 2026 INDIA',
      type: 'Featured Event',
      date: 'TBA 2026',
      venue: 'New Delhi, India',
      image: '/isuc-bg.png',
      desc: 'A premier international business convention bringing together entrepreneurs, industry professionals, and strategic partners.',
      featured: true,
    },
    {
      title: 'Global Trade Summit 2026',
      type: 'Conference',
      date: 'Q3 2026',
      venue: 'Dubai, UAE',
      image: '/exhibition.png',
      desc: 'Focusing on the next generation of international trade and B2B commerce innovations in the Middle East.',
      featured: false,
    },
    {
      title: 'Saudi B2B Expo',
      type: 'Trade Show',
      date: 'Q4 2026',
      venue: 'Riyadh, KSA',
      image: '/networking.png',
      desc: 'An expansive trade show connecting international brands with the growing Saudi Arabian market.',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/gallery-bg.png" alt="Exhibition" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black text-white mb-6"
          >
            Our <span className="text-gold">Events</span>
          </motion.h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Explore our upcoming trade shows, conferences, and networking forums across the globe.
          </p>
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col lg:flex-row group hover:shadow-xl transition-all"
              >
                <div className="lg:w-2/5 relative overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-gold text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center shadow-lg">
                      <Star className="mr-1.5" size={12} fill="white" /> {event.type}
                    </span>
                  </div>
                  {event.featured && (
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-navy/80 to-transparent p-6">
                      <p className="text-gold text-xs font-bold uppercase tracking-widest">★ Flagship Event</p>
                    </div>
                  )}
                </div>
                <div className="lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-6 mb-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
                    <span className="flex items-center"><Calendar className="mr-2 text-gold" size={16} /> {event.date}</span>
                    <span className="flex items-center"><MapPin className="mr-2 text-gold" size={16} /> {event.venue}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">{event.title}</h3>
                  <p className="text-gray-500 text-lg mb-10 leading-relaxed">{event.desc}</p>
                  <div className="flex flex-wrap gap-4">
                    {event.featured ? (
                      <a href="https://isuc2026.com/" target="_blank" rel="noopener noreferrer" className="bg-navy text-white px-8 py-3.5 rounded-full font-bold hover:bg-gold transition-colors flex items-center">
                        Visit Official Site <ArrowRight className="ml-2" size={18} />
                      </a>
                    ) : (
                      <button className="bg-navy text-white px-8 py-3.5 rounded-full font-bold hover:bg-gold transition-colors flex items-center">
                        View Details <ArrowRight className="ml-2" size={18} />
                      </button>
                    )}
                    <Link to="/contact" className="text-navy border border-navy/10 px-8 py-3.5 rounded-full font-bold hover:bg-gray-50 transition-all">
                      Register Interest
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-navy mb-8">Want to See Our Past Success?</h2>
          <p className="text-gray-500 mb-10">Check out our media gallery for highlights from previous exhibitions and conferences.</p>
          <Link to="/gallery" className="text-gold font-bold uppercase tracking-[0.2em] inline-flex items-center border-b-2 border-gold pb-2 hover:text-navy hover:border-navy transition-colors">
            Explore Media Gallery <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events;

