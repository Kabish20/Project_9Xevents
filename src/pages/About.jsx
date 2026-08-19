import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, Star, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeader } from '@/components/common/SectionHeader';
import { GlobalPresence } from '@/components/sections/GlobalPresence';
import { CTASection } from '@/components/sections/CTASection';
import { COMPANY_INFO } from '@/data/companyInfo';
import { CORE_VALUES } from '@/data/testimonialsData';

const valueIcons = [Shield, Target, Eye, Star, Heart, ArrowRight];

export const About = () => {
  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us"
        description="Learn about 9X Events - a global business events and networking company creating impactful platforms across India, UAE, Saudi Arabia, and Sri Lanka."
      />

      {/* Hero Banner */}
      <PageHero
        title="About"
        highlight="9X Events"
        subtitle="A global business events and networking company creating impactful platforms for industries to connect, collaborate, and grow across borders."
        bgImage="/about-bg.png"
      />

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
              <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-gold pl-6 italic">
                "To deliver high-value conferences, exhibitions, trade platforms, and networking forums that drive business collaboration, market expansion, and economic development."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Foundation"
            title="Core"
            highlight="Values"
            description="The guiding principles that shape our work culture, partnership ethos, and event standards."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_VALUES.map((val, i) => {
              const IconComponent = valueIcons[i % valueIcons.length];
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:border-gold/30 transition-all"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{val.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <GlobalPresence dark={false} />

      {/* CTA */}
      <CTASection />
    </div>
  );
};

export default About;
