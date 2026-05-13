/* global React */

export function Tiers() {
  return (
    <section className="section" style={{paddingTop: '80px'}}>
      <div className="container">
        <div className="tier-grid">
          <div className="tier">
            <h3>Launch</h3>
            <p className="sub">Pay-as-you-go for early builders and prototypes.</p>
            <div className="price">~$99<span className="per">base + metered usage</span></div>
            <ul>
              <li><b>Metered</b> API calls</li>
              <li>Community support</li>
              <li>Shared infrastructure</li>
              <li>All three APIs included</li>
            </ul>
            <a href="#contact" className="btn btn-secondary">Start building</a>
          </div>

          <div className="tier">
            <h3>Data Access</h3>
            <p className="sub">Flat rate with direct SQL access to the lake.</p>
            <div className="price">$1,800<span className="per">per month</span></div>
            <ul>
              <li><b>Unlimited</b> API calls</li>
              <li>Direct SQL via DuckLake</li>
              <li>Business-hours support</li>
              <li>99.5% SLA</li>
            </ul>
            <a href="#contact" className="btn btn-secondary">Contact sales</a>
          </div>

          <div className="tier featured">
            <span className="flag">Recommended</span>
            <h3>Managed</h3>
            <p className="sub">Obsrvr builds and maintains custom processors for you.</p>
            <div className="price">$5,500<span className="per">per month</span></div>
            <ul>
              <li><b>Unlimited</b> API calls</li>
              <li><b>2–3 custom processors</b> built by Obsrvr</li>
              <li>Priority support</li>
              <li>99.9% SLA</li>
            </ul>
            <a href="#contact" className="btn btn-primary">Contact sales</a>
          </div>

          <div className="tier">
            <h3>BYOC Managed</h3>
            <p className="sub">Run in your own cloud. We operate it.</p>
            <div className="price">$3,500<span className="per">+ infrastructure costs</span></div>
            <ul>
              <li><b>Unlimited</b> API calls</li>
              <li>Your cloud, our operators</li>
              <li>Priority support</li>
              <li>99.9% SLA</li>
            </ul>
            <a href="#contact" className="btn btn-secondary">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  );
}

