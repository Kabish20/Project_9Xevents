import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Globe, Bell } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Introduction',
      icon: FileText,
      content: '9X Events ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or participate in our events across India, UAE, Saudi Arabia, and Sri Lanka.'
    },
    {
      title: 'Information Collection',
      icon: Eye,
      content: 'We collect information that you provide directly to us, such as when you register for an event, subscribe to our newsletter, or contact us for enquiries. This may include your name, email address, phone number, company details, and professional interests.'
    },
    {
      title: 'How We Use Your Information',
      icon: Lock,
      content: 'Your data is used to provide and manage event services, process registrations, communicate event updates, and improve our networking platforms. We may also use your information for marketing purposes with your explicit consent.'
    },
    {
      title: 'Data Sharing & International Transfers',
      icon: Globe,
      content: 'As a global company, we may share your information with our regional offices and strategic partners to facilitate international event participation. We ensure all data transfers comply with applicable data protection laws and maintain high security standards.'
    },
    {
      title: 'Data Security',
      icon: Shield,
      content: 'We implement robust technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration. However, no method of transmission over the internet is 100% secure.'
    },
    {
      title: 'Your Rights & Updates',
      icon: Bell,
      content: 'You have the right to access, correct, or delete your personal information. We may update this policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#c5a059_0%,transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black text-white mb-4"
          >
            Privacy <span className="text-gold">Policy</span>
          </motion.h1>
          <p className="text-gray-400 text-lg">Last Updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-16">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-8"
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gold border border-gray-100 shadow-sm">
                    <section.icon size={28} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-navy mb-4">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-gray-50 rounded-3xl border border-gray-100">
            <h3 className="text-xl font-bold text-navy mb-4">Contact Our Data Protection Officer</h3>
            <p className="text-gray-500 mb-6">If you have any questions about this Privacy Policy, please contact us at:</p>
            <a href="mailto:connect@9Xevents.com" className="text-gold font-bold text-lg hover:underline transition-all">
              connect@9Xevents.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
