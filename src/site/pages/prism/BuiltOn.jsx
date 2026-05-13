/* global React */

export function BuiltOn() {
  return (
    <section className="section">
      <div className="container">
        <div className="built-on">
          <div>
            <span style={{fontFamily: 'var(--ff-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(237,237,232,0.55)'}}>Built on Obsrvr</span>
            <h3 style={{marginTop: '14px'}}>Every Prism feature is an API underneath.</h3>
            <p>The transaction decoder, contract analytics, and event interpretation that power Prism are all available as standalone APIs. If you want Prism's capabilities inside your own product, start here.</p>
            <div className="cta">
              <a href="/apis" className="btn btn-primary">Explore the APIs</a>
              <a href="/pricing" className="btn btn-outline">See pricing</a>
            </div>
          </div>
          <div className="api-stack-mini">
            <div className="endpoint">
              <span className="verb">GET</span>
              <span className="path">/api/v1/transactions/{'{'}hash{'}'}/interpret</span>
            </div>
            <div className="endpoint">
              <span className="verb">GET</span>
              <span className="path">/api/v1/contracts/{'{'}id{'}'}/analytics</span>
            </div>
            <div className="endpoint">
              <span className="verb">GET</span>
              <span className="path">/api/v1/accounts/{'{'}address{'}'}/transfers</span>
            </div>
            <div className="endpoint">
              <span className="verb">GET</span>
              <span className="path">/api/v1/events?protocol=soroswap</span>
            </div>
            <div className="endpoint">
              <span className="verb">GET</span>
              <span className="path">/api/v1/tokens/{'{'}asset{'}'}/holders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

