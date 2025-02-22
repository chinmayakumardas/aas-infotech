"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLocomotiveScroll = (options = {}) => {
  const scrollRef = useRef(null);
  const locomotiveInstance = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    locomotiveInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // Smoothness factor (0–1)
      multiplier: 1, // Speed multiplier
      direction: "vertical",
      reloadOnContextChange: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
      ...options,
    });

    // Refresh Locomotive after initial load
    setTimeout(() => locomotiveInstance.current?.update(), 300);

    // Cleanup on unmount
    return () => {
      locomotiveInstance.current?.destroy();
    };
  }, []);

  return { scrollRef, locomotive: locomotiveInstance };
};
