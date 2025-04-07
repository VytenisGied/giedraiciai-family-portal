
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

export interface NavItem {
  key: string;
  translationKey: string;
  path?: string;
  children?: NavItem[];
}

export const useNavigation = () => {
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();

  const navStructure: NavItem[] = [
    {
      key: "home",
      translationKey: "nav.home",
      path: localizedPath("home")
    },
    {
      key: "history",
      translationKey: "nav.history",
      path: localizedPath("history")
    },
    {
      key: "official",
      translationKey: "nav.official.title",
      children: [
        {
          key: "coatOfArms",
          translationKey: "nav.official.coatOfArms",
          path: localizedPath("coatOfArms")
        },
        {
          key: "documents",
          translationKey: "nav.official.documents",
          path: localizedPath("documents")
        }
      ]
    },
    {
      key: "association",
      translationKey: "nav.association.title",
      children: [
        {
          key: "about",
          translationKey: "nav.association.about",
          path: localizedPath("about")
        },
        {
          key: "membership",
          translationKey: "nav.association.membership",
          path: localizedPath("membership")
        },
        {
          key: "submitGenealogy",
          translationKey: "nav.association.submitGenealogy",
          path: localizedPath("submitGenealogy")
        }
      ]
    },
    {
      key: "blog",
      translationKey: "nav.blog",
      path: localizedPath("blog")
    }
  ];

  // Transform the navStructure to include translated labels
  const getTranslatedNav = () => {
    return navStructure.map(item => ({
      ...item,
      label: t(item.translationKey),
      children: item.children?.map(child => ({
        ...child,
        label: t(child.translationKey)
      }))
    }));
  };

  return {
    navItems: getTranslatedNav(),
    rawNavItems: navStructure
  };
};
