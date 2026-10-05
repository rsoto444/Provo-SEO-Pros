# Handoff: Provo SEO Pros session, 23 September to 5 October 2026

Everything a new Claude session needs to pick up this work: what was done, what is still open, and how we work. Written Monday 5 October 2026.
Next: check that the Roofer Provo Google profile shows "Permanently closed" (due Tuesday 6 October), then help Rich run the Week 3 directory prompt.

---

## 1. Who and where

- **Owner:** Rich Soto (Richard Soto Jr). One-person business. Explain things in plain English, as if to a 15-year-old with no coding background.
- **Business:** Provo SEO Pros, provoseopros.com. Facts, prices, decisions and history are in `CLAUDE.md` under "## My setup". Read that first. It is the record of truth.
- **Site code:** Next.js App Router in `website/`, hosted on Vercel (project provo-seo-pros, Root Directory = `website`). Vercel deploys the `main` branch.
- **Repos:**
  - `rsoto444/Provo-SEO-Pros`: this repo. Work on `claude/amazing-bell-ft0wlv`; push to `main` only when Rich says "publish". A fast-forward push of the branch to main is the publish step.
  - `rsoto444/soto-growth-systems`: the Soto Growth Systems site (a separate business, its own Claude session and its own GoHighLevel sub-account). Only the offpage-seo skill was added here from this session.
  - `rsoto444/sgs-rank-tracker`: Rich's rank tracker. This session added a read-only report API.
- **Commit email for deploys:** rsoto443@gmail.com (matches Vercel, or deploys are blocked).

## 2. Secrets: where they live, never commit them

- `.env` (gitignored): DataForSEO login (`DATAFORSEO_LOGIN` / `DATAFORSEO_PASSWORD`), Pexels key, lead webhook, `SGS_TRACKER_REPORT_KEY`.
- `website/.env.local` (gitignored): lead webhook for local builds.
- Vercel: `LEAD_WEBHOOK_URL`. Tracker Vercel project: `REPORT_API_KEY`.
- DataForSEO balance was about $47.60 on Wednesday 30 September; backlinks access works. Ask before spending more than $5 per run.

## 3. How we work (Rich's standing rules)

- Every command opens with a short roadmap (steps, time, what you need from Rich, what might go wrong).
- Nothing goes live until Rich says "publish". Never force-push.
- Never delete anything (pages, images, scripts, listings, GoHighLevel bots, contacts, DNS) without an explicit yes. Turn things off or set them to Draft instead.
- Never rewrite body copy during fixes. Smallest insertion only, shown before and after for veto.
- Never invent proof, prices, reviews, clients, credentials or results. If it can't be looked up, ask Rich one question at a time.
- No em dashes anywhere. Copy-ready text goes in code blocks. No tables in files Rich reads.
- Every page change ends with a clickable localhost link (`npm run dev` or `npx next start`) plus the live link after publishing.
- Things done in browsers (GoHighLevel workflows, directories, Search Console) are done by Rich using **Claude for Chrome**. Our job is to write the prompt: exact details, hard rules (no paying, no passwords, no deleting, never invent), and a report-back format. Rich pastes the report back and we record it.
- Test the chatbot from a phone other than Rich's cell (801) 372-2776. His contact gets all internal alerts.

## 4. Gotchas we hit

- **Test server:** build, then `npx next start -p 4321`. Never score the dev server. To stop it, kill the PID from `ps -eo pid,comm | grep next-server`. Never use `pkill -f` or `pgrep -f` with a pattern that is in your own command line: it kills your shell (exit 144). `pgrep -x next-server` fails because the process name is truncated.
- **Lighthouse:** `CHROME_PATH=/opt/pw-browsers/chromium npx lighthouse ... --chrome-flags="--headless --no-sandbox"`. Best Practices 96 locally is a sandbox network artifact (third-party scripts fail TLS); live PageSpeed gives 100.
- **The Claude app's file panel** can't open files outside the session's main folder. Copy files to the scratchpad and send them with SendUserFile.
- **DataForSEO:** `timeseries_new_lost_summary/live` rejected `date_from` ("Invalid Field"). Check the docs before the monthly run. The rest of the calls are listed in `.claude/skills/offpage-seo/references/dataforseo-endpoints.md`.
- **GoHighLevel API** can't create workflows or pipelines. Write a Claude for Chrome prompt instead.
- **Phone formats:** some directory forms reject brackets; use 866-402-6849.

