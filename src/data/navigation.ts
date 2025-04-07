
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

export interface NavItemDropdown {
  name: string;
  caption: string;
  path: string;
}

export interface NavItem {
  name: string;
  caption: string;
  path?: string;
  dropdown?: NavItemDropdown[];
}

// Create a type for translated navigation items
export interface TranslatedNavItem extends NavItem {
  label: string;
  dropdown?: (NavItemDropdown & { label: string })[];
}

export const useNavigation = () => {
  const { t } = useTranslation();
  const getLocalizedPath = useLocalizedPath();

  const navStructure: NavItem[] = [
    {
      name: "Home",
      caption: "nav.home",
      path: getLocalizedPath("home")
    },
    {
      name: "History",
      caption: "nav.history",
      path: getLocalizedPath("history")
    },
    {
      name: "Official",
      caption: "nav.official.title",
      dropdown: [
        {
          name: "Coat of Arms",
          caption: "nav.official.coatOfArms",
          path: getLocalizedPath("coatOfArms")
        },
        {
          name: "Documents",
          caption: "nav.official.documents",
          path: getLocalizedPath("documents")
        }
      ]
    },
    {
      name: "Association",
      caption: "nav.association.title",
      dropdown: [
        {
          name: "About",
          caption: "nav.association.about",
          path: getLocalizedPath("about")
        },
        {
          name: "Membership",
          caption: "nav.association.membership",
          path: getLocalizedPath("membership")
        },
        {
          name: "Submit Genealogy",
          caption: "nav.association.submitGenealogy",
          path: getLocalizedPath("submitGenealogy")
        }
      ]
    },
    {
      name: "Blog",
      caption: "nav.blog",
      path: getLocalizedPath("blog")
    }
  ];

  // Transform the navStructure to include translated labels
  const getTranslatedNav = (): TranslatedNavItem[] => {
    return navStructure.map(item => ({
      ...item,
      label: t(item.caption),
      dropdown: item.dropdown?.map(dropdownItem => ({
        ...dropdownItem,
        label: t(dropdownItem.caption)
      }))
    }));
  };

  return {
    navItems: getTranslatedNav(),
    rawNavItems: navStructure
  };
};
