/* global React */

export function DashboardTopbar() {
  return (
    <div className="compd-topbar">
      <div className="compd-crumb">
        <span>Monitoring</span>
        <span className="sep">/</span>
        <span>Overview</span>
        <span className="sep">/</span>
        <span className="active">USDC</span>
      </div>
      <div className="compd-tools">
        <div className="compd-range">
          <button>24h</button>
          <button className="active">7d</button>
          <button>30d</button>
          <button>90d</button>
          <button>YTD</button>
        </div>
        <button className="compd-export">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6 1v7M3 5l3 3 3-3M2 10h8"/></svg>
          Export
        </button>
        <span className="compd-live"><span className="pulse"></span>Streaming · seq 62,551,406</span>
      </div>
    </div>
  );
}