---

## 5. What was done in this session

### Website (all live)

- **New service pages:** Roofing SEO, HVAC SEO, Plumbing SEO, Contractor SEO, Web Design for Contractors, all with footer links.
- **New blog post:** "How Much Does SEO Cost for a Local Business?" at /how-much-does-seo-cost/.
- **Guided Implementation page:** changed to "6-month minimum".
- **Spam trap on every form:** a hidden `fax_number_2` field. `website/app/api/lead/route.ts` drops bot posts quietly.
- **Rank tracker snippet:** in `website/app/layout.tsx`.
- **Homepage SEO pass (Monday 28 September):**
  - Title is now "Provo SEO Company Since 2001 | Local SEO From $900/mo".
  - H1 starts "Provo SEO:".
  - Service card headings link to their pages.
  - Images got width and height plus 800px phone versions.
  - The SEO card price was corrected to $2,500/mo.
  - Lighthouse mobile 99/100/96/100.
  - Logged in `optimization-log.md`; report in `audit-report.html`.
- **Broken backlink fixed:** `/=gmb&utm_medium=organic/` now redirects to `/` (in `website/lib/redirects.json`), so the utah-local.com link counts.

### GoHighLevel (Provo SEO Pros sub-account, location wSReZrJU6zJSHyQp5LDp)

- **Voice AI "Athena":** answers (866) 402-6849 24/7. Knowledge base rebuilt from the 26 current pages.
- **Form workflow:**
  - Text and email alert to Rich.
  - Auto-reply from contact@provoseopros.com.
  - Leads go to the "Website Leads" pipeline; free audits go to "Free Audit Campaign".
  - Fields are mapped correctly.
- **Chatbot "Provo SEO Pros ChatBot":** updated in place to speak as Athena and book on Rich Soto Calendar.
- **Chat alerts:** a new workflow, "Chat Alert to Rich", sends a text and an email with the message.
- **Old "Chat Trigger":** set to Draft. It had been texting a random number, (808) 280-4254; that contact now has DND on.

### Tracking

- **SGS Rank Tracker report API:** `GET https://sgs-rank-tracker.vercel.app/api/report?site=provoseopros.com&days=28`, with header `Authorization: Bearer $SGS_TRACKER_REPORT_KEY`. Read-only. Use it instead of asking Rich for Search Console numbers.

### Off-page SEO (plan in `off-page-plan.md`)

- **Week 1 listings:**
  - Done: Google Business Profile (categories trimmed, address hidden, short description), Bing, Facebook, LinkedIn (full address), Yelp.
  - Open: Apple Maps is waiting on verification.
- **Week 2 listings:**
  - Clutch done: Freelancer, founded 2001, SEO 60 / Web Design 30 / Other Digital Marketing 10.
  - BBB free profile waiting on BBB's review.
  - Foursquare correct but unclaimed (claiming costs a fee).
  - Yellow Pages skipped (Thryv sales form only).
  - UpCity skipped (discontinued).
  - DesignRush draft parked: it needs 3 real featured clients.
- **Roofer Provo Google profile:** a lead-generation profile at Rich's address, which breaks Google's rules. Rich marked it permanently closed on Tuesday 29 September. Soto Professional Services and Shop Local Provo are real businesses with hidden addresses: no action.
- **Old phone numbers, all dead:** (385) 481-7087, (385) 316-6294, (385) 236-0868. The last place Rich controls that still shows one is the YouTube channel @provoseopros9657.
- **Backlink baseline** (`backlink-baseline.md`):
  - 213 linking domains, 194 of them spam-scored. Authority 16.
  - Competitors (confirmed by Rich): Utah SEO Pros 335, Octiv Digital 303, Red Olive 375, Hexxen 469.
- **Disavow:** Rich has bought links in the past, and Search Console shows no manual action. Rich uploaded a disavow file of the 194 spam domains on Wednesday 30 September.
- **Link gap** (`link-gap.md`): the best directories that 2 to 4 competitors are on. They make up Week 3 of the plan.
- **Unlinked mentions** (`offpage/provoseopros.com/prospects/unlinked-mentions.md`):
  - Only JetRank's "Top 40 Provo SEO Companies" is a real one.
  - The request was sent Wednesday 30 September through their contact form.
  - Our message said the listing shows "20% SEO focused"; it actually shows 40%. Minor; mention it if they reply.
