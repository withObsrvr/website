/* global React */
import { sidebarSections, sidebarUser } from "./data.js";

function SidebarItem({ item }) {
  if (item.asset) {
    return <a className="compd-nav-item asset"><span className="as">{item.asset}</span>{item.label}</a>;
  }
  return (
    <a className={"compd-nav-item" + (item.active ? " active" : "")}>
      <span className="i">{item.icon}</span>{item.label} {item.badge && <span className="b">{item.badge}</span>}
    </a>
  );
}

export function DashboardSidebar() {
  return (
    <aside className="compd-side">
      <div className="compd-brand">
        <span className="mark" aria-hidden="true">
          <img src="/static/site/assets/obsrvr-mark.svg" alt="" />
        </span>
        <span>obsrvr</span>
        <span className="compd-brand-sub">compliance</span>
      </div>
      <div className="compd-nav">
        {sidebarSections.map((section) => (
          <React.Fragment key={section.label}>
            <div className="compd-nav-label">{section.label}</div>
            {section.items.map((item) => <SidebarItem item={item} key={item.asset || item.label} />)}
          </React.Fragment>
        ))}
      </div>
      <div className="compd-side-foot">
        <div className="compd-user">
          <span className="av">{sidebarUser.initials}</span>
          <div>
            <div className="nm">{sidebarUser.name}</div>
            <div className="rl">{sidebarUser.role}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
