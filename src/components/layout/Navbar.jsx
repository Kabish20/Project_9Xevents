import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { NAV_LINKS } from '@/data/navigation';
import { cn } from '@/utils/cn';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrolled } = useScrollPosition(20);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500',
        isScrolled
          ? 'glass py-2 shadow-lg shadow-navy/5'
          : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="9X Events Logo"
              className="h-24 sm:h-28 w-auto object-contain transition-all duration-300 transform origin-left group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center xl:space-x-8 lg:space-x-4">
            {NAV_LINKS.map((link) => {
              const isExternal = Boolean(link.isExternal);
              const isActive = location.pathname === link.path;

              const content = (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </>
              );

              const linkClasses = cn(
                'relative text-[12px] font-bold uppercase tracking-widest transition-all hover:text-gold whitespace-nowrap',
                isActive
                  ? 'text-gold'
                  : isScrolled
                  ? 'text-navy'
                  : 'text-white/90',
                link.special && 'text-gold'
              );

              return isExternal ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                >
                  {content}
                </a>
              ) : (
                <Link key={link.name} to={link.path} className={linkClasses}>
                  {content}
                </Link>
              );
            })}

            {/* Desktop Partner CTA */}
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold/90 text-white px-7 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-gold/20 animate-pulse-gold"
            >
              Partner With Us
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'lg:hidden p-3 rounded-xl transition-all active:scale-90',
              isScrolled
                ? 'bg-navy/5 text-navy'
                : 'bg-white/10 text-white backdrop-blur-md'
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden glass border-t border-white/10 max-h-[calc(100vh-80px)] overflow-y-auto shadow-2xl"
          >
            <div className="px-6 pt-6 pb-12 space-y-2">
              {NAV_LINKS.map((link, i) => {
                const isExternal = Boolean(link.isExternal);
                const isActive = location.pathname === link.path;

                const mobileLinkClasses = cn(
                  'flex items-center justify-between px-4 py-5 rounded-2xl text-lg font-bold tracking-tight transition-all active:scale-[0.98]',
                  isActive
                    ? 'bg-gold text-white shadow-lg shadow-gold/20'
                    : 'text-navy hover:bg-navy/5'
                );

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    {isExternal ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={mobileLinkClasses}
                      >
                        <span>{link.name}</span>
                      </a>
                    ) : (
                      <Link to={link.path} className={mobileLinkClasses}>
                        <span>{link.name}</span>
                      </Link>
                    )}
                  </motion.div>
                );
              })}

              <div className="pt-6">
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full bg-navy text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-navy/20 active:scale-[0.98] transition-all"
                >
                  GET STARTED
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
