/* global React */

export function PlatformDiagram() {
  return (
    <section className="section plat-diagram-section" id="arch" style={{paddingTop: '40px'}}>
      <div className="container">
        <div style={{maxWidth: '680px', marginBottom: '48px'}}>
          <span className="eyebrow">Architecture</span>
          <h2 className="h2" style={{marginTop: '16px'}}>Four layers. One source of truth.</h2>
          <p className="lead" style={{marginTop: '18px'}}>
            Every row that leaves Obsrvr can be traced back through the semantic layer to the canonical tables, and back to the exact ledger that produced it.
          </p>
        </div>
        <div className="plat-diagram">
          <div className="plat-layer plat-layer-surface">
            <div className="plat-layer-meta">
              <div className="plat-layer-num">04</div>
              <div className="plat-layer-name">Surfaces</div>
              <div className="plat-layer-desc">Products, APIs, and embeddings you integrate with directly.</div>
            </div>
            <div className="plat-nodes">
              <div className="plat-node accent"><div className="n">Prism</div><div className="s">block explorer</div></div>
              <div className="plat-node accent"><div className="n">REST APIs</div><div className="s">interpretation · balances · contract</div></div>
              <div className="plat-node accent"><div className="n">MCP server</div><div className="s">agentic access</div></div>
              <div className="plat-node accent"><div className="n">Compliance</div><div className="s">dashboards · exports</div></div>
              <div className="plat-node"><div className="n">DuckLake SQL</div><div className="s">direct query</div></div>
              <div className="plat-node"><div className="n">nebu</div><div className="s">stream pipes</div></div>
            </div>
          </div>

          <div className="plat-connector"></div>

          <div className="plat-layer">
            <div className="plat-layer-meta">
              <div className="plat-layer-num">03</div>
              <div className="plat-layer-name">Semantic layer</div>
              <div className="plat-layer-desc">Transforms canonical rows into meaning. Decodes, tags, scores, traces.</div>
            </div>
            <div className="plat-nodes">
              <div className="plat-node"><div className="n">Interpretation</div><div className="s">tx → human summary</div></div>
              <div className="plat-node"><div className="n">Protocol tagging</div><div className="s">soroswap · blend · aquarius</div></div>
              <div className="plat-node"><div className="n">Enrichment</div><div className="s">memos · counterparties · USD</div></div>
              <div className="plat-node"><div className="n">Risk scoring</div><div className="s">sanctions · velocity</div></div>
              <div className="plat-node"><div className="n">Lineage</div><div className="s">row → source ledger</div></div>
            </div>
          </div>

          <div className="plat-connector"></div>

          <div className="plat-layer">
            <div className="plat-layer-meta">
              <div className="plat-layer-num">02</div>
              <div className="plat-layer-name">Canonical data</div>
              <div className="plat-layer-desc">Normalized, deduplicated, versioned tables. No raw XDR. No special cases.</div>
            </div>
            <div className="plat-nodes">
              <div className="plat-node"><div className="n">accounts</div><div className="s">balances · trustlines · signers</div></div>
              <div className="plat-node"><div className="n">transactions</div><div className="s">ops · effects · fees</div></div>
              <div className="plat-node"><div className="n">token_transfers</div><div className="s">classic · SAC · SEP-41</div></div>
              <div className="plat-node"><div className="n">contract_events</div><div className="s">CAP-67 · typed</div></div>
              <div className="plat-node"><div className="n">contracts</div><div className="s">calls · state · wasm</div></div>
              <div className="plat-node"><div className="n">ledgers</div><div className="s">close time · hashes</div></div>
            </div>
          </div>

          <div className="plat-connector"></div>

          <div className="plat-layer plat-layer-ingest">
            <div className="plat-layer-meta">
              <div className="plat-layer-num">01</div>
              <div className="plat-layer-name">Ingestion</div>
              <div className="plat-layer-desc">Streaming from Stellar mainnet and testnet. XDR decoded at rest, not at query time.</div>
            </div>
            <div className="plat-nodes">
              <div className="plat-node"><div className="n">Galexie</div><div className="s">cold storage · full history</div></div>
              <div className="plat-node"><div className="n">nebu</div><div className="s">streaming · MIT-licensed</div></div>
              <div className="plat-node"><div className="n">flowctl</div><div className="s">pipeline orchestration</div></div>
              <div className="plat-node"><div className="n">XDR decoder</div><div className="s">at-rest · typed</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

