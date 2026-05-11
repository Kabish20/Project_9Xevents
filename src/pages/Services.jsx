import { motion } from 'framer-motion';
import { Globe, Users, Briefcase, Calendar, Award, MessageSquare, Zap, Map, Megaphone, Hotel, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { title: 'Trade Shows & Exhibitions', icon: Globe, desc: 'Professional industry-focused trade events connecting businesses and decision-makers across global markets.' },
    { title: 'Conferences & Summits', icon: Users, desc: 'Large-scale knowledge-sharing and networking platforms for industries and organizations.' },
    { title: 'Convention Management', icon: Award, desc: 'End-to-end planning and execution of large-scale conventions and professional gatherings.' },
    { title: 'B2B Networking Events', icon: Zap, desc: 'Curated networking experiences that create strategic business opportunities and partnerships.' },
    { title: 'Table Meets', icon: Calendar, desc: 'Focused business interaction sessions for targeted industry engagement and deal-making.' },
    { title: 'Sponsorship Management', icon: Briefcase, desc: 'Strategic partnership and sponsorship acquisition for maximum event ROI and brand visibility.' },
    { title: 'Delegate Management', icon: MessageSquare, desc: 'Seamless registration and support for international and local delegates.' },
    { title: 'Event Marketing & Promotions', icon: Megaphone, desc: 'Comprehensive marketing strategies to maximize event reach and attendance.' },
    { title: 'Venue & Hospitality Coordination', icon: Hotel, desc: 'Professional venue selection and hospitality management for world-class experiences.' },
    { title: 'International Delegation Management', icon: Map, desc: 'Business travel and networking experiences designed for global market exposure.' },
    { title: 'Corporate Event Planning', icon: Sparkles, desc: 'Bespoke corporate event solutions from ideation to flawless execution.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/services-bg.png" alt="Event Stage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black text-white mb-6"
          >
            Our <span className="text-gold">Services</span>
          </motion.h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Creating Platforms That Connect Industries & Opportunities with Professional Execution and Global Standards.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group p-10 border border-gray-100 rounded-3xl hover:bg-navy transition-all duration-500 hover:shadow-2xl hover:shadow-navy/10"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-8 group-hover:bg-white group-hover:text-navy transition-all">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-display font-bold text-navy mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors mb-8">
                  {service.desc}
                </p>
                <Link
                  to="/contact"
                  className="text-sm font-bold text-gold uppercase tracking-widest flex items-center group-hover:text-white transition-colors"
                >
                  Enquire <ArrowRight className="ml-2" size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-4">Why Us</h2>
              <h3 className="text-4xl font-display font-bold text-navy mb-10">Why Choose 9X Events?</h3>
              <div className="space-y-5">
                {[
                  'International operational presence across 4+ countries',
                  'Professional event execution with global standards',
                  'Strong B2B networking ecosystem',
                  'Industry-focused event strategies',
                  'Multi-country coordination support',
                  'Scalable event management solutions',
                  'Strategic business matchmaking',
                  'Experienced management team',
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-white shrink-0">
                      <Zap size={14} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-navy p-12 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-3">Request a Consultation</h3>
              <p className="text-gray-400 mb-8">Let our team help you design and execute a world-class business event.</p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white placeholder-white/30 outline-none focus:border-gold transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white placeholder-white/30 outline-none focus:border-gold transition-colors" />
                <input type="text" placeholder="Company Name" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white placeholder-white/30 outline-none focus:border-gold transition-colors" />
                <select className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white/50 outline-none focus:border-gold transition-colors appearance-none">
                  <option>Select Service</option>
                  <option>Trade Shows</option>
                  <option>Conferences</option>
                  <option>Networking Events</option>
                  <option>Corporate Events</option>
                  <option>Convention Management</option>
                </select>
                <button type="submit" className="w-full bg-gold text-white py-4 rounded-xl font-bold hover:bg-gold/90 transition-all shadow-lg">Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

