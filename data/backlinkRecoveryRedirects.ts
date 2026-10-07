import type { Redirect } from "next/dist/lib/load-custom-routes";

// Migration rules ONLY for the retired .io hosts. Existing .com routing is unchanged.
// Evidence and unresolved equivalents: docs/releases/backlink-recovery-20261007/io-migration.json.
export const backlinkRecoveryRedirects: Redirect[] = [
  {
    "source": "/",
    "destination": "https://jurispage.com/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/seo-for-lawyers",
    "destination": "https://jurispage.com/law-firm-seo/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/law-firm-seo",
    "destination": "https://jurispage.com/law-firm-seo/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/blog",
    "destination": "https://jurispage.com/blog/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/law-firm-marketing",
    "destination": "https://jurispage.com/small-law-firm-marketing/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/law-firm-marketing/law-firm-marketing-strategy",
    "destination": "https://jurispage.com/small-law-firm-marketing/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/law-firm-websites",
    "destination": "https://jurispage.com/law-firm-websites/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/what-googles-ai-overviews-mean-for-law-firm-seo-in-2025",
    "destination": "https://jurispage.com/generative-engine-optimization-legal-marketing/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/google-algorithm-updates-impact-on-law-firm-websites",
    "destination": "https://jurispage.com/blog/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/landing-page-portfolio",
    "destination": "https://jurispage.com/law-firm-websites/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/about-us",
    "destination": "https://jurispage.com/about-us/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/chatgpt-for-law-firm-marketing-a-blueprint",
    "destination": "https://jurispage.com/blog/ai-content-without-seo-strategy/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/contact",
    "destination": "https://jurispage.com/contact/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/criminal-defense-lawyer-seo",
    "destination": "https://jurispage.com/criminal-defense-lawyer-marketing/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/design-portfolio",
    "destination": "https://jurispage.com/law-firm-websites/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/feature-client-reviews-on-your-law-firms-website",
    "destination": "https://jurispage.com/law-firm-websites/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/feed",
    "destination": "https://jurispage.com/blog/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/law-firm-seo-cost",
    "destination": "https://jurispage.com/law-firm-seo-cost/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/portfolio/kazarian-law",
    "destination": "https://jurispage.com/case-studies/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/prove-law-firm-marketing-roi",
    "destination": "https://jurispage.com/small-law-firm-marketing/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/seo-for-bankruptcy-lawyers",
    "destination": "https://jurispage.com/bankruptcy-lawyer-marketing/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/seo-for-family-law-firms",
    "destination": "https://jurispage.com/family-law-firm-marketing/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/seo-for-lawyers/content-marketing",
    "destination": "https://jurispage.com/law-firm-content-writing/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/seo-for-lawyers/keyword-research",
    "destination": "https://jurispage.com/law-firm-seo/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/seo-for-lawyers/organic-ranking-factors",
    "destination": "https://jurispage.com/law-firm-seo/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/seo-for-real-estate-law-firms",
    "destination": "https://jurispage.com/real-estate-lawyer-marketing/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/services/email-marketing",
    "destination": "https://jurispage.com/law-firm-email-marketing/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/small-law-firms-can-use-digital-marketing-to-compete",
    "destination": "https://jurispage.com/small-law-firm-marketing/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/why-most-law-firm-websites-fail",
    "destination": "https://jurispage.com/law-firm-websites/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/best-law-firm-websites",
    "destination": "https://jurispage.com/law-firm-websites/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/law-firm-marketing-strategy",
    "destination": "https://jurispage.com/small-law-firm-marketing/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/platform",
    "destination": "https://jurispage.com/launchpad/",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  },
  {
    "source": "/:path(.*)",
    "destination": "https://jurispage.com/:path",
    "permanent": true,
    "has": [
      {
        "type": "host",
        "value": "(?:www\\.)?jurispage\\.io"
      }
    ]
  }
];
