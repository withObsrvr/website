/* global React */

export function PlatformScale() {
  return (
    <section className="section plat-scale">
      <div className="container">
        <div className="plat-scale-grid">
          <div>
            <span className="eyebrow">Scale</span>
            <h2 className="h2" style={{marginTop: '16px'}}>Operational numbers, not marketing ones.</h2>
            <p className="lead" style={{marginTop: '18px'}}>
              We publish what we actually run. These are steady-state platform characteristics, not peak benchmarks.
            </p>
          </div>
          <div className="plat-scale-stats">
            <div className="pss">
              <div className="pss-num">22.1<span className="unit">B</span></div>
              <div className="pss-k">rows in canonical layer</div>
              <div className="pss-s">across transfers, events, contracts, accounts</div>
            </div>
            <div className="pss">
              <div className="pss-num">4.8<span className="unit">s</span></div>
              <div className="pss-k">median ledger-to-row latency</div>
              <div className="pss-s">measured on mainnet, 7-day window</div>
            </div>
            <div className="pss">
              <div className="pss-num">142<span className="unit">/s</span></div>
              <div className="pss-k">events processed per second</div>
              <div className="pss-s">typical mainnet throughput · peaks to 410/s</div>
            </div>
            <div className="pss">
              <div className="pss-num">99.9<span className="unit">%</span></div>
              <div className="pss-k">API availability SLA</div>
              <div className="pss-s">on Managed and BYOC tiers</div>
            </div>
            <div className="pss">
              <div className="pss-num">6</div>
              <div className="pss-k">canonical tables</div>
              <div className="pss-s">one version of every Stellar primitive</div>
            </div>
            <div className="pss">
              <div className="pss-num">MIT</div>
              <div className="pss-k">ingestion stack license</div>
              <div className="pss-s">nebu and flowctl, self-hostable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

