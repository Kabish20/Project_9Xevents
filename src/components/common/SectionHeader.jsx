import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export const SectionHeader = ({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  dark = false,
  className,
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'mb-16',
        isCenter ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          'text-3xl md:text-5xl font-display font-bold tracking-tight leading-tight',
          dark ? 'text-white' : 'text-navy'
        )}
      >
        {title}{' '}
        {highlight && <span className="text-gold">{highlight}</span>}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-4 text-base md:text-lg leading-relaxed',
            dark ? 'text-gray-300' : 'text-gray-600'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
