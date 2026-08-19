import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyInfo';

export const WhatsAppButton = () => {
  const whatsappUrl = COMPANY_INFO.contacts.whatsapp.url;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl shadow-[#25D366]/40 group"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:hidden" />
      <MessageCircle size={32} fill="white" className="relative z-10" />

      {/* Tooltip */}
      <div className="absolute right-20 bg-white text-navy px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Chat with us!
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white" />
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
