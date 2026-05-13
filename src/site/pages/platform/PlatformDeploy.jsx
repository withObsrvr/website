/* global React */

export function PlatformDeploy() {
  return (
    <section className="section" style={{background: 'var(--bg-card)'}}>
      <div className="container">
        <div style={{maxWidth: '680px', marginBottom: '48px'}}>
          <span className="eyebrow">Deployment</span>
          <h2 className="h2" style={{marginTop: '16px'}}>Three ways to run it.</h2>
        </div>
        <div className="plat-deploy">
          <div className="pd-card">
            <div className="pd-kind">Managed</div>
            <h4>Obsrvr hosts the whole stack.</h4>
            <p>Fastest path to production. You call the APIs and query the lake; we run ingestion, storage, and the semantic layer.</p>
            <ul className="pd-ul">
              <li>Multi-region, 99.9% SLA</li>
              <li>Shared lake, dedicated API keys</li>
              <li>Flat-rate or usage-based pricing</li>
            </ul>
            <span className="pd-fit">Best for wallets, protocols, analytics teams.</span>
          </div>
          <div className="pd-card pd-featured">
            <span className="pd-flag">Most common</span>
            <div className="pd-kind">BYOC</div>
            <h4>Your cloud, our operators.</h4>
            <p>Obsrvr deployed into your AWS or GCP account. Your data never crosses our perimeter. You pay infrastructure costs directly to the provider.</p>
            <ul className="pd-ul">
              <li>Dedicated lake in your VPC</li>
              <li>SSO, audit logs, custom retention</li>
              <li>99.9% SLA, Obsrvr on-call</li>
            </ul>
            <span className="pd-fit">Best for compliance, financial services, regulated issuers.</span>
          </div>
          <div className="pd-card">
            <div className="pd-kind">Self-host</div>
            <h4>Run nebu and flowctl yourself.</h4>
            <p>The ingestion pipeline is MIT-licensed. Pair it with your own warehouse. Skip managed services entirely — or upgrade when you need the semantic layer.</p>
            <ul className="pd-ul">
              <li>nebu + flowctl + your warehouse</li>
              <li>Community support on GitHub</li>
              <li>No Obsrvr contract required</li>
            </ul>
            <span className="pd-fit">Best for infrastructure teams, forks, prototypes.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

