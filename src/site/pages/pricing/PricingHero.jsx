/* global React */

export function PricingHero() {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="pricing-intro">
          <span className="eyebrow" style={{marginBottom: '20px', display: 'inline-block'}}>Pricing</span>
          <h1>Transparent pricing. No hidden enterprise tiers.</h1>
          <p className="lead" style={{textAlign: 'center'}}>
            Usage-based for early builders. Flat-rate for teams running at scale. Managed plans include processor development. Every tier reads from the same platform.
          </p>
        </div>
      </div>
    </section>
  );
}

