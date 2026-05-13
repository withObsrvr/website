/* global React */

export function CompHow() {
  return (
    <section className="section">
      <div className="container">
        <div style={{maxWidth: '680px'}}>
          <span className="eyebrow">How it works</span>
          <h2 className="h2" style={{marginTop: '16px'}}>Three steps from access to audit.</h2>
        </div>
        <div className="steps">
          <div className="step">
            <div className="n">Step 01</div>
            <h4>Connect</h4>
            <p>Secure access to the Obsrvr Compliance dashboard and APIs. No infrastructure for your team to operate. SSO on request.</p>
          </div>
          <div className="step">
            <div className="n">Step 02</div>
            <h4>Monitor</h4>
            <p>Real-time alerts on flow patterns you define. Daily-oversight dashboards. Historical queries for investigations and SAR preparation.</p>
          </div>
          <div className="step">
            <div className="n">Step 03</div>
            <h4>Export</h4>
            <p>Audit-ready reports and raw data exports at any time, formatted for internal review or regulatory submission.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

