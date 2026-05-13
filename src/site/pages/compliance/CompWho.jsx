/* global React */

export function CompWho() {
  return (
    <div className="container comp-who">
      <div>
        <span className="eyebrow">Built for financial services</span>
        <h2 className="h2" style={{margin: '20px 0 16px'}}>Compliance-first, not developer-first.</h2>
        <p className="lead">
          Obsrvr Compliance speaks the vocabulary of AML officers, not engineers. The workflows, exports, and alerts are built for teams with regulatory oversight.
        </p>
      </div>
      <div className="comp-who-list">
        {[
          "AML and compliance officers at stablecoin issuers",
          "On-ramp and exchange compliance teams operating on Stellar",
          "Financial services firms with Stellar exposure needing SAR-ready audit trails",
          "Regulators and analysts studying Stellar's stablecoin activity",
        ].map((t, i) => (
          <div className="comp-who-item" key={i}>
            <span className="check">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 6.5L5 8.5 9.5 4"/></svg>
            </span>
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

