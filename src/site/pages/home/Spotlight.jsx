/* global React */

export function Spotlight() {
  return (
    <section className="section" style={{background: 'var(--bg-card)'}} id="prism" data-screen-label="04 Prism">
      <div className="container">
        <div className="spotlight-grid">
          <div className="spotlight-copy">
            <span className="eyebrow coral">Product spotlight · Prism</span>
            <h2 className="h2">The Soroban-first block explorer.</h2>
            <p>
              Prism makes Stellar and Soroban transactions human-readable. Accounts, contracts, CAP-67 events, SEP-41 tokens, and cross-contract interactions — all in one place. Powered by the same data platform that runs every Obsrvr API.
            </p>
            <div className="spotlight-quote">
              <span className="light">Transaction ABC123… — read as:</span>
              <b>Alice (GABC…) swapped 100 USDC for 412 XLM on Soroswap at 14:32 UTC.</b>
            </div>
            <div style={{marginTop: '32px', display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
              <a href="https://prism.withobsrvr.com" className="btn btn-secondary">Open Prism ↗</a>
              <a href="/apis" className="btn btn-tertiary" style={{padding: '12px 0'}}>Inspect the API <span className="arrow">→</span></a>
            </div>
          </div>
          <PrismMock />
        </div>
      </div>
    </section>
  );
}

function PrismMock() {
  return (
    <div className="prism-mock">
      <div className="prism-top">
        <span className="prism-dot"></span>
        <span className="prism-dot"></span>
        <span className="prism-dot live"></span>
        <div className="prism-url">prism.withobsrvr.com/tx/abc123…9f4e</div>
      </div>
      <div className="prism-body">
        <span className="prism-status">
          <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="3" fill="currentColor"/></svg>
          Confirmed · ledger 62,551,406
        </span>
        <div className="prism-title">
          Alice swapped <b>100 USDC</b> for <b>412 XLM</b> on Soroswap.
        </div>
        <div className="prism-sub">2026-04-20 · 14:32:04 UTC · confidence 0.98</div>
        <div className="prism-meta">
          <div className="cell">
            <div className="k">Actor</div>
            <div className="v">GABC…7F9A</div>
          </div>
          <div className="cell">
            <div className="k">Protocol</div>
            <div className="v coral">Soroswap</div>
          </div>
          <div className="cell">
            <div className="k">Gas</div>
            <div className="v">0.0041 XLM</div>
          </div>
        </div>
        <div className="prism-flow">
          <span className="addr">GABC…7F9A</span>
          <span className="amt">100 USDC</span>
          <span className="arrow-line"></span>
          <span className="amt">412 XLM</span>
          <span className="addr">CCDC…4E21</span>
        </div>
      </div>
    </div>
  );
}
