import { useEffect } from "react";

export const useSetScrollableHeight = ({
  setHeightToScroll,
  parentHeightQuantify,
}) => {
  useEffect(() => {
    if (process.browser) {
      setHeightToScroll(window.innerHeight * parentHeightQuantify);
    }
  }, []);
};
