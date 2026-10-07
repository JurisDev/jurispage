# JurisPage backlink recovery, October 7, 2026

Canonical repository: https://github.com/JurisDev/jurispage. Base: b87fa40. Isolated branch: codex/backlink-recovery-20261007. Production has not been changed by this work.

## Findings and scope

Ahrefs `broken-backlinks` returned 73 backlink records for jurispage.com, covering 22 destination URLs. Fifteen destinations, accounting for 64 reported backlinks, have relevant replacements in this change. Seven destinations, accounting for nine backlinks, need content recovery or an editorial decision. These are conference/event pages, an author's personal essay, a historical Legal Trends report, Facebook advertising and a Google Hangouts webinar. Sending these to an unrelated service page would misrepresent the link's reader task.

The all-time `pages-by-backlinks` reports returned 3,605 .com records and 49 .io records, below the 10,000-row request cap for each. Queries used subdomains mode, both protocols and all-time history. Historical lost-link counts include links removed by third parties; a destination redirect does not restore a removed source link. Ahrefs cannot establish a complete inventory of every backlink on the web.

After separating client subdomains, media, legacy CMS endpoints, query-string variants, protocols and www variants, the audit contains 640 distinct root-domain content paths. Live HEAD checks found 244 HTTP 404s, 368 HTTP 308s and 28 HTTP 200s. The change adds or improves 234 exact-path redirects: 153 current 404s and 81 paths previously redirected less precisely, principally to the homepage. It preserves 120 existing scoped redirects and 28 working pages. The remaining 258 paths need content review: 91 current 404s and 167 existing redirects, many historical software reviews without a relevant replacement. Their existing behavior is preserved. Excluded URL records are documented separately; client-site subdomains are not redirected to agency services, and images are not redirected to HTML pages.

Mappings use old URL topics, Ahrefs backlink anchors/context where available, existing routing, current repository content and live destination titles. Examples: old marketing-plan content to /small-law-firm-marketing/; old email-marketing content to /law-firm-email-marketing/; website design/contact-form content to /law-firm-websites/; paid-search content to /google-ads-for-law-firms/; old copywriting to /law-firm-content-writing/. The only new homepage destination is /home, an actual homepage alias. Narrow redirects precede the existing legacy catch-alls.

## Validation

- `npm run build`: passed, including Prisma generation, TypeScript and all 209 static outputs. Initial restricted run could not fetch existing Google Fonts; the network-enabled run passed without changing fonts or product code.
- `node scripts/verify-backlink-recovery.cjs`: all 234 source paths / 468 slash variants match their intended first custom redirect; zero duplicate sources, redirect destinations, loops or broad child-path matches. All 28 live working content paths remain unredirected. There are 991 custom rules in total.
- Built production app on localhost: all 468 variants reach HTTP 200 and preserve `utm_source`. Slash variants require one permanent 308; non-slash variants have the site's existing slash-normalization 308 followed by the destination 308. No redirect is added at the final destination. Global normalization behavior is unchanged.
- All 26 distinct destinations checked live with GET: HTTP 200, matching canonical and indexable robots metadata.
- `git diff --check`: passed. No forms were submitted and no production, DNS or Vercel settings were changed.

## Old .io domain: separate blocker

The earlier October 6 lookup did not resolve from this environment. On October 7, DNS returns A 192.64.119.81. HTTP responses identify Namecheap URL Forward and return temporary 302 redirects to https://jurispage.com for both / and /landing-page-portfolio/, discarding the path. HTTPS timed out after 20 seconds for both URLs. `vercel domains inspect jurispage.io` reports that the domain is not present in the verified account. Vercel project inspect confirms project jurispage, ID prj_2H16K5adUZMcKS3A3YdfNnEkh43c, in caseymeraz-gmailcom's projects.

A .com application deployment cannot repair the registrar's .io forwarding or HTTPS. The proposed solution is to connect jurispage.io and www.jurispage.io to the same Vercel project with verified TLS and permanent forwarding that preserves paths and query strings. Existing .com path rules then resolve the old content paths. Obtain the provider's actual DNS targets from Vercel rather than inventing records, and preserve mail/TXT/unrelated DNS records. Namecheap account access has been requested; no domain change has been made. This is a proposal pending domain access and validation.

The original landing-page-portfolio redirect remains unchanged; restoring its original screenshots is a separate content task. The latest request steered this work toward backlink destination repair.

## Release and rollback

Open the branch as a review PR. Confirm the current Git/Vercel deployment relationship before production deployment; repository notes contain conflicting historical statements about automatic deployments after the GitHub organization transfer. Do not claim that a push deployed production without evidence.

Rollback removes the backlinkRecoveryRedirects import and spread, or reverts the scoped commit, restoring the previous redirect configuration. After approved deployment, recheck every modified source and its final destination publicly, then recheck .io HTTP/HTTPS separately if the domain is repaired. Record the actual deployment URL, commit and verification. Redirect recovery is not a guarantee of recovered rankings or link value.

## Evidence

- ahrefs-evidence.json: selected Ahrefs source records, both domains and current broken backlinks.
- live-before.json: all 640 root content-path HTTP checks.
- url-audit.json / url-audit.csv: each content path's existing behavior, decision and intended destination.
- excluded-url-records.csv: client subdomains, media and non-content endpoints.
- destination-qa.json: 26 live destination checks, titles, canonicals and robots.
- route-checks.json / local-http-qa.json: routing and actual local HTTP verification.
