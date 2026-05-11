import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'ISUC 2026', path: '/isuc-2026', special: true },
    { name: 'Industries', path: '/industries' },
    { name: 'Partners', path: '/partners' },
    { name: 'Gallery', path: '/gallery' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? 'glass py-2 shadow-lg shadow-navy/5'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src="/logo.png" alt="9X Events Logo" className="h-36 md:h-28 w-auto object-contain transition-all duration-300 transform origin-left hover:scale-105" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center xl:space-x-8 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-[13px] font-bold uppercase tracking-widest transition-all hover:text-gold ${location.pathname === link.path
                  ? 'text-gold'
                  : scrolled ? 'text-navy' : 'text-white/90'
                  } ${link.special ? 'bg-gold/10 px-3 py-1 rounded-full border border-gold/20' : ''}`}
              >
                {link.name}
                {location.pathname === link.path && !link.special && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold/90 text-white px-7 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-gold/20 animate-pulse-gold"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all active:scale-90 ${scrolled ? 'bg-navy/5 text-navy' : 'bg-white/10 text-white backdrop-blur-md'}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
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
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-5 rounded-2xl text-lg font-bold tracking-tight transition-all active:scale-[0.98] ${location.pathname === link.path 
                      ? 'bg-gold text-white shadow-lg shadow-gold/20' 
                      : 'text-navy hover:bg-navy/5'
                      }`}
                  >
                    <span>{link.name}</span>
                    {link.special && <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full uppercase">Special</span>}
                  </Link>
                </motion.div>
              ))}
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
    </nav>
  );
};

export default Navbar;
