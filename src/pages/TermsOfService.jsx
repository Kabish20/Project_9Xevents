import { motion } from 'framer-motion';
import { Gavel, Scale, AlertCircle, Calendar, Users, ShieldCheck } from 'lucide-react';
import { SEO } from '@/components/common/SEO';

export const TermsOfService = () => {
  const terms = [
    {
      title: 'Agreement to Terms',
      icon: Gavel,
      content:
        'By accessing our online platforms or registering for any trade exhibitions, summits, or conventions organized by 9X Events, you agree to be bound by these official Terms of Service.',
    },
    {
      title: 'Event Registration & Admission',
      icon: Calendar,
      content:
        'Admission is subject to verification and formal credential review. 9X Events retains the right to refuse or revoke registration to safeguard the professional integrity and security of the forum.',
    },
    {
      title: 'Cancellation & Substitution Policy',
      icon: AlertCircle,
      content:
        'Cancellation terms vary by delegate and exhibitor packages. Written substitution of delegates is typically permissible up to 7 business days prior to event commencement.',
    },
    {
      title: 'Professional Code of Conduct',
      icon: Users,
      content:
        'All delegates, speakers, and exhibitors are expected to maintain the highest standard of professional ethics. Unsanctioned marketing (suitcasing) or disruptive actions are strictly prohibited.',
    },
    {
      title: 'Intellectual Property Rights',
      icon: ShieldCheck,
      content:
        'All presentation collateral, event branding, logos, and materials remain the protected intellectual property of 9X Events or respective keynote partners.',
    },
    {
      title: 'Limitation of Liability',
      icon: Scale,
      content:
        '9X Events is not responsible for direct or indirect losses resulting from event attendance, travel delays, or external business outcomes from networking connects.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Terms of Service | 9X Events"
        description="Review the official Terms of Service governing participation, registrations, and exhibitions with 9X Events."
      />

      {/* Hero Banner */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,#c5a059_0%,transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black text-white mb-4"
          >
            Terms of <span className="text-gold">Service</span>
          </motion.h1>
          <p className="text-gray-400 text-base sm:text-lg">Effective Date: May 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {terms.map((term, i) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold shrink-0">
                    <term.icon size={24} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-navy">{term.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg pl-0 md:pl-16">
                  {term.content}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center text-gray-500 text-sm italic">
            For specific corporate exhibition, stall booking, or sponsorship contracts, terms specified in the executed MoU shall govern.
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
