/* global React */
import homeContent from "./content/home.json";
import { Hero } from "./pages/home/Hero.jsx";
import { Proof } from "./pages/home/Proof.jsx";
import { Segments } from "./pages/home/Segments.jsx";
import { Spotlight } from "./pages/home/Spotlight.jsx";
import { Platform } from "./pages/home/Platform.jsx";
import { Developer } from "./pages/home/Developer.jsx";
import { Ecosystem } from "./pages/home/Ecosystem.jsx";
import { Closing } from "./pages/home/Closing.jsx";
import { ObsrvrTweaks } from "./pages/home/Tweaks.jsx";
import { SiteFooter, SiteNav } from "./components/site-chrome.jsx";

const { useEffect } = React;

// ---------- Root ----------
function App() {
  const [tweaks, setTweaks] = window.useTweaks(homeContent.defaults);
  useEffect(() => {
    document.body.dataset.type = tweaks.typeface;
    document.body.dataset.accent = tweaks.accentIntensity;
    document.body.dataset.hero = tweaks.heroVariant;
  }, [tweaks.typeface, tweaks.accentIntensity, tweaks.heroVariant]);

  return (
    <div>
      <SiteNav brandHref="#" productHref="#products" />
      <Hero taglineKey={tweaks.tagline} />
      <Proof />
      <Segments segmentStyle={tweaks.segmentStyle} />
      <Spotlight />
      <Platform />
      <Developer />
      <Ecosystem />
      <Closing />
      <SiteFooter brandHref="#" />
      <ObsrvrTweaks tweaks={tweaks} setTweaks={setTweaks} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
