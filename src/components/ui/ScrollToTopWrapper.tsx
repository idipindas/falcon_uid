'use client'
import React, { useState, useEffect } from "react";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

const ScrollToTopWrapper: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return showScrollButton ? <ScrollToTopButton /> : null;
};

export default ScrollToTopWrapper;