import { useEffect } from 'react';

const BASE_TITLE = '9X Events';

/**
 * Custom hook to update document title dynamically.
 * @param {string} title - Page specific title
 * @param {string} [description] - Optional meta description
 */
export function useDocumentTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} | Global Business Events`;

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);
}

export default useDocumentTitle;
