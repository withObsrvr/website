/* global React */

export function Proof() {
  return (
    <section className="proof" data-screen-label="02 Proof">
      <div className="container proof-grid">
        <div className="proof-cell">
          <span className="num">&lt;10<span className="unit">s</span></span>
          <div className="label"><b>Every ledger.</b> Full mainnet and testnet coverage at silver-layer latency.</div>
        </div>
        <div className="proof-cell">
          <span className="num">22<span className="unit">B+</span></span>
          <div className="label"><b>Events indexed.</b> Historical Soroban and classic asset data, queryable via SQL and API.</div>
        </div>
        <div className="proof-cell">
          <span className="num">3<span className="unit">&nbsp;APIs</span></span>
          <div className="label"><b>One platform.</b> Interpretation, Lake, and Compliance — all reading from the same canonical layer.</div>
        </div>
        <div className="proof-cell">
          <span className="num">MIT<span className="unit">&nbsp;core</span></span>
          <div className="label"><b>Open and self-hostable.</b> nebu and flowctl are MIT-licensed. Managed services are paid.</div>
        </div>
      </div>
    </section>
  );
}
