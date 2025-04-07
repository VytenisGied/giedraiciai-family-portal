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

// Handle special cases like blog posts and other dynamic routes
export const getLocalizedUrl = (currentUrl: string, currentLanguage: SupportedLanguage, newLanguage: SupportedLanguage): string => {
  // Extract the pathname
  const url = new URL(currentUrl, window.location.origin);
  const pathname = url.pathname;
  
  // First try to match to a known route
  const pageKey = getPageKeyFromUrl(pathname);
  if (pageKey) {
    return getLocalizedPath(pageKey, newLanguage);
  }
  
  // Handle blog posts - we keep the slug but change the base path
  if (pathname.startsWith('/blog/')) {
    const slug = pathname.substring('/blog/'.length);
    const blogPath = urlPaths.blog[newLanguage];
    return `/${blogPath}/${slug}`;
  }
  
  // Default fallback - return home
  return '/';
};
