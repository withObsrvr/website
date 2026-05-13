# Obsrvr Website — Designer Brief

## Project context

Obsrvr is a data infrastructure company for Stellar. The audience is professional — wallet teams, protocol engineers, compliance officers at financial services firms, and enterprise buyers evaluating whether to build on a platform. The site needs to feel credible to a compliance officer at a stablecoin issuer *and* a senior engineer at a wallet team, without alienating either.

The existing marketing properties (nebu, Prism) have their own distinct visual languages. This site is a separate surface with a different job. It is not the developer tool. It is the company.

## Reference benchmarks

Three sites to study, in order of relevance:

**Stripe (stripe.com)** — The primary reference. Study the typography hierarchy, the segment cards, the way enterprise proof is surfaced without overwhelming. Note how much whitespace they use and how restrained the color palette is.

**Stellar (stellar.org)** — Study their enterprise pivot. Note how they lead with "where blockchain meets the real world" rather than technical claims, and how they segment by audience (devs / institutions / fintechs) in the same way this site needs to.

**Linear (linear.app) and Vercel (vercel.com)** — Reference points for the developer-section parts of the site. Clean, confident, technical without being brutalist.

Three sites to explicitly *not* reference:

- Crypto-native projects with animated backgrounds, glowing gradients, or space imagery. This is not that market.
- Developer tools with dark-mode-first homepages and neon palettes. That's the nebu aesthetic. Not this site.
- Enterprise software that feels corporate-boring (big stock photos of people in conference rooms, blue-and-gray everywhere). Stripe feels enterprise without feeling boring; that's the target.

## The core positioning tension to resolve visually

Obsrvr sits between two worlds:

- **Infrastructure for serious financial use cases** (compliance, stablecoins, enterprise platforms) — this audience needs the site to feel institutional, trustworthy, and precise.
- **Developer platform** (APIs, data access, explorers) — this audience needs the site to feel modern, technical, and ship-it-yourself.

The design should lean **70% enterprise, 30% developer-modern**. Closer to Stripe than to Linear. The developer pages (/products/apis, /platform) are where the technical aesthetic intensifies; the homepage and compliance page stay more institutional.

## Visual direction

### Overall feeling

Confident, precise, uncluttered. The site should feel like it was built by people who understand what they're doing. Not playful, not austere — measured.

Every page should have a clear visual hierarchy: hero, proof, structure, depth. The reader should never have to hunt for the next action.

### Color

**Primary palette: near-neutral with one accent.**

- Background: off-white or very pale warm gray (something like `#FAFAF8` to `#FFFFFF`, never pure stark white)
- Text: deep near-black (`#1A1A1A` or similar, not pure `#000`)
- Accent: coral `#FF7F50` — the existing Obsrvr/nebu accent, used *sparingly* for primary CTAs and key highlights
- Secondary accent: a muted complement (suggestion: a deep teal `#1F4E5F` or similar) for secondary links and subtle framing
- Grays for hierarchy: `#F4F4F0`, `#E8E8E4`, `#A8A8A4`, `#5C5C58` — warm grays, not cold Material-style grays

**Use of color:**
- Coral is earned. Primary CTAs, one or two key accent elements per page, and the logo. It should never feel like decoration.
- Large color blocks are rare. Most sections are white-on-white with subtle dividers or card backgrounds in the lightest gray.
- Avoid gradients entirely, except perhaps a very subtle one-color fade in a hero background if the design calls for it.

### Typography

**Two families. Sans for UI and body, monospace for code and data.**

- **Sans-serif:** A humanist sans with good metrics at large sizes. Recommended starting points: Inter (widely available, reliable), Söhne (if budget allows, more distinctive), or IBM Plex Sans (distinctive, free, works at scale). Avoid Geist and other trendy developer-tool fonts — too close to Linear/Vercel, not distinctive enough for an enterprise voice.
- **Monospace:** JetBrains Mono or IBM Plex Mono. Used for code blocks, API examples, and occasionally for proof-stat numbers to give them a technical feel.

