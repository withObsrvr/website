/* global React */

export function CompWhy() {
  return (
    <section className="section" style={{background: 'var(--bg-card)'}}>
      <div className="container">
        <div style={{maxWidth: '680px'}}>
          <span className="eyebrow">Why Obsrvr for compliance</span>
          <h2 className="h2" style={{marginTop: '16px'}}>Stellar-native depth. Complete lineage. Direct access.</h2>
        </div>
        <div className="differs">
          <div className="differ">
            <span className="eyebrow coral">01 · Stellar-native</span>
            <h4>Built for Stellar, not retrofitted.</h4>
            <p>Generalist blockchain analytics treat Stellar as a footnote. Obsrvr understands Soroban, SEP-41, CAP-67, and the specific patterns issuers actually face.</p>
          </div>
          <div className="differ">
            <span className="eyebrow coral">02 · Complete lineage</span>
            <h4>No black-box analytics.</h4>
            <p>Every row in every export traces back to a specific ledger, transaction, and operation. Your audit team can verify any conclusion.</p>
          </div>
          <div className="differ">
            <span className="eyebrow coral">03 · Direct access</span>
            <h4>Run the queries your vendor can't.</h4>
            <p>Unlike hosted-only competitors, Obsrvr offers direct SQL access to the underlying data. Bring your own analyst. Answer your own questions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

