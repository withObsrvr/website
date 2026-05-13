/* global React */

export function Segments({ segmentStyle }) {
  const segments = [
    {
      key: "apis",
      eyebrow: "For wallets, explorers, developers",
      title: "Turn raw transactions into readable context.",
      body: "The Transaction Interpretation API decodes Soroban activity into human-readable summaries. A raw contract invocation becomes 'Alice swapped 100 USDC for 412 XLM on Soroswap.' Ship faster than building your own decoder.",
      cta: "Explore APIs",
      href: "/apis",
      artifact: <SegArtifactApi />,
    },
    {
      key: "platform",
      eyebrow: "For protocols and analytics",
      title: "Stop running your own indexers.",
      body: "Obsrvr Lake delivers structured Stellar data as SQL-queryable tables and APIs. Token transfers, contract events, enriched operations — all maintained, all versioned, all production-grade.",
      cta: "Explore the Platform",
      href: "/platform",
      artifact: <SegArtifactPlatform />,
    },
    {
      key: "compliance",
      eyebrow: "For compliance and financial services",
      title: "Audit-ready stablecoin flow intelligence.",
      body: "Track USDC, EURC, and issuer-controlled assets across Stellar with full lineage, counterparty analysis, and sanctions screening. Built for AML officers at issuers, exchanges, and on-ramps.",
      cta: "Explore Compliance",
      href: "/compliance",
      artifact: <SegArtifactCompliance />,
    },
  ];
  return (
    <section className={"section segments seg-style-" + segmentStyle} id="products" data-screen-label="03 Segments">
      <div className="container">
        <div className="segments-head">
          <div>
            <div className="eyebrow" style={{marginBottom: '20px'}}>Products</div>
            <h2 className="h2">Built for three audiences who need the same foundation.</h2>
          </div>
          <p className="lead">
            Every Obsrvr product reads from the same canonical data layer. Pick the entry point that fits what you're building — they all share one platform underneath.
          </p>
        </div>
        <div className="segments-grid">
          {segments.map((s) => <SegCard key={s.key} {...s} />)}
        </div>
      </div>
    </section>
  );
}

function SegCard({ eyebrow, title, body, cta, href, artifact }) {
  return (
    <a href={href} className="seg-card">
      <div className="seg-artifact">{artifact}</div>
      <div className="seg-body">
        <div className="seg-eyebrow">{eyebrow}</div>
        <h3>{title}</h3>
        <p>{body}</p>
        <span className="cta">{cta} <span className="arrow">→</span></span>
      </div>
    </a>
  );
}

function SegArtifactApi() {
  return (
    <div className="sa sa-api">
      <div className="sa-head">
        <span className="method">GET</span>
        <span className="path">/v1/transactions/<span className="m">abc…9f4e</span>/interpret</span>
      </div>
      <pre><code>
<span className="p">{"{"}</span>{"\n"}
{"  "}<span className="k">"summary"</span>: <span className="s">"Alice swapped 100 USDC</span>{"\n"}
{"             "}<span className="s">for 412 XLM on Soroswap"</span>,{"\n"}
{"  "}<span className="k">"action"</span>:   <span className="s">"swap"</span>,{"\n"}
{"  "}<span className="k">"protocol"</span>: <span className="s">"soroswap"</span>,{"\n"}
{"  "}<span className="k">"confidence"</span>: <span className="n">0.98</span>{"\n"}
<span className="p">{"}"}</span>
      </code></pre>
    </div>
  );
}

function SegArtifactPlatform() {
  return (
    <div className="sa sa-platform">
      <div className="sa-head">
        <span className="tbl">obsrvr.lake.token_transfers</span>
        <span className="rows">4 rows · 22.1B total</span>
      </div>
      <div className="sa-table">
        <div className="sa-tr sa-th">
          <span>ledger</span><span>asset</span><span>amount</span><span>protocol</span>
        </div>
        <div className="sa-tr">
          <span className="mono">55812406</span><span>USDC</span><span className="mono">100.00</span><span className="pill">soroswap</span>
        </div>
        <div className="sa-tr">
          <span className="mono">55812406</span><span>XLM</span><span className="mono">412.00</span><span className="pill">soroswap</span>
        </div>
        <div className="sa-tr">
          <span className="mono">55812404</span><span>EURC</span><span className="mono">8,200.0</span><span className="pill muted">classic</span>
        </div>
        <div className="sa-tr">
          <span className="mono">55812401</span><span>yUSDC</span><span className="mono">450.00</span><span className="pill">blend</span>
        </div>
      </div>
    </div>
  );
}

function SegArtifactCompliance() {
  return (
    <div className="sa sa-comp">
      <div className="sa-head">
        <span>USDC · 24h flow</span>
        <span className="status"><span className="dot"></span>2 flags</span>
      </div>
      <div className="sa-spark">
        <svg viewBox="0 0 200 56" preserveAspectRatio="none">
          <defs>
            <linearGradient id="sparkGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22"/>
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,40 L18,34 L36,38 L54,28 L72,30 L90,22 L108,26 L126,18 L144,24 L162,12 L180,18 L200,14 L200,56 L0,56 Z" fill="url(#sparkGrad)"/>
          <path d="M0,40 L18,34 L36,38 L54,28 L72,30 L90,22 L108,26 L126,18 L144,24 L162,12 L180,18 L200,14" fill="none" stroke="var(--accent-ink)" strokeWidth="1.5"/>
          <circle cx="162" cy="12" r="2.5" fill="var(--accent-ink)"/>
        </svg>
      </div>
      <div className="sa-flags">
        <div className="sa-flag">
          <span className="sev">HIGH</span>
          <span className="msg">OFAC-listed addr → USDC issuer · 120k</span>
        </div>
        <div className="sa-flag medium">
          <span className="sev">MED</span>
          <span className="msg">Velocity anomaly · GCP…A12 · +340%</span>
        </div>
      </div>
    </div>
  );
}
