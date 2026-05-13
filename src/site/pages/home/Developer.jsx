/* global React */

export function Developer() {
  return (
    <section className="section dev" id="apis" data-screen-label="07 Developer">
      <div className="container">
        <div className="dev-grid">
          <div>
            <div className="eyebrow" style={{marginBottom: '20px'}}>Developers</div>
            <h2 className="h2">Built for developers who want to ship, not maintain.</h2>
            <p className="lead" style={{marginTop: '24px'}}>
              REST APIs with OpenAPI specs, an MCP server for agentic workflows, and nebu for direct pipeline access. Documentation that treats developers as engineers.
            </p>
            <div className="dev-entries">
              <a className="dev-entry" href="/apis">
                <span className="name">APIs</span>
                <span className="desc">REST endpoints for accounts, transactions, transfers, and contract events.</span>
                <span className="arrow">→</span>
              </a>
              <a className="dev-entry" href="https://nebu.withobsrvr.com">
                <span className="name">nebu</span>
                <span className="desc">Open-source CLI for streaming Stellar data through Unix pipes.</span>
                <span className="arrow">↗</span>
              </a>
              <a className="dev-entry" href="#mcp">
                <span className="name">MCP server</span>
                <span className="desc">Structured Stellar data for AI agents and agentic workflows.</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
          <CodeSample />
        </div>
      </div>
    </section>
  );
}

function CodeSample() {
  return (
    <div className="code">
      <div className="code-head">
        <span className="lang">GET /api/v1/transactions/{'{'}hash{'}'}/interpret</span>
        <button className="copy">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><path d="M2 8V2h6"/></svg>
          Copy
        </button>
      </div>
      <pre className="code-body"><code>{`{
  `}<span className="k">"summary"</span>{`: `}<span className="s">"Alice swapped 100 USDC for 412 XLM on Soroswap"</span>{`,
  `}<span className="k">"actor"</span>{`:    `}<span className="s">"GABC...7F9A"</span>{`,
  `}<span className="k">"action"</span>{`:   `}<span className="s">"swap"</span>{`,
  `}<span className="k">"protocol"</span>{`: `}<span className="s">"soroswap"</span>{`,
  `}<span className="k">"assets_in"</span>{`:  [{ `}<span className="k">"code"</span>{`: `}<span className="s">"USDC"</span>{`, `}<span className="k">"amount"</span>{`: `}<span className="s">"100"</span>{` }],
  `}<span className="k">"assets_out"</span>{`: [{ `}<span className="k">"code"</span>{`: `}<span className="s">"XLM"</span>{`,  `}<span className="k">"amount"</span>{`: `}<span className="s">"412"</span>{` }],
  `}<span className="k">"ledger"</span>{`:     `}<span className="n">55812406</span>{`,
  `}<span className="k">"confidence"</span>{`: `}<span className="n">0.98</span>{`
}`}</code></pre>
    </div>
  );
}
