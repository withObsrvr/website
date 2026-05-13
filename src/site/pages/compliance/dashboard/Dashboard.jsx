/* global React */
import { DashboardSidebar } from "./DashboardSidebar.jsx";
import { DashboardTopbar } from "./DashboardTopbar.jsx";
import { KpiGrid } from "./KpiGrid.jsx";
import { FlowOverview } from "./FlowOverview.jsx";
import { FlaggedQueue } from "./FlaggedQueue.jsx";

export function Dashboard() {
  return (
    <div className="compd">
      <div className="compd-shell">
        <DashboardSidebar />
        <div className="compd-main">
          <DashboardTopbar />
          <KpiGrid />
          <FlowOverview />
          <FlaggedQueue />
        </div>
      </div>
    </div>
  );
}
