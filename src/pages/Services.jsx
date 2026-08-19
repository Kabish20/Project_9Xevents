import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/common/SEO';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeader } from '@/components/common/SectionHeader';
import { CTASection } from '@/components/sections/CTASection';
import { SERVICES_DATA } from '@/data/servicesData';

export const Services = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Our Services | Trade Shows, Conferences & Event Management"
        description="Explore 9X Events comprehensive event services: trade shows, exhibitions, B2B summits, convention management, and international delegation coordination."
      />

      {/* Hero Banner */}
      <PageHero
        title="Our"
        highlight="Services"
        subtitle="Creating Platforms That Connect Industries & Opportunities with Professional Execution and Global Standards."
        bgImage="/services-bg.png"
        align="center"
      />

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Deliver"
            title="Comprehensive"
            highlight="Event Solutions"
            description="From large-scale trade exhibitions to executive B2B table meets, we deliver turn-key event management tailored to your industry."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES_DATA.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -8 }}
                className="group p-10 border border-gray-100 rounded-3xl hover:bg-navy transition-all duration-500 hover:shadow-2xl hover:shadow-navy/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-8 group-hover:bg-white group-hover:text-navy transition-all">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-navy mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors mb-8 text-sm">
                    {service.desc}
                  </p>
                </div>

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
                    <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0">
                      <Check size={14} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                <img src="/exhibition.png" alt="Trade Show" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
};

export default Services;
