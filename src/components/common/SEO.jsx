import { useDocumentTitle } from '@/hooks/useDocumentTitle';

/**
 * Headless SEO helper component
 * @param {{ title: string, description?: string }} props
 */
export const SEO = ({ title, description }) => {
  useDocumentTitle(title, description);
  return null;
};

export default SEO;
