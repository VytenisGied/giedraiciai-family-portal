
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

export interface NavItemDropdown {
  name: string;
  caption: string;
  path: string;
  label?: string; // Add label property to fix TypeScript errors
}

export interface NavItem {
  name: string;
  caption: string;
  path?: string;
  dropdown?: NavItemDropdown[];
}

export const useNavigation = () => {
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();

  const navStructure: NavItem[] = [
    {
      name: "Home",
      caption: "nav.home",
      path: localizedPath("home")
    },
    {
      name: "History",
      caption: "nav.history",
      path: localizedPath("history")
    },
    {
      name: "Official",
      caption: "nav.official.title",
      dropdown: [
        {
          name: "Coat of Arms",
          caption: "nav.official.coatOfArms",
          path: localizedPath("coatOfArms")
        },
        {
          name: "Documents",
          caption: "nav.official.documents",
          path: localizedPath("documents")
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
          path: localizedPath("about")
        },
        {
          name: "Membership",
          caption: "nav.association.membership",
          path: localizedPath("membership")
        },
        {
          name: "Submit Genealogy",
          caption: "nav.association.submitGenealogy",
          path: localizedPath("submitGenealogy")
        }
      ]
    },
    {
      name: "Blog",
      caption: "nav.blog",
      path: localizedPath("blog")
    }
  ];

  // Transform the navStructure to include translated labels
  const getTranslatedNav = () => {
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
