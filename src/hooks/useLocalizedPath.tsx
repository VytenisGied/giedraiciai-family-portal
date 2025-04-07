
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocalizedPath, isPortalRoute } from '../utils/urlUtils';

/**
 * Custom hook that redirects to the localized version of the current path when language changes
 * and returns a function to get localized paths
 */
export const useLocalizedPath = (): ((path: string) => string) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  useEffect(() => {
    // Skip redirection for portal routes
    if (isPortalRoute(currentPath)) {
      return;
    }
    
    const localizedPath = getLocalizedPath(currentPath, i18n.language);
    
    // Only redirect if the paths are different (ignoring trailing slashes)
    if (localizedPath.replace(/\/$/, '') !== currentPath.replace(/\/$/, '')) {
      console.info('Redirecting from', currentPath, 'to localized URL:', localizedPath);
      navigate(localizedPath);
    }
  }, [currentPath, i18n.language, navigate]);

  // Return a function that can be used to localize paths
  return (path: string) => getLocalizedPath(path, i18n.language);
};

export default useLocalizedPath;
