"use client";

import { useEffect } from "react";

/**
 * Updates the URL hash to the section currently in view as the user scrolls,
 * without scrolling or polluting browser history (uses history.replaceState).
 * The first section (hero) clears the hash to keep the base URL clean.
 */
export function ScrollSpy() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );
    if (sections.length === 0) return;

    const visible = new Map<string, boolean>();

    const setHash = (id: string | null) => {
      const base = window.location.pathname + window.location.search;
      const target = id ? `${base}#${id}` : base;
      const current = base + window.location.hash;
      if (target !== current) {
        window.history.replaceState(null, "", target);
      }
    };

    const update = () => {
      const firstId = sections[0]?.id;
      // Topmost section (DOM order) crossing the viewport center band wins.
      const active = sections.find((s) => visible.get(s.id));
      if (!active) return;
      setHash(active.id === firstId ? null : active.id);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set((entry.target as HTMLElement).id, entry.isIntersecting);
        }
        update();
      },
      // Thin band around the vertical middle of the viewport.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}