- **offpage-seo skill:** Rich's own skill, installed at `.claude/skills/offpage-seo` in this repo and in soto-growth-systems, both on main.
  - `scripts/dfs.py` was patched to accept `DATAFORSEO_LOGIN`.
  - Raw API cache in `offpage/<domain>/raw/` is gitignored.
  - Its human-facing files follow CLAUDE.md formatting.

### Other

- **Soto Growth Systems:** wrote a full handoff prompt for a separate session (separate repo, its own GoHighLevel account, marketing site only, straighter tone).

---

## 6. Still to do

### Waiting on Rich (owner actions)

- **Week 3 directories, from Monday 12 October:** 9 agency directories via Claude for Chrome. The prompt (logo allowed) is saved in `offpage/provoseopros.com/chrome-prompts/week-3.md`. Rich needs the two logo files in his Downloads folder; regenerate them from `website/public/images/logo.png` if needed (wide, plus the same logo centred on an 800 by 800 white square).
- **Apple Maps verification:** the phone on file is the dead (385) 316-6294, so he needs Apple's other verification option, then to change the phone to (866) 402-6849.
- **Facebook:** the page's LinkedIn link still points to Soto Professional Services.
- **Clutch tagline and YouTube phone:**
  - Approved: Clutch tagline becomes "Provo SEO Company Since 2001", and the YouTube channel phone is replaced with (866) 402-6849.
  - A Claude for Chrome prompt was given; no report back yet. Ask Rich whether it ran.
- **Yelp:** the street shows "820th N" (optional fix through Yelp support).
- **BBB:** watch contact@provoseopros.com for the review result.
- **Missing emails:** Rich said he wasn't getting emails "from contact@provoseopros.com".
  - Checked: sending setup and send log are healthy (mailgun on noreply.provoseopros.com, every send accepted). No leads arrived after Sunday 27 September.
  - Still need to know which emails he means: lead alerts, auto-replies, normal inbox mail or chat alerts.
  - Offer to send one test lead, and check SiteGround spam.
- **Optional, from earlier:**
  - In the rank tracker: add "provo seo company", "search engine optimization provo" and "provo seo", and set the location to Provo.
  - Review the 30 GoHighLevel users.
  - Delete his wife's test contact.

### Scheduled checks (Claude)

- **Tuesday 6 October:** confirm Roofer Provo shows "Permanently closed" and Provo SEO Pros is still in the map pack for "seo company provo". A reminder fires into the old session; if this session is the one working, do it here.
- **Wednesday 14 October:** if JetRank hasn't replied, give Rich the follow-up email to editor@jetrank.net. It's written in the chat history and repeated here:
  - Subject "Quick follow-up: Provo SEO Pros listing".
  - The listing shows 2-10 employees and 40% SEO; the truth is one person and about 60% SEO; ask for the update plus a link.
- **Monday 2 November:** monthly backlink check against `backlink-baseline.md` (new and lost domains, authority score). Fix the timeseries call first.
- **Monday 9 November:** re-measure the homepage in `optimization-log.md` (clicks, impressions, positions vs the 28 September baseline). The tracker report API has the numbers.

### Next work

- **Weeks 4 and 5 of `off-page-plan.md`:**
  - Utah Valley Chamber (check the fee), Agency Spotter, Nextdoor, Manta, Hotfrog, EZlocal.
  - Best of SLC and SLC Top 10 outreach.
  - Brownbook, Cylex, MapQuest, Superpages.
  - "Best SEO company in Provo" list outreach.
- **Reviews:** Rich has no past clients to ask yet. Send the review request after each delivered free audit and after a new client's first monthly report. The text is in `off-page-plan.md`.
- **Next blog post:** "SEO for roofers" (`/blog-post`). Rich said "not yet" on Monday 28 September.
- **offpage-seo skill phases not yet run:** Google Business Profile gap vs the top 3 map-pack competitors, review velocity, digital PR / journalist requests, and AI mention tracking (needs DataForSEO's monthly AI plan, so confirm first).

---

## 7. Files worth opening

- `CLAUDE.md`: rules plus "## My setup" (all business facts and decisions)
- `off-page-plan.md`: the week-by-week listing plan with ticks
- `backlink-baseline.md`, `link-gap.md`: off-page data
- `offpage/provoseopros.com/`: outreach drafts, prospects, Claude for Chrome prompts
- `optimization-log.md`, `audit-report.md`: on-page history
- `website-index.md`, `keyword-map.md`: pages built and the build order
