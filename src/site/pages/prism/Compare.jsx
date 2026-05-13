/* global React */

export function Compare() {
  return (
    <section className="section" style={{paddingTop: 0}}>
      <div className="container">
        <div style={{maxWidth: '680px'}}>
          <span className="eyebrow coral">The moment</span>
          <h2 className="h2" style={{marginTop: '16px'}}>Raw bytes, or what actually happened.</h2>
          <p className="lead" style={{marginTop: '20px'}}>
            Same transaction. Two views. Prism's interpretation layer does the work your team would otherwise do in user-space code.
          </p>
        </div>
        <div className="compare-block">
          <div className="compare-pane raw">
            <div className="plabel">
              <span>Raw transaction</span>
              <span>0xabc123…9f4e</span>
            </div>
            <pre>
              <span className="c">// contract invocation</span>{"\n"}
              Contract <span className="s">"CCDC…4E21"</span> invoked <span className="k">swap</span>({"\n"}
              {"  "}from=<span className="s">"G…F9A"</span>,{"\n"}
              {"  "}to=<span className="s">"G…F9A"</span>,{"\n"}
              {"  "}amount_in=<span className="n">100_000000</span>,{"\n"}
              {"  "}amount_out_min=<span className="n">410_000000</span>{"\n"}
              ){"\n\n"}
              <span className="c">// emitted events</span>{"\n"}
              Event <span className="k">transfer</span> {"{"}{"\n"}
              {"  "}from: <span className="s">"G…F9A"</span>,{"\n"}
              {"  "}to:   <span className="s">"CCDC…"</span>,{"\n"}
              {"  "}amount: <span className="n">100_000000</span>,{"\n"}
              {"  "}asset:  <span className="s">"USDC"</span>{"\n"}
              {"}"}{"\n"}
              Event <span className="k">transfer</span> {"{"}{"\n"}
              {"  "}from: <span className="s">"CCDC…"</span>,{"\n"}
              {"  "}to:   <span className="s">"G…F9A"</span>,{"\n"}
              {"  "}amount: <span className="n">412_000000</span>,{"\n"}
              {"  "}asset:  <span className="s">"XLM"</span>{"\n"}
              {"}"}{"\n"}
              Event <span className="k">swap</span> {"{"}{"\n"}
              {"  "}router: <span className="s">"CCDC…"</span>,{"\n"}
              {"  "}path:    [<span className="s">"USDC"</span>, <span className="s">"XLM"</span>],{"\n"}
              {"  "}amounts: [<span className="n">100_000000</span>, <span className="n">412_000000</span>]{"\n"}
              {"}"}
            </pre>
          </div>
          <div className="compare-pane interp">
            <div className="plabel">
              <span>Prism interpretation</span>
              <span className="tag">confidence 0.98</span>
            </div>
            <div className="interp-summary">
              <b>Alice</b> swapped <b>100 USDC</b> for <b>412 XLM</b> on Soroswap.
            </div>
            <div className="interp-meta">
              <div className="row">
                <span className="k">Actor</span>
                <span className="v">GABC…7F9A</span>
              </div>
              <div className="row">
                <span className="k">Protocol</span>
                <span className="v">Soroswap</span>
              </div>
              <div className="row">
                <span className="k">Rate</span>
                <span className="v">4.12 XLM / USDC</span>
              </div>
              <div className="row">
                <span className="k">Gas</span>
                <span className="v">0.0041 XLM</span>
              </div>
              <div className="row">
                <span className="k">Ledger</span>
                <span className="v">62,551,406</span>
              </div>
              <div className="row">
                <span className="k">Time</span>
                <span className="v">2026-04-20 · 14:32:04 UTC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

