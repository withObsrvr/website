/* global React */

export function Features() {
  return (
    <section className="section" style={{background: 'var(--bg-card)'}}>
      <div className="container">
        <div style={{maxWidth: '680px'}}>
          <span className="eyebrow">What Prism does</span>
          <h2 className="h2" style={{marginTop: '16px'}}>Three things, done well.</h2>
        </div>
        <div className="prism-features">
          <div className="prism-feat">
            <div className="icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 9h14M2 5h14M2 13h9"/></svg>
            </div>
            <h4>Readable transactions</h4>
            <p>Every transaction shows a plain-language summary: who acted, what was called, what moved, and which protocol was involved.</p>
          </div>
          <div className="prism-feat">
            <div className="icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="12" height="12" rx="2"/><path d="M7 7h4v4H7z"/></svg>
            </div>
            <h4>Contract intelligence</h4>
            <p>Callers, callees, function usage, and historical activity. Filter by function name, not by topic hash.</p>
          </div>
          <div className="prism-feat">
            <div className="icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="9" cy="9" r="6"/><path d="M9 5v4l2.5 2.5"/></svg>
            </div>
            <h4>Full Soroban history</h4>
            <p>Every Soroban transaction from mainnet launch onward, queryable by address, contract, function, or asset.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

