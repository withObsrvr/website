/* global React */
import { PlatformHero } from "./pages/platform/PlatformHero.jsx";
import { PlatformDiagram } from "./pages/platform/PlatformDiagram.jsx";
import { PlatformPrinciples } from "./pages/platform/PlatformPrinciples.jsx";
import { PlatformAccess } from "./pages/platform/PlatformAccess.jsx";
import { PlatformScale } from "./pages/platform/PlatformScale.jsx";
import { PlatformDeploy } from "./pages/platform/PlatformDeploy.jsx";
import { PlatformCta } from "./pages/platform/PlatformCta.jsx";

function PlatformApp() {
  return (
    <div>
      <window.SharedNav active="platform" />
      <div data-screen-label="01 Platform Hero"><PlatformHero /></div>
      <div data-screen-label="02 Architecture"><PlatformDiagram /></div>
      <div data-screen-label="03 Principles"><PlatformPrinciples /></div>
      <div data-screen-label="04 Access"><PlatformAccess /></div>
      <div data-screen-label="05 Scale"><PlatformScale /></div>
      <div data-screen-label="06 Deployment"><PlatformDeploy /></div>
      <div data-screen-label="07 Platform CTA"><PlatformCta /></div>
      <window.SharedFooter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PlatformApp />);
