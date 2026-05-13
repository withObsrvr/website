/* global React */

export function PlatformAccess() {
  return (
    <section className="section">
      <div className="container">
        <div style={{maxWidth: '680px', marginBottom: '48px'}}>
          <span className="eyebrow">Access</span>
          <h2 className="h2" style={{marginTop: '16px'}}>Read the lake the way your team works.</h2>
        </div>
        <div className="plat-access-grid">
          <div className="plat-access">
            <div className="pa-head"><span className="pa-kind">SQL</span><span className="pa-name">DuckLake</span></div>
            <p>Direct SQL access to canonical tables via DuckLake. Join across transfers, events, and contracts with standard SQL. Query performance tuned for OLAP — 10B+ row scans in seconds.</p>
            <div className="pa-code">
              <pre><code><span className="k-sql">SELECT</span>{"\n"}
{"  "}ledger, asset_code,{"\n"}
{"  "}<span className="k-sql">sum</span>(amount_usd) <span className="k-sql">as</span> volume{"\n"}
<span className="k-sql">FROM</span> obsrvr.token_transfers{"\n"}
<span className="k-sql">WHERE</span> protocol = <span className="s-sql">'soroswap'</span>{"\n"}
{"  "}<span className="k-sql">AND</span> ledger_close_time &gt; <span className="s-sql">'2026-04-01'</span>{"\n"}
<span className="k-sql">GROUP BY</span> <span className="n-sql">1</span>, <span className="n-sql">2</span>{"\n"}
<span className="k-sql">ORDER BY</span> volume <span className="k-sql">DESC</span>;</code></pre>
            </div>
          </div>
          <div className="plat-access">
            <div className="pa-head"><span className="pa-kind">REST</span><span className="pa-name">API endpoints</span></div>
            <p>Versioned, OpenAPI-specified REST endpoints. Authentication, rate limits, and pagination that behave like every other API your team uses.</p>
            <div className="pa-code">
              <pre><code><span className="k-sql">GET</span> /v1/accounts/<span className="s-sql">{'{address}'}</span>/transfers{"\n"}
{"  "}?asset=USDC{"\n"}
{"  "}&amp;since=<span className="s-sql">2026-04-01</span>{"\n"}
{"  "}&amp;cursor=...{"\n"}{"\n"}
<span className="k-sql">Response 200</span>{"\n"}
{"  "}200 transfers · next_cursor{"\n"}
{"  "}content-type: application/json</code></pre>
            </div>
          </div>
          <div className="plat-access">
            <div className="pa-head"><span className="pa-kind">MCP</span><span className="pa-name">Agentic access</span></div>
            <p>An MCP server exposing Stellar data as structured tools for LLM agents. Token balances, transaction history, contract analytics — callable from Claude, ChatGPT, or your own agent stack.</p>
            <div className="pa-code">
              <pre><code><span className="k-sql">tool</span> obsrvr_interpret_tx({"\n"}
{"  "}hash: <span className="s-sql">"abc…9f4e"</span>{"\n"}
) <span className="k-sql">→</span> {"{"}{"\n"}
{"  "}summary: <span className="s-sql">"Alice swapped…"</span>,{"\n"}
{"  "}confidence: <span className="n-sql">0.98</span>{"\n"}
{"}"}</code></pre>
            </div>
          </div>
          <div className="plat-access">
            <div className="pa-head"><span className="pa-kind">Stream</span><span className="pa-name">nebu</span></div>
            <p>MIT-licensed CLI. Stream Stellar data through Unix pipes into your own systems — Kafka, Postgres, S3, ClickHouse, whatever. Run it against managed Obsrvr or self-host the whole pipeline.</p>
            <div className="pa-code">
              <pre><code><span className="c-sql"># stream soroban events into your warehouse</span>{"\n"}
nebu stream events \{"\n"}
{"  "}--network mainnet \{"\n"}
{"  "}--filter <span className="s-sql">'type=contract'</span> \{"\n"}
{"  "}| flowctl sink postgres</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

