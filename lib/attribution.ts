"use client";

const FIRST_TOUCH_KEY = "jp_attribution_v1_first_touch";
const LAST_TOUCH_KEY = "jp_attribution_v1_last_touch";

export interface AttributionTouch {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
  gclid?: string;
  clickId?: string;
  referrer?: string;
  landingPage?: string;
  capturedAt?: string;
}

export interface AttributionPayload {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  clickId?: string;
  referrer?: string;
  firstTouch?: AttributionTouch;
  lastTouch?: AttributionTouch;
}

function read(key: string): AttributionTouch | undefined {
  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as AttributionTouch) : undefined;
  } catch {
    return undefined;
  }
}

function write(key: string, value: AttributionTouch) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Attribution is helpful, but should never block the user journey.
  }
}

function inferSource(referrer: string): Pick<AttributionTouch, "source" | "medium"> {
  if (!referrer) return { source: "direct", medium: "none" };

  try {
    const host = new URL(referrer).hostname.replace(/^www\./, "");
    if (host === window.location.hostname.replace(/^www\./, "")) return {};
    if (/google\.|bing\.|duckduckgo\.|yahoo\./i.test(host)) {
      return { source: host.split(".")[0], medium: "organic" };
    }
    if (/chatgpt\.com|perplexity\.ai|claude\.ai|gemini\.google\.com/i.test(host)) {
      return { source: host, medium: "ai_assistant" };
    }
    return { source: host, medium: "referral" };
  } catch {
    return {};
  }
}

export function captureAttribution() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const referrer = document.referrer || "";
  const inferred = inferSource(referrer);
  const touch: AttributionTouch = {
    source: params.get("utm_source") || inferred.source,
    medium: params.get("utm_medium") || inferred.medium,
    campaign: params.get("utm_campaign") || undefined,
    term: params.get("utm_term") || undefined,
    content: params.get("utm_content") || undefined,
    gclid: params.get("gclid") || undefined,
    clickId: params.get("msclkid") || params.get("fbclid") || undefined,
    referrer: referrer || undefined,
    landingPage: `${window.location.pathname}${window.location.search}`,
    capturedAt: new Date().toISOString(),
  };

  if (!read(FIRST_TOUCH_KEY)) write(FIRST_TOUCH_KEY, touch);

  const hasNewCampaign = Boolean(
    params.get("utm_source") ||
      params.get("gclid") ||
      params.get("msclkid") ||
      params.get("fbclid") ||
      (referrer && inferred.medium !== undefined)
  );

  if (hasNewCampaign || !read(LAST_TOUCH_KEY)) write(LAST_TOUCH_KEY, touch);
}

export function getAttributionPayload(): AttributionPayload {
  if (typeof window === "undefined") return {};

  captureAttribution();
  const firstTouch = read(FIRST_TOUCH_KEY);
  const lastTouch = read(LAST_TOUCH_KEY) || firstTouch;

  return {
    utmSource: lastTouch?.source,
    utmMedium: lastTouch?.medium,
    utmCampaign: lastTouch?.campaign,
    utmTerm: lastTouch?.term,
    utmContent: lastTouch?.content,
    gclid: lastTouch?.gclid,
    clickId: lastTouch?.clickId,
    referrer: lastTouch?.referrer,
    firstTouch,
    lastTouch,
  };
}
