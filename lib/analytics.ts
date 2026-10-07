"use client";

type AnalyticsValue = string | number | boolean | null | undefined;
type AnalyticsProperties = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const BLOCKED_PROPERTIES = new Set([
  "email",
  "phone",
  "first_name",
  "last_name",
  "full_name",
  "firm_name",
  "address",
  "website",
  "website_url",
]);

function safeProperties(properties: AnalyticsProperties): Record<string, string | number | boolean> {
  return Object.fromEntries(
    Object.entries(properties).filter(
      ([key, value]) =>
        value !== undefined &&
        value !== null &&
        value !== "" &&
        !BLOCKED_PROPERTIES.has(key.toLowerCase())
    )
  ) as Record<string, string | number | boolean>;
}

/**
 * Sends a GA4 event directly through the site's gtag implementation.
 * Sensitive fields are dropped defensively so form PII never reaches GA4.
 */
export function trackClientEvent(
  event: string,
  properties: AnalyticsProperties = {}
) {
  if (typeof window === "undefined") return;

  const payload = safeProperties(properties);

  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
    return;
  }

  // GTM can consume this fallback if an interaction happens before gtag loads.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}
