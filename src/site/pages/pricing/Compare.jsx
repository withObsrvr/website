/* global React */

export function Compare() {
  return (
    <section className="section" style={{paddingTop: 0}}>
      <div className="container">
        <div style={{maxWidth: '680px', marginBottom: '40px'}}>
          <span className="eyebrow">Compare plans</span>
          <h2 className="h2" style={{marginTop: '16px'}}>Pick by scale, not by feature gates.</h2>
        </div>
        <div className="compare">
          <table>
            <thead>
              <tr>
                <th></th>
                <th className="tier-col">Launch</th>
                <th className="tier-col">Data Access</th>
                <th className="tier-col featured">Managed</th>
                <th className="tier-col">BYOC Managed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly</td>
                <td>~$99 + usage</td>
                <td>$1,800</td>
                <td className="featured">$5,500</td>
                <td>$3,500 + infra</td>
              </tr>
              <tr>
                <td>API calls</td>
                <td>Metered</td>
                <td>Unlimited</td>
                <td className="featured">Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Custom processors</td>
                <td>—</td>
                <td>Build your own</td>
                <td className="featured">2–3 included</td>
                <td>Build your own</td>
              </tr>
              <tr>
                <td>Direct SQL access</td>
                <td>—</td>
                <td>DuckLake</td>
                <td className="featured">DuckLake</td>
                <td>DuckLake</td>
              </tr>
              <tr>
                <td>MCP server</td>
                <td>Shared</td>
                <td>Dedicated</td>
                <td className="featured">Dedicated</td>
                <td>Dedicated</td>
              </tr>
              <tr>
                <td>Support</td>
                <td>Community</td>
                <td>Business hours</td>
                <td className="featured">Priority</td>
                <td>Priority</td>
              </tr>
              <tr>
                <td>SLA</td>
                <td>—</td>
                <td>99.5%</td>
                <td className="featured">99.9%</td>
                <td>99.9%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

