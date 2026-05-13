/* global React */
import { kpis } from "./data.js";

export function KpiGrid() {
  return (
    <div className="compd-kpis">
      {kpis.map((kpi) => (
        <div className={"compd-kpi" + (kpi.className ? ` ${kpi.className}` : "")} key={kpi.label}>
          <div className="k">{kpi.label}</div>
          <div className="v">{kpi.value}</div>
          <div className={"d " + kpi.deltaClassName}>{kpi.delta}</div>
          <div className="spark">
            <svg viewBox="0 0 80 24" preserveAspectRatio="none"><path d={kpi.sparkPath} fill="none" stroke={kpi.stroke} strokeWidth="1.3"/></svg>
          </div>
        </div>
      ))}
    </div>
  );
}
