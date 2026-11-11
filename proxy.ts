import { NextRequest, NextResponse } from "next/server";
import {
  EXACT_CONSOLIDATION_REDIRECTS,
  resolveConsolidationDestination,
} from "./data/jurisdigitalConsolidation";

const INTERNAL_PASSTHROUGH_PREFIXES = [
  "/_next/",
  "/api/",
  "/images/",
  "/market-gap/report/",
  "/market-gap/loading/",
  "/competitor-report/",
  "/growth-path/report/",
  "/growth-path/loading/",
];

export function proxy(request: NextRequest): NextResponse {
  const { pathname, search } = request.nextUrl;

  // Allow crawlers to fetch robots.txt directly so Googlebot crawls all legacy URLs and processes 301s.
  if (pathname === "/robots.txt" || pathname === "/favicon.ico") {
    return NextResponse.next();
  }

  let normalized = pathname || "/";
  if (normalized.length > 1) {
    normalized = normalized.replace(/\/+$/, "") || "/";
  }
  const exactHit =
    EXACT_CONSOLIDATION_REDIRECTS[normalized] ??
    EXACT_CONSOLIDATION_REDIRECTS[normalized.toLowerCase()];
  if (exactHit) {
    return NextResponse.redirect(search ? `${exactHit}${search}` : exactHit, 301);
  }

  for (const prefix of INTERNAL_PASSTHROUGH_PREFIXES) {
    if (pathname.startsWith(prefix)) {
      return NextResponse.next();
    }
  }

  const destinationBase = resolveConsolidationDestination(pathname);
  const destinationUrl = search ? `${destinationBase}${search}` : destinationBase;

  return NextResponse.redirect(destinationUrl, 301);
}

export const config = {
  matcher: ["/:path*"],
};
