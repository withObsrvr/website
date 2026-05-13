/* global React */
import { CompHero } from "./pages/compliance/CompHero.jsx";
import { CompWho } from "./pages/compliance/CompWho.jsx";
import { CompWhat } from "./pages/compliance/CompWhat.jsx";
import { CompHow } from "./pages/compliance/CompHow.jsx";
import { CompWhy } from "./pages/compliance/CompWhy.jsx";
import { CompCta } from "./pages/compliance/CompCta.jsx";

function CompApp() {
  return (
    <div>
      <window.SharedNav active="products" />
      <div data-screen-label="01 Compliance Hero"><CompHero /></div>
      <div data-screen-label="02 Who It's For"><CompWho /></div>
      <div data-screen-label="03 What You Get"><CompWhat /></div>
      <div data-screen-label="04 How It Works"><CompHow /></div>
      <div data-screen-label="05 Why Obsrvr"><CompWhy /></div>
      <div data-screen-label="06 Compliance CTA"><CompCta /></div>
      <window.SharedFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CompApp />);
