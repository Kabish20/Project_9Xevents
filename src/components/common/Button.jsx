import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

/**
 * Reusable Button component supporting both `<button>` and `<Link>`/`<a>`.
 */
export const Button = ({
  children,
  variant = 'gold',
  size = 'md',
  to,
  href,
  className,
  icon: Icon,
  iconPosition = 'right',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-bold tracking-wide rounded-full transition-all duration-300 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-gold/50 cursor-pointer';

  const variants = {
    gold: 'bg-gold hover:bg-gold/90 text-white shadow-lg hover:shadow-gold/30',
    navy: 'bg-navy hover:bg-navy-light text-white shadow-lg hover:shadow-navy/20',
    navyToGold: 'bg-navy text-white hover:bg-gold transition-colors',
    outline: 'bg-transparent border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm',
    outlineNavy: 'bg-transparent border border-navy/20 text-navy hover:bg-navy hover:text-white',
    glass: 'glass hover:bg-white/90 text-navy shadow-md',
  };

  const sizes = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-8 py-3.5 text-sm',
    lg: 'px-10 py-4 text-base',
  };

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" size={18} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClassName} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClassName} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
};

export default Button;
