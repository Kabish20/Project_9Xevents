import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Globe, Bell } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { COMPANY_INFO } from '@/data/companyInfo';

export const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Introduction',
      icon: FileText,
      content:
        '9X Events ("we," "us," or "our") is dedicated to safeguarding your privacy. This Privacy Policy details how we gather, utilize, protect, and manage your personal data when you interact with our website or engage with our international business events across India, UAE, Saudi Arabia, and Sri Lanka.',
    },
    {
      title: 'Information Collection',
      icon: Eye,
      content:
        'We collect details you voluntarily share when registering for conferences, trade fairs, summits, subscribing to industry briefings, or submitting partnership enquiries. This may include your full name, professional email, contact numbers, organization name, designation, and sector preferences.',
    },
    {
      title: 'How We Use Your Information',
      icon: Lock,
      content:
        'Your information is utilized to coordinate delegate passes, facilitate buyer-seller table meets, communicate critical event updates, issue official badges, and continually refine our B2B networking ecosystems. With explicit consent, we may send you notifications regarding upcoming summits.',
    },
    {
      title: 'Data Sharing & International Transfers',
      icon: Globe,
      content:
        'As an international events company, data may be accessed securely by our regional desks in India, UAE, Saudi Arabia, and Sri Lanka strictly for international delegation clearance, travel coordination, and venue security protocol.',
    },
    {
      title: 'Data Security & Storage',
      icon: Shield,
      content:
        'We implement enterprise-grade encryption and administrative safeguards to defend your personal data from unauthorized disclosure, destruction, or interception.',
    },
    {
      title: 'Your Privacy Rights & Updates',
      icon: Bell,
      content:
        'You have the explicit right to access, rectify, or request deletion of your information stored within our database. We review and update this policy periodically to align with evolving statutory guidelines.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Privacy Policy | 9X Events"
        description="Read the official Privacy Policy of 9X Events outlining our data collection, security, and global delegate privacy standards."
      />

      {/* Hero Banner */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#c5a059_0%,transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black text-white mb-4"
          >
            Privacy <span className="text-gold">Policy</span>
          </motion.h1>
          <p className="text-gray-400 text-base sm:text-lg">Last Updated: May 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gold border border-gray-100 shadow-sm">
                    <section.icon size={28} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-navy mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-10 sm:p-12 bg-gray-50 rounded-3xl border border-gray-100">
            <h3 className="text-xl font-bold text-navy mb-2">
              Questions Regarding Data Protection?
            </h3>
            <p className="text-gray-500 mb-6 text-sm">
              If you have any questions or requests concerning your data rights, please contact our data desk at:
            </p>
            <a
              href={`mailto:${COMPANY_INFO.contacts.email}`}
              className="text-gold font-bold text-lg hover:underline transition-all"
            >
              {COMPANY_INFO.contacts.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
