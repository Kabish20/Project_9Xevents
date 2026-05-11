import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake } from 'lucide-react';

const Partners = () => {
  const sections = [
    { title: 'Strategic Partners', count: 4 },
    { title: 'Supporting Organizations', count: 6 },
    { title: 'Media Partners', count: 4 },
    { title: 'Corporate Sponsors', count: 6 },
    { title: 'Knowledge Partners', count: 4 },
    { title: 'Association Partners', count: 4 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/networking.png" alt="Partnerships" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black text-white mb-6"
          >
            Partners & <span className="text-gold">Sponsors</span>
          </motion.h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">Collaborating with global leaders to deliver excellence in every event.</p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-2xl font-bold text-navy mb-10 border-b border-gray-100 pb-4 flex items-center">
                <Handshake className="text-gold mr-3" size={24} />
                {section.title}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[...Array(section.count)].map((_, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="h-32 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 grayscale hover:grayscale-0 hover:border-gold/20 hover:shadow-md transition-all cursor-pointer"
                  >
                    <p className="text-gray-300 font-bold uppercase tracking-widest text-xs">Partner Logo</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Become a Partner CTA */}
          <div className="bg-linear-to-r from-navy to-navy-light p-16 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer" />
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-bold text-white mb-4">Become a Partner</h3>
              <p className="text-gray-300 mb-10 max-w-xl mx-auto">
                Join our ecosystem of international businesses and organizations. Request our sponsorship deck today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="bg-gold text-white px-10 py-4 rounded-full font-bold hover:bg-gold/90 transition-all shadow-lg flex items-center group">
                  Partner Enquiry <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                <button className="text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                  Request Sponsor Deck
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;

