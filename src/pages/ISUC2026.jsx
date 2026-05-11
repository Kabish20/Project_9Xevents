import { motion } from 'framer-motion';

const ISUC2026 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full pt-36 md:pt-28 bg-white"
    >
      <div className="w-full h-[800px] md:h-[1000px] relative">
        <iframe
          src="https://isuc2026.com/"
          title="ISUC 2026"
          className="w-full h-full border-none shadow-sm"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </motion.div>
  );
};

export default ISUC2026;


