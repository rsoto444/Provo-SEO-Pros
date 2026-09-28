# Optimization log

Every `/seo-optimization` run records the page's state BEFORE the fixes, so the improvement is provable later. Newest entry first. The re-measure line gets filled about 6 weeks after the run - that before → after is the line you show a client.

Rules:
- The GSC baseline is pasted verbatim from Search Console (Performance → filter Page = the URL). Never estimated, never remembered.
- If GSC isn't verified yet, the entry says so and points at the Search Console steps in `/publish`. The entry still gets written.
- Every run of `/seo-optimization` starts by checking this file for due re-measures and filling in the delta.

---

## Entry format (copy for each run)

```
## <date> · <page path>

**Checks:** <category>: X/Y → X/Y (one line per category that moved) · loop count: N
**Lighthouse (<mobile|desktop>):** Perf XX → XX · SEO XX → XX · A11y XX → XX · BP XX → XX
**GSC baseline (last 28 days, pulled <date>):**
- Clicks: N · Impressions: N · Avg position: N.N
- Top queries: "query" pos N.N · "query" pos N.N · "query" pos N.N · "query" pos N.N · "query" pos N.N
**Shelf-life fixes:** <any fix that can rot, with its permanent fix> (or "none")
**Re-measure on:** <date +6 weeks> → _(fill in: clicks, impressions, avg position, and the delta)_
```

---

<!-- Entries begin below. Newest first. -->

## Monday 28 September 2026 · Homepage (/)

**Checks:** Headings: 4/5 → 5/5 · Images: 3/6 → 5/6 · Internal links: 3/5 → 5/5 · First-hand proof: 5/6 → 5/6 (waiting on your photo) · loop count: 2
**Lighthouse (mobile, median of 3):** Perf 97 → 99 · SEO 100 → 100 · Accessibility 97 → 100 · Best Practices 96 → 96 (test-machine network, live scores 100)
**Search Console baseline (whole site, last 28 days, pulled Sunday 27 September from the SGS tracker):**
- Clicks: 6 · Impressions: 3,569 · Homepage-only numbers: not pulled yet
- Top queries: "search engine optimization services provo" position 4.1 · "seo company provo" position 9.8 · "provo seo company" position 13.8 · "search engine optimization provo" position 14.5 · "provo seo" position 19.1
**What changed:** title, description, H1 (added "Provo SEO"), 3 service headings linked, image sizes, smaller phone images, SEO card price matched to $2,500/mo
**Shelf-life fixes:** none new (the inlined font file from the earlier audit still applies: self-host the fonts to make it permanent)
**Re-measure on:** Monday 9 November 2026 → _(fill in: clicks, impressions, avg position, and the delta)_

