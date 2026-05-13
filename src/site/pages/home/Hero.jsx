/* global React */
import homeContent from "../../content/home.json";

const { useEffect, useState } = React;

const TAGLINE_OPTIONS = homeContent.taglines;

export function Hero({ taglineKey }) {
  const copy = TAGLINE_OPTIONS[taglineKey] || TAGLINE_OPTIONS.production;
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-eyebrow">
              <span className="dot"></span>
              <span>{homeContent.hero.eyebrow}</span>
            </div>
            <h1 className="h1">{copy.h1}</h1>
            <p className="hero-lead">{copy.lead}</p>
            <div className="hero-cta">
              {homeContent.hero.ctas.map((item) => <a href={item.href} className={item.className} key={item.title}>{item.title}</a>)}
            </div>
            <div className="hero-band">
              {homeContent.hero.band.map((item, index) => (
                <React.Fragment key={item}>
                  {index > 0 && <span className="dot-sep"></span>}
                  <span><strong>{item}</strong></span>
                </React.Fragment>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const scenes = [
    {
      seq: "62,551,406",
      latency: "4.8s",
      eps: "142 events / sec",
      rows: [
        { tag: "SWAP", coral: true, desc: <><b>100 USDC</b> → <b>412 XLM</b> on Soroswap</>, ts: "14:32:04" },
        { tag: "TRANSFER", desc: <><b>2,500 USDC</b> from GAB…4F9 to GXZ…C21</>, ts: "14:32:01" },
        { tag: "CONTRACT", desc: <>Mint <b>1 SEP-41</b> token on CAKZ…8PQ</>, ts: "14:31:58" },
        { tag: "PAYMENT", desc: <>Classic asset <b>EURC</b> sent, 8,200 units</>, ts: "14:31:55" },
        { tag: "EVENT", desc: <>CAP-67 <b>price_update</b> emitted, oracle CBZ…77</>, ts: "14:31:52" },
      ],
    },
    {
      seq: "62,551,419",
      latency: "3.9s",
      eps: "168 events / sec",
      rows: [
        { tag: "LIQUIDITY", coral: true, desc: <>Provide <b>5,000 USDC / 20,400 XLM</b> to Aquarius pool</>, ts: "14:33:18" },
        { tag: "TRANSFER", desc: <><b>800 EURC</b> GAK…8D2 → GMN…11C · memo "INV-204"</>, ts: "14:33:15" },
        { tag: "CONTRACT", desc: <>Soroswap router <b>router_swap</b> — 3 hops</>, ts: "14:33:12" },
        { tag: "BURN", desc: <><b>10,000 stellarcarbon</b> retired by GSC…77A</>, ts: "14:33:09" },
        { tag: "EVENT", desc: <>SEP-41 <b>transfer</b> 450 yUSDC, lineage traced</>, ts: "14:33:06" },
      ],
    },
    {
      seq: "62,551,431",
      latency: "5.2s",
      eps: "129 events / sec",
      rows: [
        { tag: "SCREEN", coral: true, desc: <><b>Flag</b> — inflow from OFAC-watchlisted addr to USDC issuer</>, ts: "14:34:02" },
        { tag: "TRANSFER", desc: <><b>120,000 USDC</b> cross-account settlement, 4-hop trace</>, ts: "14:33:59" },
        { tag: "PATH_PAY", desc: <><b>USDC → XLM → yXLM</b> atomic path, 0.02% slippage</>, ts: "14:33:56" },
        { tag: "CONTRACT", desc: <>Blend <b>supply_collateral</b> 50,000 USDC</>, ts: "14:33:53" },
        { tag: "EVENT", desc: <>Oracle <b>price_update</b> XLM/USD = 0.2428</>, ts: "14:33:50" },
      ],
    },
    {
      seq: "62,551,444",
      latency: "4.1s",
      eps: "156 events / sec",
      rows: [
        { tag: "MINT", coral: true, desc: <><b>2,000 EURC</b> issued by GA5Z…EURC to GCP…A12</>, ts: "14:34:47" },
        { tag: "TRANSFER", desc: <><b>47 XLM</b> remittance GKE…NGA → GNG…USD · memo "wages"</>, ts: "14:34:44" },
        { tag: "TRUSTLINE", desc: <>New trustline: GCP…A12 ↔ <b>EURC</b></>, ts: "14:34:41" },
        { tag: "CONTRACT", desc: <>Soroswap <b>add_liquidity</b> USDC/XLM, 0.3% fee tier</>, ts: "14:34:38" },
        { tag: "PAYMENT", desc: <><b>500 BRL</b> anchor redemption via SEP-24</>, ts: "14:34:35" },
      ],
    },
  ];

  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIdx((i) => (i + 1) % scenes.length);
        setFading(false);
      }, 260);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  const scene = scenes[idx];

  return (
    <div className="hero-visual">
      <div className="hv-head">
        <span>ledger-stream · mainnet</span>
        <span className="live"><span className="pulse"></span>live · seq {scene.seq}</span>
      </div>
      <div className={"hv-rows" + (fading ? " fading" : "")}>
        {scene.rows.map((r, i) => (
          <div className="hv-row" key={idx + "-" + i}>
            <span className={"tag" + (r.coral ? " coral" : "")}>{r.tag}</span>
            <span className="desc">{r.desc}</span>
            <span className="ts">{r.ts}</span>
          </div>
        ))}
      </div>
      <div className="hv-foot">
        <span>latency {scene.latency} · {scene.eps}</span>
        <span className="hv-dots">
          {scenes.map((_, i) => (
            <span key={i} className={"hv-dot" + (i === idx ? " on" : "")}></span>
          ))}
        </span>
      </div>
    </div>
  );
}
