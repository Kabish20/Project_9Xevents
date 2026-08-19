import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { TESTIMONIALS_DATA } from '@/data/testimonialsData';

export const TestimonialsSection = ({
  eyebrow = 'Testimonials',
  title = 'What Our Partners',
  highlight = 'Say',
}) => {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-gray-50 p-10 rounded-3xl border border-gray-100 text-left flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating || 5)].map((_, j) => (
                    <Star key={j} size={16} className="text-gold" fill="#c5a059" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-gray-200/60 pt-6">
                <p className="text-navy font-bold text-base">{t.author}</p>
                <p className="text-gold text-xs font-semibold uppercase tracking-wider mt-0.5">{t.role}</p>
                {t.organization && (
                  <p className="text-gray-400 text-xs mt-0.5">{t.organization}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
