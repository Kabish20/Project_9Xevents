import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/common/Button';

export const CTASection = ({
  title = 'Ready to Build Your Next',
  highlight = 'Business Event?',
  description = 'From trade exhibitions and conferences to networking forums and conventions, 9X Events helps organizations create impactful business experiences with professional execution and global standards.',
  primaryBtnText = 'Contact Our Team',
  primaryBtnTo = '/contact',
  secondaryBtnText = 'Schedule Consultation',
  secondaryBtnTo = '/contact',
  bgImage = '/exhibition.png',
}) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image with Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="Event background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/90" />
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold/10 text-gold mb-6 border border-gold/20">
            <Zap size={32} />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 leading-tight">
            {title} <span className="text-gold">{highlight}</span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              to={primaryBtnTo}
              variant="gold"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              {primaryBtnText}
            </Button>

            <Button
              to={secondaryBtnTo}
              variant="outline"
              size="lg"
            >
              {secondaryBtnText}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
