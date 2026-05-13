/* global React */

export function Problem() {
  return (
    <section className="section">
      <div className="container">
        <div style={{maxWidth: '820px'}}>
          <span className="eyebrow">The problem</span>
          <h2 className="h2" style={{marginTop: '16px'}}>Stellar's existing explorers weren't built for Soroban.</h2>
          <p className="lead" style={{marginTop: '20px', maxWidth: '720px'}}>
            Soroban transactions involve contract calls, CAP-67 events, SEP-41 tokens, and multi-step interactions across protocols. Existing explorers show raw event bytes. Developers, wallets, and users need to see what actually happened.
          </p>
        </div>
      </div>
    </section>
  );
}

