import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, Users, Trophy, BarChart3, Calendar, Briefcase, Check, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const services = [
    { title: 'Trade Shows & Exhibitions', desc: 'Professional industry-focused trade events connecting businesses and decision-makers.', icon: Globe },
    { title: 'Conferences & Conventions', desc: 'Large-scale knowledge-sharing and networking platforms for industries and organizations.', icon: Users },
    { title: 'B2B Networking Events', desc: 'Curated networking experiences that create strategic business opportunities.', icon: BarChart3 },
    { title: 'Table Meets', desc: 'Focused business interaction sessions for targeted industry engagement.', icon: Calendar },
    { title: 'Corporate Events', desc: 'Professional event planning and management for organizations and brands.', icon: Briefcase },
    { title: 'International Delegations', desc: 'Business travel and networking experiences designed for market exposure and partnerships.', icon: Trophy },
  ];

  const industries = [
    'Travel & Tourism', 'Hospitality', 'Technology', 'Healthcare', 'Education',
    'Retail', 'Real Estate', 'Manufacturing', 'Finance', 'Logistics',
    'Food & Beverage', 'Fashion & Lifestyle', 'Startups', 'Export & Import'
  ];

  return (
    <div className="overflow-x-hidden">
      {/* ========== HERO SECTION ========== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-32 pb-20 justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img
            src="/hero-bg.png"
            alt="International Business Conference"
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-5 py-2 mb-8 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs font-bold uppercase tracking-[0.25em]"
            >
              ✦ Connecting Businesses Beyond Borders
            </motion.span>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-black text-white leading-[1.05] mb-8">
              Building Powerful{' '}
              <span className="text-gold relative">
                Business Experiences
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8 Q 75 2, 150 8 T 298 8" stroke="#c5a059" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
                </svg>
              </span>{' '}
              Across Industries
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
              9X Events is an international business events company specializing in trade shows, conferences, conventions, exhibitions, networking forums, and B2B industry platforms.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/events"
                className="bg-gold hover:bg-gold/90 text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-gold/30 flex items-center group"
              >
                Explore Events
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold transition-all"
              >
                Partner With Us
              </Link>
              <Link
                to="/contact"
                className="text-white/70 hover:text-white px-6 py-4 font-bold transition-all flex items-center"
              >
                Become an Exhibitor →
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-2">
          <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll-indicator" />
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-4">
                About 9X Events
              </motion.h2>
              <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-navy mb-8 leading-tight">
                Empowering Industries Through <span className="text-gold">Global Connections</span>
              </motion.h3>
              <motion.div variants={fadeInUp} className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  9X Events is a global business events and networking company established to create impactful platforms for industries, entrepreneurs, professionals, and organizations to connect, collaborate, and grow.
                </p>
                <p>
                  Backed by an existing international business ecosystem with operational presence in <strong className="text-navy">India, Dubai, Saudi Arabia, and Sri Lanka</strong>, we combine regional expertise with global event standards.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-12 grid grid-cols-3 gap-8">
                {[
                  { value: '4+', label: 'Countries' },
                  { value: '50+', label: 'Major Events' },
                  { value: '10K+', label: 'Connections' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <h4 className="text-4xl font-display font-black text-navy">{stat.value}</h4>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
                <img src="/about-bg.png" alt="Professional Business Meeting" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white animate-pulse-gold">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <p className="text-navy font-bold">Award Winning</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Event Excellence</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-navy text-white p-5 rounded-2xl shadow-xl hidden md:block">
                <p className="text-xs text-gold uppercase tracking-widest font-bold">Since</p>
                <p className="text-2xl font-display font-black">2024</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section className="py-28 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-4">Our Expertise</motion.h2>
            <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-navy">What We Do</motion.h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gold/20 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center text-navy mb-8 group-hover:bg-navy group-hover:text-gold transition-all duration-300">
                  <service.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">{service.title}</h4>
                <p className="text-gray-500 leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-sm font-bold text-navy flex items-center group-hover:text-gold transition-colors">
                  Learn More <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED EVENT — ISUC 2026 ========== */}
      <section className="py-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/isuc-bg.png" alt="" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold rounded-full blur-[200px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[180px] translate-y-1/2 -translate-x-1/3" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Star className="text-gold" size={20} fill="#c5a059" />
                  <span className="text-gold font-bold uppercase tracking-widest text-sm">Featured Event</span>
                </div>
                <h3 className="text-5xl md:text-6xl font-display font-black text-white mt-2 mb-6">
                  ISUC <span className="text-gold">2026</span> INDIA
                </h3>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                  A premier international business convention bringing together entrepreneurs, industry professionals, suppliers, travel businesses, and strategic partners under one networking ecosystem.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://isuc2026.com/" target="_blank" rel="noopener noreferrer" className="bg-gold hover:bg-gold/90 text-white px-8 py-3.5 rounded-full font-bold transition-all shadow-lg flex items-center group">
                    Visit ISUC 2026 <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </a>
                  <Link to="/contact" className="text-white border border-white/30 px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition-all">
                    Become a Sponsor
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img src="/isuc-bg.png" alt="ISUC 2026 Convention" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-4 -right-4 bg-gold text-navy font-bold p-6 rounded-2xl shadow-xl -rotate-3">
                  <p className="text-xs uppercase tracking-widest mb-1">Coming</p>
                  <p className="text-3xl font-display font-black">2026</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-4">Why 9X Events</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-navy mb-12 leading-tight">
                Your Trusted Partner for <span className="text-gold">Global Events</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  'International operational presence',
                  'Professional event execution',
                  'Strong B2B networking ecosystem',
                  'Industry-focused event strategies',
                  'Multi-country coordination support',
                  'Scalable event management solutions',
                  'Strategic business matchmaking',
                  'Experienced management team',
                  'International quality standards',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                      <Check size={14} className="text-gold" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img src="/networking.png" alt="Business Networking" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES ========== */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-4">Industries We Serve</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-navy mb-16">Industries We Work With</h3>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="px-6 py-3 bg-white rounded-full border border-gray-100 text-sm font-semibold text-navy shadow-sm hover:shadow-md hover:border-gold/30 hover:text-gold transition-all cursor-pointer"
              >
                {industry}
              </motion.div>
            ))}
          </div>

          <Link to="/industries" className="inline-flex items-center mt-12 text-gold font-bold uppercase tracking-widest text-sm hover:text-navy transition-colors">
            View All Industries <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>

      {/* ========== GLOBAL PRESENCE ========== */}
      <section className="py-28 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-4">International Presence</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Active Operational Ecosystem</h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
            Strategically positioned to organize and support business events, conferences, trade exhibitions, and networking platforms across four key regions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'India', flag: '🇮🇳' },
              { name: 'Dubai, UAE', flag: '🇦🇪' },
              { name: 'Saudi Arabia', flag: '🇸🇦' },
              { name: 'Sri Lanka', flag: '🇱🇰' },
            ].map((country) => (
              <motion.div
                key={country.name}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all group cursor-pointer"
              >
                <span className="text-4xl mb-4 block">{country.flag}</span>
                <h4 className="text-lg font-bold group-hover:text-gold transition-colors">{country.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS PLACEHOLDER ========== */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-4">Testimonials</h2>
          <h3 className="text-4xl font-display font-bold text-navy mb-16">What Our Partners Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: 'Working with 9X Events transformed our market entry strategy. Their B2B platform connected us with key decision-makers across the region.', author: 'Coming Soon', role: 'Partner Testimonial' },
              { quote: 'The professionalism and scale of the events organized by 9X Events exceeded our expectations. We look forward to continued collaboration.', author: 'Coming Soon', role: 'Partner Testimonial' },
              { quote: 'Their multi-country coordination and networking ecosystem is unmatched. 9X Events delivers real business results.', author: 'Coming Soon', role: 'Partner Testimonial' },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-gray-50 p-10 rounded-3xl border border-gray-100 text-left"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-gold" fill="#c5a059" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-8">"{t.quote}"</p>
                <div>
                  <p className="text-navy font-bold">{t.author}</p>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/exhibition.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Zap className="mx-auto text-gold mb-6" size={40} />
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Build Your Next <span className="text-gold">Business Event?</span>
            </h3>
            <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              From trade exhibitions and conferences to networking forums and conventions, 9X Events helps organizations create impactful business experiences with professional execution and global standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-gold hover:bg-gold/90 text-white px-12 py-4 rounded-full font-bold shadow-xl hover:shadow-gold/30 transition-all flex items-center group">
                Contact Our Team <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur text-white border border-white/20 px-12 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

