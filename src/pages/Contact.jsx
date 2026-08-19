import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { SEO } from '@/components/common/SEO';
import { PageHero } from '@/components/common/PageHero';
import { Button } from '@/components/common/Button';
import { COMPANY_INFO } from '@/data/companyInfo';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    phone: '',
    email: '',
    type: 'General Enquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us | 9X Events"
        description="Connect with our global event strategists across India, UAE, Saudi Arabia, and Sri Lanka to plan your next trade show, exhibition, or summit."
      />

      {/* Hero Banner */}
      <PageHero
        title="Contact"
        highlight="Us"
        subtitle="Connect with our global team to discuss your next business event, exhibition participation, or strategic partnership."
        bgImage="/services-bg.png"
      />

      {/* Main Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Details & Regional Offices */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-navy mb-8">
                  Our Regional Offices
                </h3>
                <div className="space-y-4">
                  {COMPANY_INFO.offices.map((office, i) => (
                    <motion.div
                      key={office.country}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100/80 hover:bg-white hover:shadow-md hover:border-gold/20 transition-all"
                    >
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-sm">
                        {office.flag}
                      </div>
                      <div>
                        <h4 className="font-bold text-navy text-base">{office.title}</h4>
                        <p className="text-gray-500 text-xs mt-1 leading-relaxed">{office.address}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-navy mb-8">
                  Direct Communications
                </h3>
                <div className="space-y-3">
                  {COMPANY_INFO.contacts.phones.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`tel:${phone.raw}`}
                      className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-navy hover:text-white transition-all group"
                    >
                      <div className="w-10 h-10 bg-navy text-white rounded-xl flex items-center justify-center group-hover:bg-gold transition-colors shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 group-hover:text-gray-300 font-semibold uppercase tracking-wider">
                          {phone.country} Line
                        </p>
                        <span className="font-bold text-sm">{phone.number}</span>
                      </div>
                    </a>
                  ))}

                  <a
                    href={`mailto:${COMPANY_INFO.contacts.email}`}
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-navy hover:text-white transition-all group"
                  >
                    <div className="w-10 h-10 bg-navy text-white rounded-xl flex items-center justify-center group-hover:bg-gold transition-colors shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300 font-semibold uppercase tracking-wider">
                        Official Inquiries
                      </p>
                      <span className="font-bold text-sm">{COMPANY_INFO.contacts.email}</span>
                    </div>
                  </a>

                  <a
                    href={COMPANY_INFO.contacts.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-green-50/50 border border-green-100 hover:bg-[#25D366] hover:text-white transition-all group"
                  >
                    <div className="w-10 h-10 bg-[#25D366] text-white rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-[#25D366] transition-colors shrink-0">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-green-700 group-hover:text-white/80 font-semibold uppercase tracking-wider">
                        Instant Messaging
                      </p>
                      <span className="font-bold text-sm text-green-900 group-hover:text-white">
                        WhatsApp Business
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Enquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm relative">
                <h3 className="text-3xl font-display font-bold text-navy mb-2">
                  Send Us an Enquiry
                </h3>
                <p className="text-gray-500 mb-8 text-sm sm:text-base">
                  Fill out the form below and our international event coordination desk will get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-12 text-center bg-white rounded-2xl border border-gold/30 shadow-md"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={36} />
                    </div>
                    <h4 className="text-2xl font-bold text-navy mb-2">Message Sent Successfully!</h4>
                    <p className="text-gray-500 max-w-md mx-auto mb-6">
                      Thank you for contacting 9X Events. Our team will review your enquiry and get back to you promptly.
                    </p>
                    <Button
                      variant="gold"
                      size="md"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          company: '',
                          country: '',
                          phone: '',
                          email: '',
                          type: 'General Enquiry',
                          message: '',
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-navy focus:outline-none focus:border-gold transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Enterprise Global Ltd."
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-navy focus:outline-none focus:border-gold transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-navy focus:outline-none focus:border-gold transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-navy focus:outline-none focus:border-gold transition-colors text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                          Country / Region
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="India / UAE / Saudi Arabia / Other"
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-navy focus:outline-none focus:border-gold transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                          Enquiry Type
                        </label>
                        <select
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-navy focus:outline-none focus:border-gold transition-colors text-sm"
                        >
                          <option>General Enquiry</option>
                          <option>Event Sponsorship</option>
                          <option>Exhibitor Space Booking</option>
                          <option>Delegate Registration</option>
                          <option>ISUC 2026 Participation</option>
                          <option>Strategic Partnership</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                        Message / Event Requirements *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your event objectives or requirements..."
                        className="w-full bg-white border border-gray-200 rounded-xl p-4 text-navy focus:outline-none focus:border-gold transition-colors text-sm resize-y"
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      variant="gold"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                      icon={Send}
                      iconPosition="right"
                    >
                      {isSubmitting ? 'Sending Enquiry...' : 'Submit Enquiry'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
