import { SupportedLanguage, getLowercaseCode } from "./languageUtils";

// URL paths mapped by page and language code
export type PageKey = 'home' | 'history' | 'coatOfArms' | 'documents' | 'about' | 'membership' | 'submitGenealogy' | 'blog';

// Define URL paths for each language
export const urlPaths: Record<PageKey, Record<SupportedLanguage, string>> = {
  home: {
    EN: "",
    LT: "",
    PL: ""
  },
  history: {
    EN: "history",
    LT: "istorija",
    PL: "historia"
  },
  coatOfArms: {
    EN: "official/coat-of-arms",
    LT: "oficialus/herbas",
    PL: "oficjalne/herb"
  },
  documents: {
    EN: "official/documents",
    LT: "oficialus/dokumentai",
    PL: "oficjalne/dokumenty"
  },
  about: {
    EN: "association/about",
    LT: "asociacija/apie",
    PL: "stowarzyszenie/o-nas"
  },
  membership: {
    EN: "association/membership",
    LT: "asociacija/naryste",
    PL: "stowarzyszenie/czlonkostwo"
  },
  submitGenealogy: {
    EN: "association/submit-genealogy",
    LT: "asociacija/pateikti-genealogija",
    PL: "stowarzyszenie/przeslij-genealogie" 
  },
  blog: {
    EN: "blog",
    LT: "tinklarastis",
    PL: "blog"
  }
};

// Get the current page key from any URL in any language
export const getPageKeyFromUrl = (pathname: string): PageKey | null => {
  // Remove leading slash
  const path = pathname.startsWith('/') ? pathname.substring(1) : pathname;
  
  // First check if it's a blog post
  const segments = path.split('/');
  if (segments.length > 1) {
    // Check if the first segment is a blog path in any language
    for (const [lang, blogPath] of Object.entries(urlPaths.blog)) {
      if (segments[0] === blogPath) {
        return 'blog';
      }
    }
  }
  
  // Check each page and each language
  for (const [pageKey, langPaths] of Object.entries(urlPaths)) {
    for (const [_, urlPath] of Object.entries(langPaths)) {
      if (path === urlPath || `/${path}` === urlPath) {
        return pageKey as PageKey;
      }
    }
  }
  
  return null;
};

// Get localized URL for a page based on language
export const getLocalizedPath = (pageKey: PageKey, language: SupportedLanguage): string => {
  const path = urlPaths[pageKey][language];
  return path ? `/${path}` : '/';
};

// Extract slug from blog post URL
export const extractBlogSlugFromUrl = (pathname: string): string | null => {
  const segments = pathname.split('/');
  if (segments.length < 2) return null;
  
  // Check if path starts with any of the blog paths
  for (const [_, blogPath] of Object.entries(urlPaths.blog)) {
    if (segments[1] === blogPath && segments.length > 2) {
      return segments[2];
    }
    if (segments[0] === blogPath && segments.length > 1) {
      return segments[1];
    }
  }
  
  return null;
};

// Get localized blog post URL
export const getLocalizedBlogPostUrl = (slug: string, language: SupportedLanguage): string => {
  const blogPath = getLocalizedPath("blog", language);
  return `${blogPath}/${slug}`;
};

// Handle special cases like blog posts and other dynamic routes
export const getLocalizedUrl = (currentUrl: string, currentLanguage: SupportedLanguage, newLanguage: SupportedLanguage): string => {
  // Extract the pathname
  const url = new URL(currentUrl, window.location.origin);
  const pathname = url.pathname;
  
  // First try to match to a known route
  const pageKey = getPageKeyFromUrl(pathname);
  if (pageKey) {
    // Special handling for blog posts
    if (pageKey === 'blog') {
      const slug = extractBlogSlugFromUrl(pathname);
      if (slug) {
        return getLocalizedBlogPostUrl(slug, newLanguage);
      }
    }
    return getLocalizedPath(pageKey, newLanguage);
  }
  
  // Handle blog posts - we keep the slug but change the base path
  for (const [lang, blogPath] of Object.entries(urlPaths.blog)) {
    const prefix = blogPath ? `/${blogPath}/` : '/blog/';
    if (pathname.startsWith(prefix)) {
      const slug = pathname.substring(prefix.length);
      return getLocalizedBlogPostUrl(slug, newLanguage);
    }
  }
  
  // Default fallback - return home
  return '/';
};
