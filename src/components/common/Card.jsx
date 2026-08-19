import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export const Card = ({
  children,
  className,
  hoverEffect = true,
  variant = 'default',
  ...props
}) => {
  const variants = {
    default: 'bg-white border border-gray-100 shadow-sm',
    gray: 'bg-gray-50 border border-gray-100',
    dark: 'bg-navy/90 border border-white/10 text-white',
    glass: 'glass border border-white/20',
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'rounded-3xl p-8 transition-all duration-300',
        variants[variant],
        hoverEffect && 'hover:shadow-xl hover:border-gold/20',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
