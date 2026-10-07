"use client";

import { useEffect } from "react";
import { trackClientEvent } from "@/lib/analytics";

export default function ConversionClickTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const label = link.textContent?.trim().replace(/\s+/g, " ").slice(0, 80) || "link";

      if (href.startsWith("tel:")) {
        trackClientEvent("phone_clicked", {
          cta_label: label,
          page_path: window.location.pathname,
        });
        return;
      }

      if (
        href.startsWith("/contact") ||
        href.startsWith("/see-my-market-gap") ||
        href.startsWith("/services/pricing")
      ) {
        trackClientEvent("primary_cta_clicked", {
          cta_label: label,
          destination: href,
          page_path: window.location.pathname,
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
