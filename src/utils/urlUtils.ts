/**
 * Check if a path is a portal route
 */
export const isPortalRoute = (path: string): boolean => {
  return path.startsWith('/portal/');
};

/**
 * Get the localized path for a given path and language
 */
export const getLocalizedPath = (path: string, language: string): string => {
  // Skip localization for portal paths
  if (isPortalRoute(path)) {
    return path;
  }
  
  const pathParts = path.split('/').filter(part => part !== '');

  if (pathParts.length === 0) {
    return `/${language}`;
  }

  const topLevelRoute = pathParts[0];

  if (
    topLevelRoute === 'en' ||
    topLevelRoute === 'lt' ||
    topLevelRoute === 'pl'
  ) {
    pathParts.shift();
  }

  const localizedPath = `/${language}/${pathParts.join('/')}`;
  return localizedPath;
};
