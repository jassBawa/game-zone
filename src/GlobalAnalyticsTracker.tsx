import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

const GlobalAnalyticsTracker = () => {
  useEffect(() => {
    const handleButtonClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Check if the clicked element is a button
      if (target.tagName === "BUTTON") {
        const analyticsLabel = target.getAttribute("data-analytics") || "Unnamed Button";
      
        ReactGA.event({
          category: "Button Clicks",
          action: "Button Clicked",
          label: analyticsLabel.trim(),
        });
      }
    };

    // Attach the event listener
    document.addEventListener('click', handleButtonClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleButtonClick);
    };
  }, []);

  return null; // This component does not render anything
};

export default GlobalAnalyticsTracker;
