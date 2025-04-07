
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component that scrolls the window to top whenever the pathname changes
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
