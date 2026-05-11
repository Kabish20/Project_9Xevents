import { motion } from 'framer-motion';
import { Plane, Building2, Laptop, Stethoscope, GraduationCap, ShoppingBag, Landmark, Factory, Truck, Utensils, Shirt, Rocket, DollarSign, Package, Church } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Industries = () => {
  const industries = [
    { name: 'Travel & Tourism', icon: Plane, desc: 'Connecting travel agencies, tour operators, and destination management companies through dedicated trade platforms.' },
    { name: 'Hospitality', icon: Building2, desc: 'Platforms for hotels, resorts, and hospitality service providers to network and grow.' },
    { name: 'Technology', icon: Laptop, desc: 'Showcasing innovations in IT, software, and digital transformation at premium tech summits.' },
    { name: 'Healthcare', icon: Stethoscope, desc: 'Connecting medical professionals and healthcare technology providers through B2B events.' },
    { name: 'Education', icon: GraduationCap, desc: 'Facilitating knowledge exchange and educational partnerships at international forums.' },
    { name: 'Retail', icon: ShoppingBag, desc: 'Networking for global retail brands and distributors through trade exhibitions.' },
    { name: 'Real Estate', icon: Landmark, desc: 'Connecting developers, investors, and property consultants at premium property expos.' },
    { name: 'Manufacturing', icon: Factory, desc: 'Trade events for industrial equipment and manufacturing solutions across borders.' },
    { name: 'Finance', icon: DollarSign, desc: 'Connecting financial institutions, fintech, and investment firms through networking forums.' },
    { name: 'Logistics', icon: Truck, desc: 'Optimizing supply chain and logistics through strategic events and partnerships.' },
    { name: 'Food & Beverage', icon: Utensils, desc: 'Exhibitions for global F&B brands, culinary innovations, and franchise opportunities.' },
    { name: 'Fashion & Lifestyle', icon: Shirt, desc: 'Showcasing the latest trends and connecting designers with international markets.' },
    { name: 'Startups & Entrepreneurship', icon: Rocket, desc: 'Empowering entrepreneurs and connecting startups with investors and mentors.' },
    { name: 'Religious & Community', icon: Church, desc: 'Supporting religious and community organizations in organizing large-scale gatherings.' },
    { name: 'Export & Import', icon: Package, desc: 'Facilitating international trade connections between exporters and importers globally.' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/exhibition.png" alt="Trade Exhibition" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black text-white mb-6"
          >
            Industries We <span className="text-gold">Serve</span>
          </motion.h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            9X Events supports a wide range of industries by creating specialized B2B networking platforms across 15+ sectors.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-gold/20 transition-all group"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:bg-navy group-hover:text-white transition-all">
                  <industry.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{industry.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-display font-bold text-navy mb-6">Don't see your industry?</h3>
          <p className="text-gray-500 mb-10">We create custom events for any industry. Get in touch with our team to discuss your requirements.</p>
          <Link to="/contact" className="bg-navy text-white px-12 py-4 rounded-full font-bold hover:bg-gold transition-colors inline-flex items-center group">
            Contact Us <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries;

