/* global React */

export function Audiences() {
  return (
    <section className="section" style={{background: 'var(--bg-card)'}}>
      <div className="container">
        <div style={{maxWidth: '680px'}}>
          <span className="eyebrow">Who uses Prism</span>
          <h2 className="h2" style={{marginTop: '16px'}}>Built for two audiences.</h2>
        </div>
        <div className="audiences">
          <div className="audience">
            <span className="eyebrow coral">For developers</span>
            <h3>Debug what you can't otherwise see.</h3>
            <p>Understand contract behavior. Find the right function signature without reading XDR. Inspect cross-contract flows. Every raw byte is one click away when you need it.</p>
          </div>
          <div className="audience">
            <span className="eyebrow coral">For users</span>
            <h3>See what actually happened.</h3>
            <p>When you swap, send, or mint, Prism tells you what happened in plain language — without learning Stellar's internals. Share a link; your counterparty sees the same clear story.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

