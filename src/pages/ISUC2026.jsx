import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const ISUC2026 = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-screen bg-navy pt-24 md:pt-20"
    >
      <div className="max-w-[1600px] mx-auto px-4 pb-20">
        <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/20 backdrop-blur-sm" style={{ height: 'calc(100vh - 160px)', minHeight: '600px' }}>
          <AnimatePresence>
            {isLoading && (
              <motion.div 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-navy"
              >
                <Loader2 className="w-12 h-12 text-gold animate-spin mb-4" />
                <p className="text-white/60 font-medium tracking-widest uppercase text-xs">Loading Official Website...</p>
              </motion.div>
            )}
          </AnimatePresence>
          
          <iframe
            src="https://isuc2026.com/"
            title="ISUC 2026"
            className="w-full h-full border-none"
            onLoad={() => setIsLoading(false)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ISUC2026;


