/* global React */

export function PlatformPrinciples() {
  const items = [
    {
      num: "01",
      t: "Decode once, query forever.",
      b: "Every Stellar event is decoded from XDR at ingestion and written to canonical tables. Your queries never parse binary — they return typed rows.",
    },
    {
      num: "02",
      t: "Lineage is not optional.",
      b: "Every row carries the ledger, operation, and transaction that produced it. Compliance teams trace findings to source. Engineers debug in production.",
    },
    {
      num: "03",
      t: "One schema for classic and Soroban.",
      b: "Payments, SAC, SEP-41, contract events, classic trustlines — all normalized. No conditionals in your application code.",
    },
    {
      num: "04",
      t: "Semantic layer lives with the data.",
      b: "Interpretation, protocol tagging, enrichment — applied at the platform, not in your app. Every surface reads the same truth.",
    },
    {
      num: "05",
      t: "Open where it matters.",
      b: "nebu and flowctl are MIT-licensed. Self-host the ingestion pipeline if you need to. The canonical layer and semantic services are managed.",
    },
    {
      num: "06",
      t: "Deploy where your data has to live.",
      b: "Managed, bring-your-own-cloud, or fully self-hosted. Compliance buyers choose BYOC; wallets choose managed; everyone reads the same API.",
    },
  ];
  return (
    <section className="section" style={{background: 'var(--bg-card)'}}>
      <div className="container">
        <div style={{maxWidth: '680px', marginBottom: '48px'}}>
          <span className="eyebrow">Design principles</span>
          <h2 className="h2" style={{marginTop: '16px'}}>Opinionated where it saves you time.</h2>
        </div>
        <div className="plat-principles">
          {items.map((it) => (
            <div className="plat-principle" key={it.num}>
              <div className="num">{it.num}</div>
              <h4>{it.t}</h4>
              <p>{it.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

