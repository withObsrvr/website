/* global React */

export function Nodes() {
  return (
    <section className="section" style={{paddingTop: 0}}>
      <div className="container nodes-section">
        <div style={{maxWidth: '680px'}}>
          <span className="eyebrow">Nodes</span>
          <h2 className="h2" style={{marginTop: '16px'}}>Stellar infrastructure, operated.</h2>
          <p className="lead" style={{marginTop: '18px'}}>
            Dedicated Stellar nodes for teams that need isolation, higher rate limits, or validator participation.
          </p>
        </div>
        <div className="nodes-table">
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Monthly</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dedicated RPC<div className="note">Isolated Soroban RPC endpoint</div></td>
                <td className="price-cell">$799</td>
              </tr>
              <tr>
                <td>Dedicated Horizon<div className="note">Isolated Horizon instance with unlimited throughput</div></td>
                <td className="price-cell">$1,499</td>
              </tr>
              <tr>
                <td>Validator Quorum<div className="note">Dedicated validator node with quorum set management</div></td>
                <td className="price-cell">$1,499</td>
              </tr>
              <tr>
                <td>Complete Stack<div className="note">RPC + Horizon + Validator, operated together</div></td>
                <td className="price-cell">$3,299</td>
              </tr>
              <tr>
                <td>Validator Maintenance-only<div className="note">We operate your existing validator</div></td>
                <td className="price-cell">$599</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

