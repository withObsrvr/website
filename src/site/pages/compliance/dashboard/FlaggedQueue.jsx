/* global React */
import { flaggedQueue } from "./data.js";

export function FlaggedQueue() {
  return (
    <div className="compd-queue">
      <div className="compd-card-head">
        <div>
          <h5>Flagged queue</h5>
          <span className="sub">{flaggedQueue.summary}</span>
        </div>
        <div className="compd-filters">
          {flaggedQueue.filters.map((filter, index) => <button className={index === 0 ? "active" : undefined} key={filter}>{filter}</button>)}
        </div>
      </div>
      <div className="compd-table">
        <div className="compd-tr compd-th">
          {flaggedQueue.columns.map((column) => <span className={column === "Amount" ? "r" : undefined} key={column}>{column}</span>)}
        </div>
        {flaggedQueue.rows.map((row) => (
          <div className="compd-tr" key={row.caseId}>
            <span className="mono">{row.caseId}</span>
            <span className="mono">{row.time}</span>
            <span><span className={"sev " + row.severityClass}>{row.severity}</span></span>
            <span>{row.rule}</span>
            <span><span className="addr">{row.address}</span> <span className="ct">{row.context}</span></span>
            <span className="r mono">{row.amount}</span>
            <span><span className={"st " + row.statusClass}>{row.status}</span></span>
          </div>
        ))}
      </div>
    </div>
  );
}
