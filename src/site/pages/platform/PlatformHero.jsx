/* global React */

export function PlatformHero() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">Platform</span>
        <h1>The data backbone for Stellar.</h1>
        <p className="lead">
          One ingestion pipeline. One canonical schema. One semantic layer. Every Obsrvr product — Prism, APIs, Compliance — reads from the same platform. So do your dashboards, your pipelines, your agents.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Request access</a>
          <a href="#arch" className="btn btn-secondary">See the architecture</a>
        </div>
        <div className="plat-hero-meta">
          <div><span className="k">Latency</span><span className="v">&lt;10s ledger-to-row</span></div>
          <div><span className="k">History</span><span className="v">Full mainnet, testnet</span></div>
          <div><span className="k">Access</span><span className="v">SQL · REST · MCP · nebu</span></div>
          <div><span className="k">Deploy</span><span className="v">Managed · BYOC · Self-host</span></div>
        </div>
      </div>
    </section>
  );
}

