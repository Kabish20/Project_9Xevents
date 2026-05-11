import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const values = [
    { title: 'Professionalism', icon: Shield, desc: 'Maintaining the highest standards in every event we organize.' },
    { title: 'Integrity', icon: Target, desc: 'Building trust through transparent and ethical business practices.' },
    { title: 'Innovation', icon: Eye, desc: 'Constantly evolving our event formats and technology.' },
    { title: 'Collaboration', icon: Star, desc: 'Creating ecosystems where businesses grow together.' },
    { title: 'Excellence', icon: Heart, desc: 'Striving for perfection in execution and experience.' },
    { title: 'Long-Term Relationships', icon: ArrowRight, desc: 'Fostering partnerships that last beyond a single event.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/about-bg.png" alt="Corporate Team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-black text-white mb-6"
            >
              About <span className="text-gold">9X Events</span>
            </motion.h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A global business events and networking company creating impactful platforms for industries to connect, collaborate, and grow across borders.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-4">Company Overview</h2>
              <h3 className="text-4xl font-display font-bold text-navy mb-8 leading-tight">
                Building Bridges Between <span className="text-gold">Markets & Industries</span>
              </h3>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  9X Events is a global business events and networking company established to create impactful platforms for industries, entrepreneurs, professionals, and organizations to connect, collaborate, and grow.
                </p>
                <p>
                  We specialize in organizing trade events, conventions, conferences, networking forums, exhibitions, and business matchmaking experiences designed to create meaningful industry connections and long-term opportunities.
                </p>
                <p>
                  Backed by an existing international business ecosystem with operational presence in <strong className="text-navy">India, Dubai, Saudi Arabia, and Sri Lanka</strong>, 9X Events combines regional expertise with global event standards.
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
                <img src="/networking.png" alt="Business Networking" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6">
                <Eye size={28} />
              </div>
              <h2 className="text-3xl font-display font-bold text-navy mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-gold pl-6 italic">
                "To become a globally recognized business events platform connecting industries, businesses, and opportunities beyond borders."
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-navy p-12 rounded-3xl shadow-xl"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold mb-6">
                <Target size={28} />
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">Our Mission</h2>
              <ul className="space-y-4 text-gray-300 text-lg">
                {[
                  'To create meaningful business networking experiences',
                  'To support industries through impactful events',
                  'To connect international businesses with regional markets',
                  'To deliver professional event solutions with global standards',
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-gold rounded-full flex items-center justify-center shrink-0 mt-1">
                      <ArrowRight size={10} className="text-white" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-4">What Defines Us</h2>
            <h3 className="text-4xl font-display font-bold text-navy">Our Core Values</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-gold/20 transition-all text-center"
              >
                <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center text-gold mx-auto mb-6">
                  <value.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-navy mb-3">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-4">Leadership</h2>
          <h3 className="text-4xl font-display font-bold text-navy mb-12">Leadership Message</h3>
          <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-xl text-gray-600 leading-relaxed italic mb-8">
              "At 9X Events, we believe that the right connection can change the course of an industry. Our platforms are built to bridge the gap between regional markets and global opportunities. We don't just organize events — we create ecosystems where businesses thrive."
            </p>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-navy font-black uppercase tracking-widest">Management Team</p>
            <p className="text-gold text-sm font-bold mt-1">9X Events Global</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-display font-bold text-white mb-6">Want to Know More?</h3>
          <p className="text-gray-400 mb-10">Discover how 9X Events can help you create impactful business experiences.</p>
          <Link to="/contact" className="bg-gold hover:bg-gold/90 text-white px-12 py-4 rounded-full font-bold transition-all shadow-xl inline-flex items-center group">
            Get In Touch <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;