**Hierarchy:**
- Hero headline: large, tight leading, heavy weight (`~64–80px desktop`, `~40–48px mobile`). One sentence, readable in two seconds.
- Section headlines: `~36–44px desktop`. Enough weight to anchor, not so heavy they shout.
- Body: `~17–18px desktop`. Generous line height (`~1.6`). Dark but not pure black.
- Small caps or uppercase tracking for section labels ("PRODUCTS", "CUSTOMERS") — but use very sparingly, these are easy to overuse.

**Avoid:**
- Thin or light weights on white backgrounds. Nothing lighter than regular for body, nothing lighter than medium for headlines.
- Italics for emphasis. Use weight contrast instead.
- More than two type families. No decorative serif, no script, nothing clever.

### Layout and grid

**Generous whitespace is the single most important thing.**

This is where enterprise design separates from crypto design. The Stellar homepage you referenced works because every section has room to breathe. Sections should feel like distinct ideas, not like a wall of content.

- **Max content width:** ~1200–1280px for full-width sections, ~960px for prose-heavy sections
- **Section padding:** generous top/bottom, something like 120px on desktop, 80px on mobile
- **Card gutters:** 24–32px between cards in a grid
- **Inside cards:** 32–40px of padding

**Grid:**
- 12-column grid standard
- Most content on 8 or 10 columns, centered
- Full-bleed only for the hero and the final CTA, nothing else

### Imagery and iconography

This is where crypto sites usually go wrong. Default answer: **use less imagery than you think you need.**

**What to avoid:**
- Stock photography of people (except possibly real customer photos on /customers)
- Abstract "blockchain" visuals (cubes, networks, glowing nodes)
- 3D renders of any kind
- Isometric illustrations of servers/databases
- Animated background gradients or particle effects

**What works:**
- **Product screenshots** — Prism transaction pages, API response examples, dashboard mockups (for the compliance page). These should be the dominant visual element.
- **Code blocks** — well-typeset, syntax-highlighted, with subtle frames. These are the site's art.
- **Simple diagrams** — 2D, monochrome, hand-crafted. Architecture explanations on /platform can use these. Keep line weights consistent, no decoration.
- **Icons** — a single, simple, consistent icon set. Heroicons (outline variant) or Lucide. Never mix icon styles.
- **Customer logos** — only real customers, displayed with restraint. No tiling or repetition.

### Components and UI patterns

**Buttons:**
- Primary: coral background, white text, ~8px border radius, moderate padding
- Secondary: outlined in dark gray/near-black, same radius
- Tertiary: text-only with subtle underline on hover
- Never use three different button styles on the same page

**Cards:**
- Subtle background shift (`#FAFAF8` → `#F4F4F0`) or a 1px border in `#E8E8E4`
- Slight shadow optional but restrained — nothing that suggests a "popping" effect
- Consistent padding across all cards
- No rounded corners above 12px

**Code blocks:**
- Dark background (`#1A1A1A` or near-black), monospace text
- Clean syntax highlighting in muted colors (not the rainbow VSCode default)
- Subtle filename/language label at top
- Copy button in top-right

**Tables (pricing, feature comparisons):**
- Minimal borders — horizontal rules between rows, no verticals
- Tier column slightly emphasized
- Coral accent on the recommended tier (if any), never on more than one

**Navigation:**
- Sticky header, minimal height
- Products as a dropdown (Prism, APIs, Compliance)
- Platform, Customers, Pricing, Docs as direct links
- "Contact sales" button in coral on the right
- On scroll, header can add a subtle shadow; don't animate anything fancy

### Motion

**Less is more.** Enterprise sites that feel cheap usually have too much motion.

**Acceptable:**
- Fade-in on scroll for sections (subtle, short duration — 200ms max)
- Hover states on cards: very subtle lift or border color change
- Button hover: color shift, no scaling
- Smooth scroll for anchor links

**Avoid:**
- Parallax scrolling
- Auto-playing video backgrounds
- Animated counters for the proof stats (let the numbers just be numbers)
- "Magic" cursor effects
- Elements that animate on every scroll

### Dark mode

Not required for v1. If you build it, the dark mode should feel *less* like a developer tool and more like a sophisticated product. Background around `#0F0F0E`, not `#000`. Warm grays for text. Coral accent stays, but desaturate slightly. Skip dark mode entirely rather than do it poorly.

