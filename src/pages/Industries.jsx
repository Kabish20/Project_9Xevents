import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Button } from '@/components/common/Button';
import { INDUSTRIES_DATA } from '@/data/industriesData';

export const Industries = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Industries We Serve | 9X Events"
        description="9X Events creates specialized B2B networking, trade exhibitions, and conference platforms across 15+ industry sectors worldwide."
      />

      {/* Hero Banner */}
      <PageHero
        title="Industries We"
        highlight="Serve"
        subtitle="9X Events empowers a wide spectrum of industries by engineering specialized B2B networking platforms across 15+ global sectors."
        bgImage="/exhibition.png"
        align="center"
      />

      {/* Industries Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Specialized Verticals"
            title="Sector-Specific"
            highlight="Event Platforms"
            description="Every industry possesses distinct networking nuances. Our platforms are customized with industry-specific buyers, exhibitors, and agendas."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.map((industry, i) => (
              <motion.div
                key={industry.slug || industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -6 }}
                className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-gold/20 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                    <industry.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {industry.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    to="/contact"
                    variant="glass"
                    size="sm"
                    className="w-full text-xs"
                    icon={ArrowRight}
                    iconPosition="right"
                  >
                    Explore Opportunities
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Industry Callout */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
            Don't see your specific sector?
          </h3>
          <p className="text-gray-500 text-base md:text-lg mb-10 max-w-xl mx-auto">
            We engineer bespoke B2B forums, exhibitions, and delegations tailored to emerging and specialized markets.
          </p>
          <Button
            to="/contact"
            variant="navy"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
          >
            Contact Our Strategists
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Industries;
