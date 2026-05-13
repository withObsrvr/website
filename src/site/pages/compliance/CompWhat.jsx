/* global React */
import { CapabilityGrid } from "./CapabilityGrid.jsx";
import { Dashboard } from "./dashboard/Dashboard.jsx";

export function CompWhat() {
  return (
    <section className="section" style={{background: 'var(--bg-card)'}}>
      <div className="container">
        <div style={{maxWidth: '680px', marginBottom: '48px'}}>
          <span className="eyebrow">What you get</span>
          <h2 className="h2" style={{marginTop: '16px'}}>A dashboard, an API, and every row traced back to its ledger.</h2>
        </div>
        <Dashboard />
        <CapabilityGrid />
      </div>
    </section>
  );
}

