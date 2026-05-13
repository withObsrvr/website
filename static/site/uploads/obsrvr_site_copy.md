# Obsrvr — Site Copy (Enterprise Voice)

**Design direction:** Stripe-inspired. Declarative sentences. Numbers where available. Customer-outcome framing at the top, technical depth available on dedicated pages. No emojis. No bronze/silver/gold vocabulary on marketing surfaces. Professional, confident, specific.

**Voice principles:**
- Lead with what the customer gets, not what you built
- One idea per sentence. Short sentences.
- Specificity beats superlatives ("processes every ledger with <10s latency" beats "blazing fast")
- Three buyer segments, three doors, one platform story
- Honest about what's live vs. in development — but don't hedge, just state the stage

---

## Sitemap

```
/                          Homepage
/products/prism            Soroban-first explorer (developer-facing)
/products/apis             Data APIs (wallet/protocol-facing)
/products/compliance       Stablecoin flow intelligence (compliance-facing)
/platform                  The Obsrvr data platform
/customers                 Customer stories
/pricing                   Transparent pricing
/docs                      Documentation (linked out)
/company                   About, team, mission
/contact                   Contact sales / request access
```

Navigation order: Products (dropdown) · Platform · Customers · Pricing · Docs · Contact

---

# /  — Homepage

## Hero

**Structured data infrastructure for Stellar and Soroban.**

Obsrvr turns raw ledger data into the clean, queryable, audit-ready data products that wallets, protocols, and compliance teams build on.

[ Request access ]  [ View documentation ]

*Under the hero, a thin band:*

Powering Prism · Built on Stellar · SCF-funded · Based in Ohio

---

## Proof band

Stats across four cells. Use only numbers that are defensible.

- **Every ledger.** Full mainnet and testnet coverage with <10s silver-layer latency.
- **22B+ events.** Historical Soroban and classic asset data, queryable via SQL and API.
- **3 live integrations.** Kwickbit, 57Blocks, stellarcarbon. Early-access customers building on Obsrvr today.
- **Open source core.** nebu and flowctl are freely available. Managed services are paid.

---

## Three-segment section

Section header: **Built for three audiences who need the same foundation.**

Subhead: Every Obsrvr product reads from the same canonical data layer. Pick the entry point that fits what you're building.

### Card 1 — For wallets, explorers, and developers

**Turn raw transactions into readable context.**

The Transaction Interpretation API decodes Soroban activity into human-readable summaries. A raw contract invocation becomes "Alice swapped 100 USDC for 412 XLM on Soroswap." Ship faster than building your own decoder.

[ Explore APIs →](/products/apis)

### Card 2 — For protocols and analytics teams

**Stop running your own indexers.**

Obsrvr Lake delivers structured Stellar data as SQL-queryable tables and APIs. Token transfers, contract events, enriched operations — all maintained, all versioned, all production-grade.

[ Explore the Platform →](/platform)

### Card 3 — For compliance and financial services

**Audit-ready stablecoin flow intelligence.**

Track USDC, EURC, and issuer-controlled assets across Stellar with full lineage, counterparty analysis, and sanctions screening. Built for AML officers at issuers, exchanges, and on-ramps.

[ Explore Compliance →](/products/compliance)

---

## Product spotlight: Prism

**The Soroban-first block explorer.**

Prism makes Stellar and Soroban transactions human-readable. Accounts, contracts, CAP-67 events, SEP-41 tokens, and cross-contract interactions — all in one place. Prism is powered by the same data platform that runs the Obsrvr APIs.

[Visual: mocked or real Prism transaction page showing readable interpretation]

*Example:*

> Transaction ABC123… — *read as:*
> **Alice (GABC…) swapped 100 USDC for 412 XLM on Soroswap at 14:32 UTC.**

