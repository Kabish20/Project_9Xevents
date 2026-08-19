import { motion } from 'framer-motion';
import { Handshake, ArrowRight, Award, ShieldCheck } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { PageHero } from '@/components/common/PageHero';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Button } from '@/components/common/Button';
import { CTASection } from '@/components/sections/CTASection';
import { PARTNER_TIERS } from '@/data/partnersData';

export const Partners = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Partners & Sponsors | 9X Events"
        description="Discover our global network of strategic partners, supporting organizations, and corporate sponsors collaborating with 9X Events."
      />

      {/* Hero Banner */}
      <PageHero
        title="Partners &"
        highlight="Sponsors"
        subtitle="Collaborating with global industry leaders, trade associations, and corporate pioneers to deliver excellence in every event."
        bgImage="/networking.png"
        align="center"
      />

      {/* Partners Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Collaborative Ecosystem"
            title="Our Strategic"
            highlight="Network"
            description="We collaborate with international trade bodies, government councils, and enterprises across the globe."
            align="center"
          />

          {PARTNER_TIERS.map((tier, i) => (
            <motion.div
              key={tier.id || tier.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20 last:mb-0"
            >
              <div className="border-b border-gray-100 pb-4 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-2xl font-display font-bold text-navy flex items-center">
                  <Handshake className="text-gold mr-3" size={24} />
                  {tier.title}
                </h2>
                {tier.description && (
                  <span className="text-xs font-semibold text-gray-400 mt-1 sm:mt-0 uppercase tracking-wider">
                    {tier.description}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {[...Array(tier.count)].map((_, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="h-32 bg-gray-50 rounded-2xl flex flex-col items-center justify-center p-4 border border-gray-100 grayscale hover:grayscale-0 hover:border-gold/30 hover:bg-white hover:shadow-md transition-all cursor-pointer group"
                  >
                    <Award className="text-gray-300 group-hover:text-gold transition-colors mb-2" size={24} />
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-[11px] group-hover:text-navy transition-colors">
                      {tier.title.split(' ')[0]} Partner
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Become a Partner Callout Box */}
          <div className="mt-20 bg-linear-to-r from-navy to-navy-light p-10 sm:p-16 rounded-3xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 animate-shimmer" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-gold mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Become a Global Partner
              </h3>
              <p className="text-gray-300 mb-8 text-base md:text-lg leading-relaxed">
                Join our ecosystem of international businesses and organizations. Request our customized partnership & sponsorship deck today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  to="/contact"
                  variant="gold"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Partner Enquiry
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  size="lg"
                >
                  Request Sponsor Deck
                </Button>
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

export default Partners;
