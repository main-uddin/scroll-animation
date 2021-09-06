import { useEffect } from "react";

export const useScrollAnimate = ({
  heightToScroll,
  setImageLink,
  totalSlide,
  parentId,
  jump,
  folderPreset,
}) => {
  useEffect(() => {
    if (!process.browser) return;

    const doc = document.documentElement;
    const scrollElement = document.getElementById(`${parentId}-scroll-element`);
    const img = document.getElementById(`${parentId}-img`);

    window.addEventListener("scroll", () => {
      const scrollTop =
        parentId === "1"
          ? doc.scrollTop > scrollElement.offsetTop
            ? doc.scrollTop - scrollElement.offsetTop
            : 0
          : scrollElement.offsetTop - doc.scrollTop < 600
          ? doc.scrollTop + 600 - scrollElement.offsetTop
          : 0;

      const maxScroll = scrollElement.clientHeight - img.clientHeight;
      const scrollFraction = scrollTop / maxScroll;
      const frameIndex = Math.min(
        totalSlide,
        Math.floor(scrollFraction * totalSlide)
      );

      requestAnimationFrame(() => {
        if (frameIndex < jump) return;
        if (frameIndex > totalSlide) return;

        setImageLink(
          `${folderPreset}_${frameIndex.toString().padStart(5, "0")}.png`
        );
      });
    });
  }, [heightToScroll]);
};
