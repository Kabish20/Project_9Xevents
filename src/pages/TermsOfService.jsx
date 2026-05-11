import { motion } from 'framer-motion';
import { Gavel, Scale, AlertCircle, Calendar, Users, ShieldCheck } from 'lucide-react';

const TermsOfService = () => {
  const terms = [
    {
      title: 'Agreement to Terms',
      icon: Gavel,
      content: 'By accessing our website or registering for our events, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services or participate in 9X Events activities.'
    },
    {
      title: 'Event Registration & Participation',
      icon: Calendar,
      content: 'Registration for events is subject to availability and approval. 9X Events reserves the right to refuse registration or admission to any individual or organization at its sole discretion to maintain the professional integrity of the event.'
    },
    {
      title: 'Cancellation & Refund Policy',
      icon: AlertCircle,
      content: 'Cancellation policies vary by event type (Delegate, Exhibitor, Sponsor). Generally, cancellations made 30 days prior to the event may be eligible for a partial refund or credit, subject to specific event terms provided during registration.'
    },
    {
      title: 'Code of Conduct',
      icon: Users,
      content: 'Participants must maintain professional decorum at all times. Harassment, disruptive behavior, or unauthorized commercial solicitation (suitcasing) is strictly prohibited and may result in immediate expulsion without refund.'
    },
    {
      title: 'Intellectual Property',
      icon: ShieldCheck,
      content: 'All materials, branding, and content presented at our events or on our website are the property of 9X Events or its partners. Unauthorized recording, distribution, or reproduction is strictly prohibited.'
    },
    {
      title: 'Limitation of Liability',
      icon: Scale,
      content: '9X Events is not liable for any indirect, incidental, or consequential damages arising from event participation. We do not guarantee specific business outcomes or ROI from networking sessions.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-navy">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,#c5a059_0%,transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-black text-white mb-4"
          >
            Terms of <span className="text-gold">Service</span>
          </motion.h1>
          <p className="text-gray-400 text-lg">Effective Date: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {terms.map((term, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
                    <term.icon size={24} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-navy">{term.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg pl-0 md:pl-16">
                  {term.content}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-gray-500 italic">
              For specific sponsorship or exhibition agreements, the terms outlined in your signed contract shall prevail.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
