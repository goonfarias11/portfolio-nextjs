"use client";

import { useEffect, useState, RefObject } from "react";
import { useInView as useFramerInView } from "framer-motion";

/**
 * Hook para detectar cuando un elemento entra en el viewport
 */
export function useInView(ref: RefObject<HTMLElement>, options = { once: true, amount: 0.3 }) {
  return useFramerInView(ref, options);
}

/**
 * Hook para manejar el scroll y detectar secciones activas
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");
  const idsKey = sectionIds.join(",");

  useEffect(() => {
    const ids = idsKey.split(",").filter(Boolean);
    if (ids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    const observed = new Set<string>();

    const tryObserve = () => {
      ids.forEach((id) => {
        const cleanId = id.replace("#", "");
        if (!cleanId || observed.has(cleanId)) return;
        const el = document.getElementById(cleanId);
        if (el) {
          observer.observe(el);
          observed.add(cleanId);
        }
      });
    };

    tryObserve();

    // Las secciones se hidratan de forma diferida (streaming), así que
    // seguimos intentando observarlas a medida que aparecen en el DOM.
    const mutationObserver = new MutationObserver(tryObserve);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [idsKey]);

  return activeSection;
}

/**
 * Hook para detectar scroll y mostrar/ocultar navbar
 */
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return scrollDirection;
}

/**
 * Hook para manejar el estado del scroll (scrolled o no)
 */
export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
