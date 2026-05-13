/* global React */
import { ApiHero } from "./pages/apis/ApiHero.jsx";
import { ApiProducts } from "./pages/apis/ApiProducts.jsx";
import { ApiBenefits } from "./pages/apis/ApiBenefits.jsx";
import { ApiCta } from "./pages/apis/ApiCta.jsx";

function ApiApp() {
  return (
    <div>
      <window.SharedNav active="products" />
      <div data-screen-label="01 APIs Hero"><ApiHero /></div>
      <div data-screen-label="02 API Products"><ApiProducts /></div>
      <div data-screen-label="03 API Benefits"><ApiBenefits /></div>
      <div data-screen-label="04 API CTA"><ApiCta /></div>
      <window.SharedFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ApiApp />);
