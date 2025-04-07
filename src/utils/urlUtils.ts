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

/**
 * Get the localized URL for a blog post
 */
export const getLocalizedBlogPostUrl = (slug: string, language: string): string => {
  return `/${language}/blog/${slug}`;
};

/**
 * Extract page key from URL (for language switching)
 */
export const getPageKeyFromUrl = (url: string): string | null => {
  // Skip portal routes
  if (isPortalRoute(url)) {
    return null;
  }
  
  // Remove trailing slash if present
  const cleanUrl = url.replace(/\/$/, '');
  
  // Extract path parts
  const parts = cleanUrl.split('/').filter(p => p);
  
  // Skip empty URLs
  if (parts.length === 0) {
    return 'home';
  }
  
  // Check if first part is a language code
  if (['en', 'lt', 'pl'].includes(parts[0].toLowerCase())) {
    // If URL is just the language code, return home
    if (parts.length === 1) {
      return 'home';
    }
    // Otherwise return the next part as the page key
    return parts[1] || 'home';
  }
  
  // If no language prefix, return first part
  return parts[0] || 'home';
};

/**
 * Get a localized URL when switching languages
 */
export const getLocalizedUrl = (currentUrl: string, currentLanguage: string, newLanguage: string): string => {
  // Skip localization for portal paths
  if (isPortalRoute(currentUrl)) {
    return currentUrl;
  }
  
  const parts = currentUrl.split('/').filter(p => p);
  
  // Handle root URL
  if (parts.length === 0) {
    return `/${newLanguage}`;
  }
  
  // Check if first part is a language code
  if (['en', 'lt', 'pl'].includes(parts[0].toLowerCase())) {
    parts[0] = newLanguage;
  } else {
    // If no language prefix, add it
    parts.unshift(newLanguage);
  }
  
  return `/${parts.join('/')}`;
};
