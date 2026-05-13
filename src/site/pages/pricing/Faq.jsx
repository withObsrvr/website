/* global React */

export function Faq() {
  const items = [
    { q: "What's the difference between Data Access and Managed?", a: "Data Access gives you the full lake and unlimited APIs — you build custom processors yourself. Managed adds 2–3 custom processors our team builds and maintains, plus priority support." },
    { q: "Can I switch tiers as we scale?", a: "Yes. Launch → Data Access → Managed is a smooth upgrade path. Usage migrates with you; the API surface doesn't change." },
    { q: "How does BYOC Managed work?", a: "You own the cloud account and pay infrastructure costs directly to AWS or GCP. We deploy and operate Obsrvr inside it. Your data never leaves your perimeter." },
    { q: "Is the open source platform free forever?", a: "Yes. nebu and flowctl are MIT-licensed and will always be free to self-host. You pay us only when you want us to run it." },
    { q: "Do you offer annual pricing?", a: "Annual commits get ~15% off on Data Access and Managed tiers. Contact sales for details." },
  ];
  return (
    <section className="pricing-faq">
      <div className="container">
        <div style={{maxWidth: '680px'}}>
          <span className="eyebrow">FAQ</span>
          <h2 className="h2" style={{marginTop: '16px'}}>Common questions.</h2>
        </div>
        <div className="faq-grid">
          <p className="lead">Still have questions? The team answers enterprise-pricing questions in under a business day.</p>
          <div>
            {items.map((it, i) => (
              <div className="faq-item" key={i}>
                <h4>{it.q}</h4>
                <p>{it.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

