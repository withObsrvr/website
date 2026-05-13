/* global React */
import { PrismHero } from "./pages/prism/PrismHero.jsx";
import { Problem } from "./pages/prism/Problem.jsx";
import { Compare } from "./pages/prism/Compare.jsx";
import { Features } from "./pages/prism/Features.jsx";
import { Heartbeat } from "./pages/prism/Heartbeat.jsx";
import { Audiences } from "./pages/prism/Audiences.jsx";
import { BuiltOn } from "./pages/prism/BuiltOn.jsx";
import { PrismCta } from "./pages/prism/PrismCta.jsx";

function PrismApp() {
  return (
    <div>
      <window.SharedNav active="products" />
      <div data-screen-label="01 Prism Hero"><PrismHero /></div>
      <div data-screen-label="02 The Problem"><Problem /></div>
      <div data-screen-label="03 Raw vs Interpreted"><Compare /></div>
      <div data-screen-label="04 Features"><Features /></div>
      <div data-screen-label="05 Heartbeat"><Heartbeat /></div>
      <div data-screen-label="06 Audiences"><Audiences /></div>
      <div data-screen-label="07 Built on Obsrvr"><BuiltOn /></div>
      <div data-screen-label="08 Prism CTA"><PrismCta /></div>
      <window.SharedFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PrismApp />);
