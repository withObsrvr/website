/* global React */
import siteContent from "../content/site.json";

const { useEffect, useState } = React;

export function DropdownIcon({ icon }) {
  if (icon === "api") {
    return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 5h10M3 8h10M3 11h6"/></svg>;
  }
  if (icon === "shield") {
    return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 2l5 2v4c0 3-2.5 5-5 6-2.5-1-5-3-5-6V4l5-2z"/></svg>;
  }
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 2l5 3v6l-5 3-5-3V5l5-3z"/></svg>;
}

export function BrandLink({ href = siteContent.brand.href }) {
  return (
    <a href={href} className="brand">
      <span className="brand-mark" aria-hidden="true">
        <img src="/static/site/assets/obsrvr-mark.svg" alt="" />
      </span>
      <span>{siteContent.brand.name}</span>
    </a>
  );
}

export function SiteNav({ active, brandHref = siteContent.brand.href, productHref = "#products", useHomepageProductLinks = false }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle = (key) => active === key ? { color: "var(--text)" } : {};

  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="container nav-inner">
        <BrandLink href={brandHref} />
        <div className="nav-links">
          <div className="dropdown">
            <a href={productHref} style={active === "products" ? { color: "var(--text)" } : {}}>
              {siteContent.nav.productsLabel}
              <svg className="nav-dropdown-caret" viewBox="0 0 10 10"><path d="M2 4l3 3 3-3" /></svg>
            </a>
            <div className="dropdown-panel">
              {siteContent.nav.products.map((item) => (
                <a className="dropdown-item" href={useHomepageProductLinks ? (item.homepageHref || item.href) : item.href} key={item.title}>
                  <div className="dropdown-item-icon"><DropdownIcon icon={item.icon} /></div>
                  <div>
                    <div className="dropdown-item-title">{item.title}</div>
                    <div className="dropdown-item-desc">{item.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          {siteContent.nav.links.map((item) => (
            <a href={item.href} style={linkStyle(item.activeKey)} key={item.title}>{item.title}</a>
          ))}
        </div>
        <div className="nav-cta">
          {siteContent.nav.actions.map((item) => (
            <a href={item.href} className={item.className} style={item.style === "small" ? { fontSize: "14.5px" } : undefined} key={item.title}>{item.title}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter({ brandHref = siteContent.brand.href }) {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <BrandLink href={brandHref} />
            <p>{siteContent.brand.description}</p>
          </div>
          {siteContent.footer.columns.map((column) => (
            <div className="foot-col" key={column.title}>
              <h5>{column.title}</h5>
              {column.links.map((item) => <a href={item.href} key={item.title}>{item.title}</a>)}
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>{siteContent.footer.copyright}</span>
          <span className="right">{siteContent.footer.legal.map((item) => <span key={item}>{item}</span>)}</span>
        </div>
      </div>
    </footer>
  );
}