## Page-by-page notes for designer

### Homepage

The most important design decision is the **hero section**. Stripe does this well: a single bold sentence, generous whitespace, subtle visual element behind or beside the text, two clear CTAs. The hero is not the place for a screenshot.

Below the hero:
- Proof band (four stats with monospace numbers)
- Three segment cards — these are the core of the page, where most conversion happens
- Prism spotlight section with a real transaction example (this is the only place a screenshot or UI mockup belongs on the homepage)
- Platform explainer with a simple diagram
- Customer band
- Developer section with code examples
- Closing CTA

### /products/prism

Prism has its own visual identity already at prism.withobsrvr.com. This page describes Prism but doesn't try to replicate its look. Use Prism screenshots as imagery, but keep the surrounding page in the Obsrvr enterprise style.

The "raw vs. interpreted" comparison block is the key visual on this page. Two code/data blocks side by side, with the Prism interpretation clearly the richer, more readable side.

### /products/apis

This is the most developer-leaning page. You can push the technical aesthetic harder here — more code blocks, more syntax highlighting, more precise language. But still enterprise-restrained, not Linear-brutalist. Think "serious API documentation landing page" not "hackathon-winning framework."

### /products/compliance

The most enterprise-leaning page. This audience scans for trust signals. Subdued palette — maybe slightly fewer uses of coral, more neutral. Dashboard mockups are the primary visual. The page should feel like it was built for a director-level reader at a financial services firm.

### /platform

Architecture diagrams belong here. These should be the cleanest, most restrained diagrams on the site. Monochrome or two-tone, clear hierarchy, no decoration. Think IETF RFC diagrams or good systems-design textbooks, not marketing infographics.

### /pricing

Transparency signals trust at the enterprise level. The table should be prominent and easy to scan. Stripe's pricing page is the reference. Coral accent on the recommended tier, neutral on others.

## What you are solving for

A compliance officer at a stablecoin issuer should land on the homepage and think: *these people know what they're doing, this looks legitimate, let me click compliance.*

A senior engineer at a wallet should land on the homepage and think: *clean, confident, not overselling, let me see the APIs.*

Neither should feel like the site was built for the other audience. The shared aesthetic — enterprise-clean with developer-friendly technical depth available on the inner pages — is what makes that possible.

## What not to try to solve

- Personality. This site doesn't need to be quirky or memorable. It needs to be credible. Personality belongs on the nebu site and in blog posts.
- Mobile-first creativity. Design for desktop first; mobile is a simplified version of the same layout.
- Illustration style. There is no illustration style. This is a photography-minimal, illustration-minimal site.

## Deliverables (suggested)

1. **Style guide:** color palette with hex codes, type scale with specific sizes and weights, component library (buttons, cards, code blocks, tables, form elements)
2. **Homepage mockup:** full desktop, full mobile, covering hero through footer
3. **Product page template:** the layout that /products/prism, /products/apis, and /products/compliance all share, with variant styling for each
4. **Platform page mockup:** with architecture diagram treatment
5. **Pricing page mockup**
6. **Component edge cases:** API code examples, customer testimonial block, CTA variants

## Inspiration mood board (send to the designer)

- stripe.com (primary)
- stellar.org (segment card treatment, enterprise voice)
- linear.app (developer section aesthetic, use sparingly)
- planetscale.com (technical enterprise reference)
- vercel.com/templates (layout rhythm)
- ramp.com (enterprise fintech reference — study the restraint)

## Final note on the aesthetic question

You mentioned the tension between terminal-brutalist (nebu) and enterprise (this site). That tension is healthy and the right answer is **each property gets the voice its audience needs.**

- **nebu.withobsrvr.com** — terminal brutalism, developer-native, opinionated
- **prism.withobsrvr.com** — clean explorer aesthetic, product-focused
- **withobsrvr.com** — enterprise-clean, institutional credibility, the company face

This is the same pattern Stripe follows: stripe.com (enterprise) vs. docs.stripe.com (developer) vs. stripe.press (editorial). Each surface serves its audience. The brand stays consistent through the accent color, the company mark, and the underlying voice — not through forcing every property into the same visual language.

Keep the coral. Keep the name. Change the posture.
