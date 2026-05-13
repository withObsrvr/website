/* global React */

export function PrismHero() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="prism-hero-grid">
          <div>
            <span className="eyebrow coral">Product · Prism</span>
            <h1 style={{marginTop: '20px'}}>The Soroban-first block explorer for Stellar.</h1>
            <p className="lead">
              Human-readable transactions, contract-level visibility, and full Soroban history — in one place. Built on the Obsrvr platform, powered by the same APIs you can integrate directly.
            </p>
            <div className="hero-cta">
              <a href="https://prism.withobsrvr.com" className="btn btn-primary">Open Prism ↗</a>
              <a href="/apis" className="btn btn-secondary">Inspect the APIs</a>
            </div>
            <div className="prism-hero-note">
              <span className="dot"></span>
              <span>Live at prism.withobsrvr.com · 5-second heartbeat</span>
            </div>
          </div>
          <AskSearch />
        </div>
      </div>
    </section>
  );
}

function AskSearch() {
  return (
    <div>
      <div className="asksearch">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" style={{color: 'var(--text-3)'}}>
          <circle cx="8" cy="8" r="5"/>
          <path d="M12 12l4 4"/>
        </svg>
        <span className="prompt">What brings you here?</span>
        <span className="kbd">⌘K</span>
      </div>
      <div className="ask-suggestions">
        <span className="ask-chip">tx abc123…</span>
        <span className="ask-chip">contract CCDC…</span>
        <span className="ask-chip">address GABC…</span>
        <span className="ask-chip">swap USDC</span>
        <span className="ask-chip">mint SEP-41</span>
      </div>
      <div style={{marginTop: '28px', padding: '20px', background: '#fff', border: '1px solid var(--border)', borderRadius: '10px'}}>
        <div style={{fontFamily: 'var(--ff-mono)', fontSize: '10.5px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '12px'}}>Suggested</div>
        <div style={{fontSize: '14.5px', color: 'var(--text)', lineHeight: 1.5, marginBottom: '14px'}}>
          <b>Transaction abc123…9f4e</b> — Alice swapped <b style={{color: 'var(--accent-ink)'}}>100 USDC</b> for <b style={{color: 'var(--accent-ink)'}}>412 XLM</b> on Soroswap.
        </div>
        <div style={{display: 'flex', gap: '12px', fontFamily: 'var(--ff-mono)', fontSize: '11.5px', color: 'var(--text-3)', paddingTop: '12px', borderTop: '1px dashed var(--border)'}}>
          <span>ledger 62,551,406</span>
          <span>·</span>
          <span>confidence 0.98</span>
          <span>·</span>
          <span>14:32 UTC</span>
        </div>
      </div>
    </div>
  );
}

