/* global React */

export function Compliance() {
  return (
    <section className="section" style={{paddingTop: '48px'}}>
      <div className="container">
        <div style={{background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center'}}>
          <div>
            <span className="eyebrow coral">Compliance pricing</span>
            <h3 style={{fontSize: '26px', fontWeight: 600, letterSpacing: '-0.02em', margin: '16px 0 12px', lineHeight: 1.2}}>Priced by data volume and feature scope.</h3>
            <p style={{color: 'var(--text-2)', fontSize: '15.5px', lineHeight: 1.55, margin: 0, maxWidth: '460px'}}>
              Compliance plans include dashboards, sanctions screening, counterparty analysis, and audit-ready exports. Scoped to your assets and required integrations.
            </p>
          </div>
          <div style={{display: 'flex', gap: '12px', justifyContent: 'flex-end', flexWrap: 'wrap'}}>
            <a href="/compliance" className="btn btn-secondary">See features</a>
            <a href="#contact" className="btn btn-primary">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}

