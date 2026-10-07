#!/usr/bin/env bash
# Live verification of the jurispage.io -> jurispage.com migration.
# Run after Namecheap DNS points (www.)jurispage.io at Vercel and the cert is issued.
# Checks: HTTPS works, redirects are permanent (301/308), paths and query strings
# are preserved, and the final .com destination returns 200.
# Usage: bash scripts/verify-io-live.sh
set -u
fail=0
check() { # host path expected_location
  local url="https://$1$2" expected="$3"
  local out; out=$(curl -sS -o /dev/null -m 20 -w '%{http_code} %{redirect_url}' "$url" 2>&1)
  local code=${out%% *} loc=${out#* }
  if [[ "$code" =~ ^30[18]$ && "$loc" == "$expected" ]]; then
    local final; final=$(curl -sS -o /dev/null -m 20 -L -w '%{http_code}' "$url" 2>&1)
    [[ "$final" == 200 ]] && printf 'PASS  %-70s -> %s %s (final %s)\n' "$url" "$code" "$loc" "$final" \
      || { printf 'FAIL  %-70s -> %s %s (final %s)\n' "$url" "$code" "$loc" "$final"; fail=1; }
  else
    printf 'FAIL  %-70s -> %s %s (expected %s)\n' "$url" "$code" "$loc" "$expected"; fail=1
  fi
}
for host in jurispage.io www.jurispage.io; do
  check "$host" "/"                                           "https://jurispage.com/"
  check "$host" "/landing-page-portfolio/"                    "https://jurispage.com/law-firm-websites/"
  check "$host" "/landing-page-portfolio/?utm_source=qa&utm_medium=link" "https://jurispage.com/law-firm-websites/?utm_source=qa&utm_medium=link"
  check "$host" "/seo-for-lawyers/"                           "https://jurispage.com/law-firm-seo/"
  check "$host" "/services/email-marketing/"                  "https://jurispage.com/law-firm-email-marketing/"
  check "$host" "/about-us/"                                  "https://jurispage.com/about-us/"
  check "$host" "/blog/"                                      "https://jurispage.com/blog/"
  check "$host" "/unknown-path-qa/?ref=1"                     "https://jurispage.com/unknown-path-qa/?ref=1"
done
echo "--- plain HTTP (should upgrade to HTTPS, then redirect) ---"
curl -sS -o /dev/null -m 20 -w 'http://jurispage.io/landing-page-portfolio/ -> %{http_code} %{redirect_url}\n' "http://jurispage.io/landing-page-portfolio/"
echo "--- .com sanity ---"
for p in / /law-firm-websites/ /law-firm-seo/; do curl -sS -o /dev/null -m 20 -w "https://jurispage.com$p -> %{http_code}\n" "https://jurispage.com$p"; done
exit $fail
