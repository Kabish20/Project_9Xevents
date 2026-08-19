import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyInfo';
import { FOOTER_QUICK_LINKS, FOOTER_SERVICES, LEGAL_LINKS } from '@/data/navigation';

const InstagramIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const socialIconMap = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      {/* Top Tagline Strip */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-2xl md:text-3xl font-display font-bold text-white/90">
            Creating Platforms That Connect <span className="text-gold">Industries</span> &{' '}
            <span className="text-gold">Opportunities</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission Column */}
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
              {COMPANY_INFO.description}
            </p>
            <div className="flex space-x-3">
              {COMPANY_INFO.socials.map((social) => {
                const IconComponent = socialIconMap[social.name] || InstagramIcon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:scale-110 transition-all text-white"
                    aria-label={social.name}
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-bold mb-6 font-display uppercase tracking-widest text-gold">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {FOOTER_QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  {item.isExternal ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold transition-colors flex items-center group"
                    >
                      {item.label}
                      <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className="hover:text-gold transition-colors flex items-center group"
                    >
                      {item.label}
                      <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-bold mb-6 font-display uppercase tracking-widest text-gold">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {FOOTER_SERVICES.map((serviceName) => (
                <li key={serviceName}>
                  <Link to="/services" className="hover:text-gold transition-colors">
                    {serviceName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Presence & Contact */}
          <div>
            <h3 className="text-sm font-bold mb-6 font-display uppercase tracking-widest text-gold">
              Global Presence
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span>India • Dubai, UAE • Saudi Arabia • Sri Lanka</span>
              </li>
              <li className="flex flex-col space-y-2">
                {COMPANY_INFO.contacts.phones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={`tel:${phone.raw}`}
                    className="flex items-center space-x-3 hover:text-gold transition-colors"
                  >
                    <Phone size={16} className="text-gold shrink-0" />
                    <span>{phone.number}</span>
                  </a>
                ))}
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.contacts.email}`}
                  className="flex items-center space-x-3 hover:text-gold transition-colors"
                >
                  <Mail size={16} className="text-gold shrink-0" />
                  <span>{COMPANY_INFO.contacts.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500 uppercase tracking-widest">
          <p>© {currentYear} {COMPANY_INFO.name}. All Rights Reserved.</p>
          <div className="flex space-x-8">
            {LEGAL_LINKS.map((legal) => (
              <Link key={legal.path} to={legal.path} className="hover:text-white transition-colors">
                {legal.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
