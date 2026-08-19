import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ROUTES } from './routePaths';
import {
  Home,
  About,
  Services,
  Events,
  Industries,
  Partners,
  Gallery,
  Contact,
  ISUC2026,
  PrivacyPolicy,
  TermsOfService,
  NotFound,
} from '@/pages';

export const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.EVENTS} element={<Events />} />
          <Route path={ROUTES.INDUSTRIES} element={<Industries />} />
          <Route path={ROUTES.PARTNERS} element={<Partners />} />
          <Route path={ROUTES.GALLERY} element={<Gallery />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.ISUC2026} element={<ISUC2026 />} />
          <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
          <Route path={ROUTES.TERMS_OF_SERVICE} element={<TermsOfService />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default AppRoutes;
