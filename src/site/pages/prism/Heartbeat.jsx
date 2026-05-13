/* global React */

export function Heartbeat() {
  return (
    <section className="section">
      <div className="container">
        <div style={{maxWidth: '680px', marginBottom: '40px'}}>
          <span className="eyebrow coral">The homepage</span>
          <h2 className="h2" style={{marginTop: '16px'}}>A 5-second heartbeat of the network.</h2>
          <p className="lead" style={{marginTop: '20px'}}>
            Prism's home shows what just happened on Stellar — classified, filtered, and human-readable. No raw XDR, no topic hashes to decode.
          </p>
        </div>
        <div className="heartbeat">
          <div className="heartbeat-top">
            <span>What just happened · mainnet</span>
            <span style={{color: 'var(--accent-ink)'}}>● live · seq 62,551,406</span>
          </div>
          <div className="heartbeat-pills">
            <span className="heartbeat-pill active">All</span>
            <span className="heartbeat-pill">Swaps</span>
            <span className="heartbeat-pill">Transfers</span>
            <span className="heartbeat-pill">Mints</span>
            <span className="heartbeat-pill">Contract calls</span>
            <span className="heartbeat-pill">CAP-67 events</span>
          </div>
          <div className="heartbeat-grid">
            <div className="hb-card">
              <div className="label">Swap</div>
              <div className="seq">#62,551,406</div>
              <div className="summary">Alice swapped <b>100 USDC</b> for <b>412 XLM</b> on Soroswap.</div>
              <div className="meta"><span>GABC…7F9A</span><span className="ts">14:32:04</span></div>
            </div>
            <div className="hb-card">
              <div className="label">Transfer</div>
              <div className="seq">#62,551,405</div>
              <div className="summary">Classic <b>2,500 USDC</b> moved from treasury to GXZ…C21.</div>
              <div className="meta"><span>GKF…N01</span><span className="ts">14:32:01</span></div>
            </div>
            <div className="hb-card">
              <div className="label">Mint</div>
              <div className="seq">#62,551,404</div>
              <div className="summary">New SEP-41 token minted on CAKZ…8PQ · supply <b>+1,000</b>.</div>
              <div className="meta"><span>CAKZ…8PQ</span><span className="ts">14:31:58</span></div>
            </div>
            <div className="hb-card">
              <div className="label">Contract call</div>
              <div className="seq">#62,551,403</div>
              <div className="summary"><b>add_liquidity</b> to pool CCDC…4E21 · 50K USDC + 206K XLM.</div>
              <div className="meta"><span>G…BB7</span><span className="ts">14:31:55</span></div>
            </div>
            <div className="hb-card">
              <div className="label">Price event</div>
              <div className="seq">#62,551,402</div>
              <div className="summary">Oracle CBZ…77 emitted <b>price_update</b> · XLM 0.243 USD.</div>
              <div className="meta"><span>CBZ…77</span><span className="ts">14:31:52</span></div>
            </div>
            <div className="hb-card">
              <div className="label">Contract TTL</div>
              <div className="seq">#62,551,401</div>
              <div className="summary">Contract CARX…33 renewed storage · <b>30 days</b> extended.</div>
              <div className="meta"><span>CARX…33</span><span className="ts">14:31:49</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

