/* global React */
import { counterparties } from "./data.js";
import { VolumeChart } from "./VolumeChart.jsx";

export function FlowOverview() {
  return (
    <div className="compd-grid">
      <div className="compd-chart">
        <div className="compd-card-head">
          <div>
            <h5>USDC inflows vs outflows</h5>
            <span className="sub">7d · per-hour · Obsrvr-derived · lineage verified</span>
          </div>
          <div className="compd-legend">
            <span><i className="dot teal"></i>Inflow</span>
            <span><i className="dot coral"></i>Outflow</span>
            <span><i className="dot danger"></i>Flagged</span>
          </div>
        </div>
        <VolumeChart />
      </div>

      <div className="compd-flow">
        <div className="compd-card-head">
          <div>
            <h5>Top counterparties</h5>
            <span className="sub">by 7d gross flow · issuer perspective</span>
          </div>
        </div>
        <div className="compd-flow-list">
          {counterparties.map((c) => (
            <div className="compd-flow-row" key={c.name}>
              <div className="compd-flow-meta">
                <span className="nm">{c.name}</span>
                <span className="lb">{c.label}</span>
              </div>
              <div className="compd-flow-bar"><span style={{width: c.width + '%', background: c.ok ? 'var(--teal)' : 'var(--accent)'}}></span></div>
              <span className="compd-flow-v">{c.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
