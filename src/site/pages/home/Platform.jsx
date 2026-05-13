/* global React */

export function Platform() {
  return (
    <section className="section platform" id="platform" data-screen-label="05 Platform">
      <div className="container">
        <div style={{maxWidth: '720px'}}>
          <div className="eyebrow" style={{marginBottom: '20px'}}>Platform</div>
          <h2 className="h2">One platform underneath every product.</h2>
          <p className="lead" style={{marginTop: '20px'}}>
            Obsrvr is the data backbone for Stellar. We ingest every ledger, decode every Soroban event, and maintain canonical tables for accounts, transactions, tokens, and contracts.
          </p>
        </div>
        <div className="platform-grid">
          <div className="platform-features">
            <div className="pf-item">
              <div className="num">01</div>
              <h4>Real-time ingestion</h4>
              <p>Every ledger processed into structured data with &lt;10s latency. Soroban events decoded from XDR at ingestion.</p>
            </div>
            <div className="pf-item">
              <div className="num">02</div>
              <h4>Full history</h4>
              <p>Soroban activity from launch, classic assets from genesis. All queryable today.</p>
            </div>
            <div className="pf-item">
              <div className="num">03</div>
              <h4>Canonical models</h4>
              <p>Normalized, deduplicated, versioned schemas. No raw XDR required.</p>
            </div>
            <div className="pf-item">
              <div className="num">04</div>
              <h4>Lineage built in</h4>
              <p>Every row traceable to its source ledger for compliance and audit.</p>
            </div>
          </div>
          <ArchDiagram />
        </div>
        <div style={{marginTop: '56px'}}>
          <a href="/platform" className="btn btn-tertiary">Learn about the platform <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}

function ArchDiagram() {
  return (
    <div className="arch-diagram">
      <div className="arch-label">Obsrvr data platform</div>
      <div className="arch-section">
        <div className="arch-label" style={{marginBottom: '8px'}}>Surfaces</div>
        <div className="arch-layer">
          <div className="arch-node accent"><div className="t">Prism</div><div className="s">explorer</div></div>
          <div className="arch-node accent"><div className="t">APIs</div><div className="s">REST / MCP</div></div>
          <div className="arch-node accent"><div className="t">Compliance</div><div className="s">dashboard</div></div>
        </div>
      </div>
      <div className="arch-connector"></div>
      <div className="arch-section">
        <div className="arch-label" style={{marginBottom: '8px'}}>Semantic layer</div>
        <div className="arch-layer">
          <div className="arch-node"><div className="t">Interpretation</div><div className="s">tx decoder</div></div>
          <div className="arch-node"><div className="t">Enrichment</div><div className="s">protocol tags</div></div>
          <div className="arch-node"><div className="t">Lineage</div><div className="s">source trace</div></div>
        </div>
      </div>
      <div className="arch-connector"></div>
      <div className="arch-section">
        <div className="arch-label" style={{marginBottom: '8px'}}>Canonical data</div>
        <div className="arch-layer">
          <div className="arch-node"><div className="t">Accounts</div><div className="s">balances</div></div>
          <div className="arch-node"><div className="t">Transactions</div><div className="s">ops / events</div></div>
          <div className="arch-node"><div className="t">Contracts</div><div className="s">SEP-41 / CAP-67</div></div>
        </div>
      </div>
      <div className="arch-connector"></div>
      <div className="arch-section">
        <div className="arch-label" style={{marginBottom: '8px'}}>Ingestion</div>
        <div className="arch-layer" style={{gridTemplateColumns: '1fr'}}>
          <div className="arch-node"><div className="t">Stellar mainnet + testnet</div><div className="s">Galexie cold storage · nebu streaming · XDR decoded at rest</div></div>
        </div>
      </div>
    </div>
  );
}
