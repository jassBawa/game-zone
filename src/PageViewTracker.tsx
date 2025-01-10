// PageViewTracker.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./utils/utils";

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

export default PageViewTracker;
