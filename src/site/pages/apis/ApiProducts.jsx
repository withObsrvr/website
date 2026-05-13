/* global React */

function ApiBlock({ eyebrow, title, body, verb, path, codeTitle, children, who }) {
  return (
    <div className="api-block">
      <div className="api-meta">
        <span className="eyebrow coral">{eyebrow}</span>
        <h3>{title}</h3>
        <p>{body}</p>
        <div className="endpoint">
          <span className="verb">{verb}</span>
          <span className="path">{path}</span>
        </div>
        <div className="who">
          <b>Who uses it</b>
          {who}
        </div>
      </div>
      <div className="api-stack">
        <div className="code">
          <div className="code-head">
            <span className="lang">{codeTitle}</span>
            <button className="copy">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" rx="1"/><path d="M2 8V2h6"/></svg>
              Copy
            </button>
          </div>
          <pre className="code-body"><code>{children}</code></pre>
        </div>
      </div>
    </div>
  );
}

export function ApiProducts() {
  return (
    <section className="section" style={{paddingTop: 0}}>
      <div className="container">
        <div style={{paddingTop: '72px', marginBottom: '8px'}}>
          <span className="eyebrow">Three API products</span>
          <h2 className="h2" style={{marginTop: '16px', maxWidth: '680px'}}>One platform. Three production APIs.</h2>
        </div>

        <ApiBlock
          eyebrow="Transaction Interpretation"
          title="Turn any Stellar transaction into a human-readable summary."
          body="Works for classic payments, Soroban contract calls, multi-asset swaps, and cross-contract interactions. Confidence scored, protocol tagged."
          verb="GET"
          path="/api/v1/transactions/{hash}/interpret"
          codeTitle="Response · application/json"
          who="Wallets showing transaction history. Tax tools reconstructing cost basis. Portfolio dashboards tracking activity."
        >
{`{
  `}<span className="k">"summary"</span>{`:    `}<span className="s">"Alice swapped 100 USDC for 412 XLM on Soroswap"</span>{`,
  `}<span className="k">"actor"</span>{`:      `}<span className="s">"GABC...7F9A"</span>{`,
  `}<span className="k">"action"</span>{`:     `}<span className="s">"swap"</span>{`,
  `}<span className="k">"protocol"</span>{`:   `}<span className="s">"soroswap"</span>{`,
  `}<span className="k">"assets_in"</span>{`:  [{ `}<span className="k">"code"</span>{`: `}<span className="s">"USDC"</span>{`, `}<span className="k">"amount"</span>{`: `}<span className="s">"100"</span>{` }],
  `}<span className="k">"assets_out"</span>{`: [{ `}<span className="k">"code"</span>{`: `}<span className="s">"XLM"</span>{`,  `}<span className="k">"amount"</span>{`: `}<span className="s">"412"</span>{` }],
  `}<span className="k">"ledger"</span>{`:     `}<span className="n">55812406</span>{`,
  `}<span className="k">"confidence"</span>{`: `}<span className="n">0.98</span>{`
}`}
        </ApiBlock>

        <ApiBlock
          eyebrow="Token & Balance"
          title="Current and historical token state for any address."
          body="Classic assets, Soroban tokens, and SEP-41 tokens unified in one response. Point-in-time queries and transfer history included."
          verb="GET"
          path="/api/v1/accounts/{address}/balances"
          codeTitle="Response · application/json"
          who="Wallets, portfolio trackers, DeFi dashboards, tax reporting tools."
        >
{`{
  `}<span className="k">"address"</span>{`: `}<span className="s">"GABC...7F9A"</span>{`,
  `}<span className="k">"as_of_ledger"</span>{`: `}<span className="n">55812406</span>{`,
  `}<span className="k">"balances"</span>{`: [
    { `}<span className="k">"code"</span>{`: `}<span className="s">"XLM"</span>{`,  `}<span className="k">"kind"</span>{`: `}<span className="s">"native"</span>{`,    `}<span className="k">"amount"</span>{`: `}<span className="s">"1204.8821"</span>{` },
    { `}<span className="k">"code"</span>{`: `}<span className="s">"USDC"</span>{` , `}<span className="k">"kind"</span>{`: `}<span className="s">"classic"</span>{`,   `}<span className="k">"amount"</span>{`: `}<span className="s">"312.00"</span>{`   },
    { `}<span className="k">"code"</span>{`: `}<span className="s">"AQUA"</span>{` , `}<span className="k">"kind"</span>{`: `}<span className="s">"sep41"</span>{`,     `}<span className="k">"amount"</span>{`: `}<span className="s">"48000.00"</span>{` }
  ]
}`}
        </ApiBlock>

        <ApiBlock
          eyebrow="Contract Intelligence"
          title="Soroban contract analytics: calls, functions, and usage."
          body="Call graphs, function-level metrics, caller/callee relationships, and historical usage patterns for any contract on Stellar."
          verb="GET"
          path="/api/v1/contracts/{id}/analytics?period=24h"
          codeTitle="Response · application/json"
          who="Protocol teams monitoring their own contracts. Explorers. Analytics tools building DeFi dashboards."
        >
{`{
  `}<span className="k">"contract"</span>{`: `}<span className="s">"CCDC...4E21"</span>{`,
  `}<span className="k">"period"</span>{`:   `}<span className="s">"24h"</span>{`,
  `}<span className="k">"calls"</span>{`:    `}<span className="n">18420</span>{`,
  `}<span className="k">"unique_callers"</span>{`: `}<span className="n">742</span>{`,
  `}<span className="k">"top_functions"</span>{`: [
    { `}<span className="k">"name"</span>{`: `}<span className="s">"swap"</span>{`,      `}<span className="k">"calls"</span>{`: `}<span className="n">9120</span>{` },
    { `}<span className="k">"name"</span>{`: `}<span className="s">"add_liquidity"</span>{`, `}<span className="k">"calls"</span>{`: `}<span className="n">3201</span>{` }
  ]
}`}
        </ApiBlock>
      </div>
    </section>
  );
}

