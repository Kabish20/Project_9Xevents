import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, ExternalLink } from 'lucide-react';
import { SEO } from '@/components/common/SEO';
import { Button } from '@/components/common/Button';

export const ISUC2026 = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full min-h-screen bg-navy pt-28 md:pt-24 pb-16"
    >
      <SEO
        title="ISUC 2026 INDIA | Official Convention"
        description="Official portal for ISUC 2026 India - Premier International Business Convention organized by 9X Events."
      />

      <div className="max-w-400 mx-auto px-4">
        {/* Header bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">
              ★ Flagship Convention Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-display font-black text-white">
              ISUC <span className="text-gold">2026</span> INDIA
            </h1>
          </div>
          <Button
            href="https://isuc2026.com/"
            variant="gold"
            size="sm"
            icon={ExternalLink}
            iconPosition="right"
          >
            Open in New Window
          </Button>
        </div>

        {/* Embedded Iframe */}
        <div
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/30 backdrop-blur-sm"
          style={{ height: 'calc(100vh - 200px)', minHeight: '650px' }}
        >
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-navy"
              >
                <Loader2 className="w-12 h-12 text-gold animate-spin mb-4" />
                <p className="text-white/70 font-bold tracking-widest uppercase text-xs">
                  Connecting to Official ISUC 2026 Portal...
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <iframe
            src="https://isuc2026.com/"
            title="ISUC 2026 Official Website"
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
