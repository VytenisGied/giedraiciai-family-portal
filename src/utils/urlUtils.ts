import { SupportedLanguage, getLowercaseCode } from "./languageUtils";

// URL paths mapped by page and language code
export type PageKey = 
  | "home" 
  | "history" 
  | "coatOfArms" 
  | "documents" 
  | "about" 
  | "membership" 
  | "submitGenealogy"
  | "portal"
  | "blog";

// Map page keys to their respective paths for each language
const pathMap: Record<PageKey, Record<SupportedLanguage, string>> = {
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
    EN: "coat-of-arms",
    LT: "herbas",
    PL: "herb"
  },
  documents: {
    EN: "documents",
    LT: "dokumentai",
    PL: "dokumenty"
  },
  about: {
    EN: "about",
    LT: "apie",
    PL: "o-nas"
  },
  membership: {
    EN: "membership",
    LT: "narystė",
    PL: "członkostwo"
  },
  submitGenealogy: {
    EN: "submit-genealogy",
    LT: "pateikti-genealogija",
    PL: "przesłać-genealogię" 
  },
  portal: {
    EN: "portal",
    LT: "portalas",
    PL: "portal"
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
    for (const [lang, blogPath] of Object.entries(pathMap.blog)) {
      if (segments[0] === blogPath) {
        return 'blog';
      }
    }
  }
  
  // Check each page and each language
  for (const [pageKey, langPaths] of Object.entries(pathMap)) {
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
  const path = pathMap[pageKey][language];
  return path ? `/${path}` : '/';
};

// Extract slug from blog post URL
export const extractBlogSlugFromUrl = (pathname: string): string | null => {
  const segments = pathname.split('/');
  if (segments.length < 2) return null;
  
  // Check if path starts with any of the blog paths
  for (const [_, blogPath] of Object.entries(pathMap.blog)) {
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
  for (const [lang, blogPath] of Object.entries(pathMap.blog)) {
    const prefix = blogPath ? `/${blogPath}/` : '/blog/';
    if (pathname.startsWith(prefix)) {
      const slug = pathname.substring(prefix.length);
      return getLocalizedBlogPostUrl(slug, newLanguage);
    }
  }
  
  // Default fallback - return home
  return '/';
};