[ Open Prism →](https://prism.withobsrvr.com)

---

## Platform section

**One platform underneath every product.**

Obsrvr is the data backbone for Stellar. We ingest every ledger, decode every Soroban event, and maintain canonical tables for accounts, transactions, tokens, and contracts. Prism, the APIs, and the compliance products are all surfaces on top of this single platform.

Four-column feature grid (terse, icon + headline + one sentence):

- **Real-time ingestion.** Every ledger processed into structured data with <10s latency.
- **Full history.** Soroban activity from launch, classic assets from genesis, queryable today.
- **Canonical models.** Normalized, deduplicated, versioned schemas. No raw XDR required.
- **Lineage built in.** Every row traceable to its source ledger for compliance and audit.

[ Learn about the platform →](/platform)

---

## Customer band

Header: **Built by teams who know Stellar.**

Three customer cards, each with one outcome metric and one line of attribution:

### Kwickbit
Building Stellar-native analytics on Obsrvr APIs.
> "Token balances and event indexing that would have taken us months to build ourselves."
*— Charles-Edouard, Kwickbit*

### 57Blocks
Orchestration layer built on Obsrvr's structured data.
> "Obsrvr gave us a foundation we didn't have to maintain."
*— Leo Meng, 57Blocks*

### stellarcarbon
Migrated from self-hosted pipelines to Obsrvr Lake APIs.
> "We stopped running infrastructure and got back to building our product."

[ Read customer stories →](/customers)

---

## Developer section

**Built for developers who want to ship, not maintain.**

Subhead paragraph: Obsrvr's data products are designed to be integrated in an afternoon. REST APIs with OpenAPI specs, an MCP server for agentic workflows, and nebu for direct pipeline access. Documentation, examples, and support that treat developers as engineers, not leads.

Three developer entry points:

- **APIs** — REST endpoints for accounts, transactions, transfers, and contract events. [API reference →]
- **nebu** — Open-source CLI for streaming Stellar data through Unix pipes. [Explore nebu →](https://nebu.withobsrvr.com)
- **MCP server** — Built for AI agents that need structured Stellar data. [MCP docs →]

---

## Ecosystem band

Thin section, three logos or lockups:

Stellar Development Foundation · SCF #12 · SCF #42 · Meridian 2025

---

## Closing CTA

**Ready to build on Stellar without building the data layer?**

Obsrvr APIs, Prism, and compliance products are available today through early access.

[ Request access ]  [ Contact sales ]

---

## Footer

Standard structure. Products · Platform · Customers · Pricing · Docs · Company · Legal.

---

---

# /products/prism

## Hero

**Prism**

The Soroban-first block explorer for Stellar. Human-readable transactions, contract-level visibility, and full Soroban history — in one place.

[ Open Prism ]  [ API access ]

---

## The problem

**Stellar's existing explorers weren't built for Soroban.**

Soroban transactions involve contract calls, CAP-67 events, SEP-41 tokens, and multi-step interactions across protocols. Existing explorers show raw event bytes. Developers, wallets, and users need to see what actually happened.

---

## What Prism does

Three-column feature grid:

### Readable transactions
Every transaction shows a plain-language summary: who acted, what was called, what moved, and which protocol was involved.

### Contract intelligence
Contract pages show callers, callees, function usage, and historical activity. Filter by function name, not topic hash.

### Full Soroban history
Every Soroban transaction from mainnet launch onward, queryable by address, contract, function, or asset.

---

## Example

*Side-by-side comparison block:*

**Raw transaction:**
```
Contract CCDC... invoked function swap(from=G..., to=G..., amount_in=100000000, amount_out_min=410000000)
Event: transfer {from: G..., to: CCDC..., amount: 100000000, asset: USDC}
Event: transfer {from: CCDC..., to: G..., amount: 412000000, asset: XLM}
Event: swap {router: CCDC..., path: [USDC, XLM], amounts: [100000000, 412000000]}
```

**Prism interpretation:**
> **Alice swapped 100 USDC for 412 XLM on Soroswap.**
> At 14:32 UTC on 2026-04-20, from account GABC… via contract CCDC…
> Price: 4.12 XLM per USDC. Gas: 0.0041 XLM.

---

## Who uses Prism

Two-column:

### For developers
Debug transactions. Understand contract behavior. Find the right function signature without reading XDR.

### For users
See what actually happened when you swapped, sent, or minted — without learning Stellar's internals.

---

## Built on Obsrvr

**Every Prism feature is an API underneath.**

The transaction decoder, contract analytics, and event interpretation that power Prism are all available as standalone APIs. If you want Prism's capabilities inside your own product, start here.

[ Explore the APIs → ](/products/apis)

---

## CTA

**Try Prism today. Integrate the APIs tomorrow.**

Prism is free to use. API access is available through early access.

[ Open Prism ]  [ Request API access ]

---

---

# /products/apis

## Hero

**Stellar data APIs for developers.**

Skip the indexing, skip the XDR decoding, skip the infrastructure. Obsrvr delivers structured Stellar and Soroban data through REST APIs that work the way developers expect.

[ Request access ]  [ View API reference ]

---

## Three API products

### Transaction Interpretation API

Turn any Stellar transaction hash into a structured, human-readable summary. Works for classic payments, Soroban contract calls, multi-asset swaps, and cross-contract interactions.

**Request:**
```
GET /api/v1/transactions/{hash}/interpret
```

**Response:**
```json
{
  "summary": "Alice swapped 100 USDC for 412 XLM on Soroswap",
  "actor": "GABC...",
  "action": "swap",
  "protocol": "soroswap",
  "assets_in": [{"code": "USDC", "amount": "100"}],
  "assets_out": [{"code": "XLM", "amount": "412"}],
  "confidence": 0.98
}
```

**Who uses it:** Wallets showing transaction history. Tax tools reconstructing cost basis. Portfolio dashboards tracking activity.

---

### Token & Balance API

Query current and historical token state for any Stellar address. Classic assets, Soroban tokens, and SEP-41 tokens unified in one response.

**Request:**
```
GET /api/v1/accounts/{address}/balances
GET /api/v1/accounts/{address}/transfers?from=2025-01-01
```

**Who uses it:** Wallets, portfolio trackers, DeFi dashboards, tax reporting tools.

---

### Contract Intelligence API

Query Soroban contract activity: call graphs, function-level analytics, caller/callee relationships, and historical usage patterns.

**Request:**
```
GET /api/v1/contracts/{id}/callers
GET /api/v1/contracts/{id}/functions
GET /api/v1/contracts/{id}/analytics?period=24h
```

**Who uses it:** Protocol teams monitoring their own contracts. Explorers. Analytics tools building DeFi dashboards.

---

## Why Obsrvr APIs

Four-item benefit grid:

- **Decoded at rest.** No XDR in our responses. Topics, data, and arguments are already parsed.
- **Unified classic + Soroban.** One API for SAC, SEP-41, and classic assets. No special cases in your code.
- **Production-grade SLAs.** <10s latency from ledger close to API response. Monitored uptime.
- **Built for integration.** OpenAPI specs, SDKs, MCP server for agentic use cases.

---

## Pricing

Transparent, usage-based. No hidden fees, no enterprise-only features.

| Tier | Monthly | Includes |
|---|---|---|
| **Launch** | ~$99 base + usage | Pay-as-you-go for early builders |
| **Data Access** | $1,800 flat | Unlimited API calls, you build processors |
| **Managed** | $5,500 flat | Unlimited + 2-3 custom processors built by Obsrvr |
| **BYOC Managed** | $3,500 + infra | Run in your own cloud; we operate it |

[ Contact sales for custom pricing →](/contact)

---

## CTA

**Stop building what Obsrvr already built.**

API access is available through early access. Most integrations are live within a week.

[ Request access ]

---

---

# /products/compliance

## Hero

**Stablecoin flow intelligence for Stellar.**

Track USDC, EURC, and issuer-controlled assets across Stellar with complete audit lineage, counterparty analysis, and sanctions screening workflows built in.

[ Request a demo ]  [ Download overview ]

---

## Built for financial services

This page speaks to AML officers, not developers. Vocabulary is compliance-first.

### Who this is for

- AML and compliance officers at stablecoin issuers
- On-ramp and exchange compliance teams operating on Stellar
- Financial services firms with Stellar exposure needing SAR-ready audit trails
- Regulators and analysts studying Stellar's stablecoin activity

---

## What you get

Four-card grid:

### Flow monitoring
Track every stablecoin transfer across Stellar with issuer, counterparty, amount, and protocol context. Historical replay available for investigations.

### Counterparty analysis
Identify large holders, frequent counterparties, and unusual flow patterns. Address labeling for known entities, exchanges, and protocols.

### Sanctions screening
Cross-reference addresses against OFAC SDN and other sanctions lists. Configurable screening rules with alert workflows.

### Audit-ready exports
Every data point carries full lineage back to its source ledger. CSV, PDF, and API exports formatted for regulatory submissions.

---

## How it works

Three-step visual:

1. **Connect.** We provide secure access to the Obsrvr Compliance dashboard and APIs. No infrastructure for your team to operate.
2. **Monitor.** Real-time alerts on flow patterns you define. Dashboards for daily oversight. Historical queries for investigations.
3. **Export.** Audit-ready reports and raw data exports at any time, formatted for internal review or regulatory submission.

---

## Why Obsrvr for compliance

Three differentiators:

### Stellar-native depth
Generalist blockchain analytics tools treat Stellar as a footnote. Obsrvr is built on Stellar and understands Soroban, SEP-41, CAP-67, and the specific patterns stablecoin issuers on Stellar actually need.

### Complete lineage
Every row in every export traces back to a specific ledger, transaction, and operation. No black-box analytics. Your audit team can verify any conclusion.

### Direct data access
Unlike hosted-only competitors, Obsrvr offers options for direct SQL access to the underlying data, so your team can run custom queries your vendor can't.

---

## Case study placeholder

[When stablecoinflow data sells: swap in a real customer story here. Until then, lead with capabilities.]

---

## CTA

**See what your stablecoin exposure looks like on Stellar.**

Compliance demos are scheduled in 30-minute blocks. We'll walk through your specific assets, show you the dashboard, and discuss pricing.

[ Request a demo ]

---

---

# /platform

## Hero

**The Obsrvr data platform.**

Every Obsrvr product — Prism, the APIs, the compliance tools — is built on a single data platform that ingests every Stellar ledger, decodes every Soroban event, and maintains canonical tables for everything on-chain.

[ View technical architecture ]  [ Read the Lake whitepaper ]

---

## Why a platform

Two paragraphs of context:

Building on Stellar today means deciding whether to run your own indexing infrastructure. Most teams underestimate the cost. XDR decoding, Soroban event parsing, full-history backfill, schema evolution, operational monitoring — the work is real, and it distracts from your actual product.

Obsrvr built the platform so you don't have to. Every ledger, every event, every contract call — ingested, decoded, normalized, and delivered through APIs that work like any other production data service.

---

## Architecture

High-level diagram + four explanatory blocks. This is where you *can* use bronze/silver/gold — but frame it for an architect-audience, not a compliance buyer.

### Real-time ingestion
Stellar ledgers ingested within seconds of close. Galexie-backed cold storage for historical backfill. Every Soroban event decoded from XDR at ingestion time, so you never see raw bytes.

### Canonical data models
Structured tables for accounts, transactions, operations, token transfers, contract events, and more. Unified across classic and Soroban. Schema versions tracked explicitly.

### Semantic enrichment
Cross-contract swap detection, protocol tagging, address labeling, and event deduplication. The hard work of turning events into meaning, done once, available everywhere.

### Analytics-ready delivery
SQL-queryable via DuckLake. REST APIs for applications. MCP server for agentic workflows. Parquet exports for data teams.

---

## What this enables

Two-column:

### For builders
Ship features in days, not quarters. Stop writing XDR decoders. Stop running Horizon. Stop debugging ingestion failures. Focus on your product.

### For operators
Predictable costs. SLA-backed availability. Documented schemas. Versioned APIs. The kind of data infrastructure enterprise teams expect.

---

## Open source

**The core is open.**

nebu and flowctl are open-source and freely available. Self-host as much as you want. Pay only for the managed platform, the compliance products, and the hosted APIs.

Links out to GitHub repos.

---

## Technical documentation

Link band to docs, architecture, schema reference.

---

---

# /customers

Simple layout. Three customer stories as full blocks (expand each beyond the homepage snippets), with quote, metric, logo, and "read full story" link.

Reserve space for future logos: "Join these teams building on Obsrvr" with a contact CTA at the bottom.

---

---

# /pricing

Stripe-style transparent pricing page. The four tiers from /products/apis, plus the nodes pricing, plus contact-sales for compliance and enterprise.

| | Launch | Data Access | Managed | BYOC Managed |
|---|---|---|---|---|
| Monthly | ~$99 + usage | $1,800 flat | $5,500 flat | $3,500 + infra |
| API calls | Metered | Unlimited | Unlimited | Unlimited |
| Custom processors | — | Build your own | 2-3 included | Build your own |
| Support | Community | Business hours | Priority | Priority |
| SLA | — | 99.5% | 99.9% | 99.9% |

Separate section for Nodes:

| Service | Monthly |
|---|---|
| Dedicated RPC | $799 |
| Dedicated Horizon | $1,499 |
| Validator Quorum | $1,499 |
| Complete Stack | $3,299 |
| Validator Maintenance-only | $599 |

Compliance pricing: "Contact sales. Compliance plans are priced based on data volume and required features."

---

---

# /company

Short, confident. Founder story. Based in Ohio. SCF-funded. Meridian speaker. Mission: make Stellar's data layer production-grade.

No team page until you have a team. No advisor inflation.

---

---

# /contact

Split the form by buyer type. Dropdown or radio:

- I'm building a wallet, explorer, or developer tool → routes to API team
- I'm running a protocol or analytics team → routes to platform team
- I'm at a financial services or compliance team → routes to compliance team
- I'm interested in partnerships or press → routes to you directly

Each path shows a short form (name, email, company, what you're building) and sets expectations for response time.

---

---

# Implementation notes

## What to build first

Week 1: Homepage + /products/apis + /contact. This is the minimum viable new site. Ship it, kill the current homepage.

Week 2: /products/prism. Link to the existing prism.withobsrvr.com. Add the example comparison block.

Week 3: /platform + /customers. These convert skeptical technical buyers.

Week 4-6: /products/compliance. This is the longest build because it needs case study reference material and dashboard screenshots that don't exist yet. Start gathering the material now; launch when ready.

## Voice and style rules

- Every page headline is a declarative sentence, not a noun phrase. "Structured data infrastructure for Stellar" not "Stellar Data Infrastructure."
- Every feature grid uses concrete verbs. "Track every stablecoin transfer" not "Comprehensive monitoring capabilities."
- Numbers are only used when defensible. "<10s latency" is fine because it's measured. "50% faster" is not, because faster than what?
- Second person ("you") for reader-facing copy. First person plural ("we") sparingly, for the platform story.
- No emojis anywhere. No terminal aesthetics. This is enterprise software.
- Customer quotes use first name + role + company. Always attributed.

## What's deliberately absent

- No "powered by AI" language. The MCP story is mentioned in context, not as a banner feature.
- No "revolutionary" or "next-generation" claims.
- No bronze/silver/gold on any customer-facing page. That vocabulary lives in /platform at most, and only in the architect-audience section.
- No pricing on the homepage. Pricing lives on /pricing. The homepage focuses on value and outcomes.
- No logo wall without real customers behind it. Three real customers beats fifteen fake logos.

## Design direction (for whoever builds this)

- Stripe's visual language: lots of whitespace, generous typography, one-color accents against near-white backgrounds
- Coral `#ff7f50` can stay as the Obsrvr accent color (it matches the nebu brand identity and gives continuity across properties)
- Every page has clear primary/secondary CTAs at the top and the bottom
- Tables for pricing. Cards for segments. Code blocks for API examples. No decorative gradients, no animated backgrounds, no three.js
