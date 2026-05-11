import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', company: '', country: '', phone: '', email: '', type: 'General Enquiry', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry! Our team will get back to you shortly.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/services-bg.png" alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black text-white mb-6"
          >
            Contact <span className="text-gold">Us</span>
          </motion.h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Connect with our global team to discuss your next business event or partnership opportunity.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-navy mb-8">Our Offices</h3>
                <div className="space-y-6">
                  {[
                    { name: 'India Office', address: 'Address Placeholder, India', flag: '🇮🇳' },
                    { name: 'Dubai Office', address: 'Address Placeholder, Dubai, UAE', flag: '🇦🇪' },
                    { name: 'Saudi Arabia Office', address: 'Address Placeholder, KSA', flag: '🇸🇦' },
                    { name: 'Sri Lanka Presence', address: 'Address Placeholder, Sri Lanka', flag: '🇱🇰' },
                  ].map((office, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-xl shrink-0">
                        {office.flag}
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">{office.name}</h4>
                        <p className="text-gray-500 text-sm mt-1">{office.address}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-navy mb-8">Direct Contact</h3>
                <div className="space-y-4">
                  <a href="tel:+918072896589" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center group-hover:bg-gold transition-colors">
                      <Phone size={18} />
                    </div>
                    <span className="text-gray-600 font-medium">+91 807 289 6589</span>
                  </a>
                  <a href="tel:+966558891231" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center group-hover:bg-gold transition-colors">
                      <Phone size={18} />
                    </div>
                    <span className="text-gray-600 font-medium">+966 55 889 1231</span>
                  </a>
                  <a href="mailto:connect@9Xevents.com" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-10 h-10 bg-navy text-white rounded-lg flex items-center justify-center group-hover:bg-gold transition-colors">
                      <Mail size={18} />
                    </div>
                    <span className="text-gray-600 font-medium">connect@9Xevents.com</span>
                  </a>
                  <a href="#" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                    <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                      <MessageCircle size={18} />
                    </div>
                    <span className="text-gray-600 font-medium">WhatsApp Support</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
                <h3 className="text-3xl font-display font-bold text-navy mb-2">Send an Enquiry</h3>
                <p className="text-gray-500 mb-8">Fill out the form below and our team will respond within 24 hours.</p>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-gray-200 p-4 rounded-xl outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-gray-200 p-4 rounded-xl outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Country</label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full bg-white border border-gray-200 p-4 rounded-xl outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all"
                      placeholder="India"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-gray-200 p-4 rounded-xl outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all"
                      placeholder="+91 XXX XXX XXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-gray-200 p-4 rounded-xl outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Enquiry Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full bg-white border border-gray-200 p-4 rounded-xl outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all appearance-none"
                    >
                      <option>General Enquiry</option>
                      <option>Sponsorship</option>
                      <option>Exhibition</option>
                      <option>Delegate Registration</option>
                      <option>Event Partnership</option>
                      <option>Corporate Events</option>
                      <option>Media Enquiry</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-gray-200 p-4 rounded-xl outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="w-full bg-navy text-white py-5 rounded-xl font-bold hover:bg-gold transition-all shadow-lg flex items-center justify-center group">
                      Send Message <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                    <p className="mt-4 text-center text-xs text-gray-400">
                      By submitting this form, you agree to our <Link to="/privacy-policy" className="text-gold hover:underline">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-gold hover:underline">Terms of Service</Link>.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] bg-gray-100 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500000!2d78.9629!3d20.5937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="9X Events Location"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        />
      </section>
    </div>
  );
};

export default Contact;

