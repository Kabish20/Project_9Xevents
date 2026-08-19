import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export const PageHero = ({
  title,
  highlight,
  subtitle,
  bgImage = '/hero-bg.png',
  align = 'left',
  children,
  className,
}) => {
  const isCenter = align === 'center';

  return (
    <section className={cn('relative pt-40 pb-28 overflow-hidden', className)}>
      {/* Background with Dark Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-navy/85 backdrop-blur-[2px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={cn(isCenter ? 'max-w-3xl mx-auto text-center' : 'max-w-3xl text-left')}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-white leading-tight mb-6"
          >
            {title}{' '}
            {highlight && <span className="text-gold">{highlight}</span>}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
