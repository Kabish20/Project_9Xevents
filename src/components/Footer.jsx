import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      {/* Tagline Bar */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-2xl md:text-3xl font-display font-bold text-white/90">
            Creating Platforms That Connect <span className="text-gold">Industries</span> & <span className="text-gold">Opportunities</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center space-x-3">
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-display font-black tracking-tight">
                  9X <span className="text-gold">EVENTS</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.35em] uppercase text-gold/80">
                  Global Networking
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              9X Events is a global business events and networking company creating impactful platforms for industries to connect, collaborate, and grow.
            </p>
            <div className="flex space-x-3">
              {['linkedin', 'twitter', 'instagram', 'facebook'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:scale-110 transition-all"
                  aria-label={platform}
                >
                  <Globe size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-6 font-display uppercase tracking-widest text-gold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Events', path: '/events' },
                { label: 'Industries', path: '/industries' },
                { label: 'Partners', path: '/partners' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'ISUC 2026', path: '/isuc-2026' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="hover:text-gold transition-colors flex items-center group"
                  >
                    {item.label}
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold mb-6 font-display uppercase tracking-widest text-gold">Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {[
                'Trade Shows & Exhibitions',
                'Conferences & Summits',
                'B2B Networking Events',
                'Corporate Events',
                'Convention Management',
              ].map((item) => (
                <li key={item}>
                  <Link to="/services" className="hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Presence & Contact */}
          <div>
            <h3 className="text-sm font-bold mb-6 font-display uppercase tracking-widest text-gold">Global Presence</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span>India • Dubai, UAE • Saudi Arabia • Sri Lanka</span>
              </li>
              <li className="flex flex-col space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-gold shrink-0" />
                  <span>+91 807 289 6589</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-gold shrink-0" />
                  <span>+966 55 889 1231</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-gold shrink-0" />
                <span>connect@9Xevents.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500 uppercase tracking-widest">
          <p>© {currentYear} 9X Events. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
