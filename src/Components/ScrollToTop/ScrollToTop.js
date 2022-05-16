import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to top on browser refresh
// Scroll to top function Component for router
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
