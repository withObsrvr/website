/* global React */

export function ApiBenefits() {
  return (
    <section className="section" style={{background: 'var(--bg-card)'}}>
      <div className="container">
        <div style={{maxWidth: '680px'}}>
          <span className="eyebrow">Why Obsrvr APIs</span>
          <h2 className="h2" style={{marginTop: '16px'}}>Production-grade from the first request.</h2>
        </div>
        <div className="benefits">
          <div className="benefit">
            <div className="num">01</div>
            <h4>Decoded at rest</h4>
            <p>No XDR in our responses. Topics, data, and arguments are already parsed.</p>
          </div>
          <div className="benefit">
            <div className="num">02</div>
            <h4>Unified classic + Soroban</h4>
            <p>One API for SAC, SEP-41, and classic assets. No special cases in your code.</p>
          </div>
          <div className="benefit">
            <div className="num">03</div>
            <h4>Production SLAs</h4>
            <p>&lt;10s latency from ledger close to response. Monitored uptime, versioned schemas.</p>
          </div>
          <div className="benefit">
            <div className="num">04</div>
            <h4>Built for integration</h4>
            <p>OpenAPI specs, SDKs, and an MCP server for agentic use cases.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

