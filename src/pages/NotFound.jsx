import { motion } from 'framer-motion';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/common/SEO';
import { Button } from '@/components/common/Button';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center relative overflow-hidden px-4 pt-28 pb-20">
      <SEO title="404 Page Not Found" description="The requested page could not be found." />

      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full text-center relative z-10 p-8 sm:p-12 glass-dark rounded-3xl border border-white/10 shadow-2xl"
      >
        <div className="w-20 h-20 bg-gold/10 text-gold rounded-3xl flex items-center justify-center mx-auto mb-8 border border-gold/20 animate-float">
          <Compass size={40} />
        </div>

        <span className="text-gold text-xs font-bold uppercase tracking-[0.3em] inline-block mb-3">
          Error 404
        </span>

        <h1 className="text-4xl sm:text-6xl font-display font-black text-white mb-4 tracking-tight">
          Page Not Found
        </h1>

        <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            to="/"
            variant="gold"
            size="md"
            icon={Home}
            iconPosition="left"
          >
            Back to Home
          </Button>

          <Button
            to="/events"
            variant="outline"
            size="md"
            icon={ArrowLeft}
            iconPosition="left"
          >
            Explore Events
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
