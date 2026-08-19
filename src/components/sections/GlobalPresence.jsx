import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/common/SectionHeader';
import { COMPANY_INFO } from '@/data/companyInfo';

export const GlobalPresence = ({
  dark = true,
  eyebrow = 'International Presence',
  title = 'Active Operational',
  highlight = 'Ecosystem',
  description = 'Strategically positioned to organize and support business events, conferences, trade exhibitions, and networking platforms across four key regions.',
}) => {
  return (
    <section className={`py-28 ${dark ? 'bg-navy text-white' : 'bg-gray-50 text-navy'} relative overflow-hidden`}>
      {dark && (
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          description={description}
          dark={dark}
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {COMPANY_INFO.offices.map((office, i) => (
            <motion.div
              key={office.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`rounded-2xl p-8 transition-all group cursor-pointer ${
                dark
                  ? 'bg-white/5 border border-white/10 hover:border-gold/40 hover:bg-white/10'
                  : 'bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold/30'
              }`}
            >
              <span className="text-4xl sm:text-5xl mb-4 block transform transition-transform group-hover:scale-110">
                {office.flag}
              </span>
              <h4 className="text-lg font-bold group-hover:text-gold transition-colors">
                {office.country}
              </h4>
              <p className={`text-xs mt-2 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                {office.address}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
