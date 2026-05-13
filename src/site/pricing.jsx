/* global React */
import { PricingHero } from "./pages/pricing/PricingHero.jsx";
import { Tiers } from "./pages/pricing/Tiers.jsx";
import { Compare } from "./pages/pricing/Compare.jsx";
import { Nodes } from "./pages/pricing/Nodes.jsx";
import { Compliance } from "./pages/pricing/Compliance.jsx";
import { Faq } from "./pages/pricing/Faq.jsx";
import { PricingCta } from "./pages/pricing/PricingCta.jsx";

function PricingApp() {
  return (
    <div>
      <window.SharedNav active="pricing" />
      <div data-screen-label="01 Pricing Hero"><PricingHero /></div>
      <div data-screen-label="02 Tiers"><Tiers /></div>
      <div data-screen-label="03 Compare"><Compare /></div>
      <div data-screen-label="04 Nodes"><Nodes /></div>
      <div data-screen-label="05 Compliance"><Compliance /></div>
      <div data-screen-label="06 FAQ"><Faq /></div>
      <div data-screen-label="07 Pricing CTA"><PricingCta /></div>
      <window.SharedFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PricingApp />);
