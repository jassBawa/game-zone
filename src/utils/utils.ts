// analytics.ts
import ReactGA from "react-ga4";

const initializeAnalytics = (trackingId: string) => {
  ReactGA.initialize(trackingId);
};

const trackPageView = (page: string) => {
  ReactGA.send({ hitType: "pageview", page });
};

const trackEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({ category, action, label });
};


export { initializeAnalytics, trackPageView, trackEvent };
