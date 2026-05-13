/* global React */
import homeContent from "../../content/home.json";

export function ObsrvrTweaks({ tweaks, setTweaks }) {
  const { TweaksPanel, TweakSection, TweakRadio } = window;
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Hero tagline">
        <TweakRadio
          value={tweaks.tagline}
          onChange={(v) => setTweaks({ tagline: v })}
          options={Object.entries(homeContent.taglines).map(([value, tagline]) => ({ value, label: tagline.label }))}
        />
      </TweakSection>
      <TweakSection label="Segment cards">
        <TweakRadio
          value={tweaks.segmentStyle}
          onChange={(v) => setTweaks({ segmentStyle: v })}
          options={[
            { value: 'artifact', label: 'Mini artifacts (code / table / dashboard)' },
            { value: 'accent', label: 'Accent-colored borders only' },
            { value: 'plain', label: 'Plain (original)' },
          ]}
        />
      </TweakSection>
      <TweakSection label="Typeface">
        <TweakRadio
          value={tweaks.typeface}
          onChange={(v) => setTweaks({ typeface: v })}
          options={[
            { value: 'plex', label: 'IBM Plex' },
            { value: 'inter', label: 'Inter + JetBrains' },
            { value: 'helvetica', label: 'Helvetica Neue' },
          ]}
        />
      </TweakSection>
      <TweakSection label="Accent intensity">
        <TweakRadio
          value={tweaks.accentIntensity}
          onChange={(v) => setTweaks({ accentIntensity: v })}
          options={[
            { value: 'bright', label: 'Bright coral' },
            { value: 'muted', label: 'Muted coral' },
          ]}
        />
      </TweakSection>
      <TweakSection label="Hero layout">
        <TweakRadio
          value={tweaks.heroVariant}
          onChange={(v) => setTweaks({ heroVariant: v })}
          options={[
            { value: 'split', label: 'Split with ledger feed' },
            { value: 'editorial', label: 'Editorial (text-only)' },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
}
