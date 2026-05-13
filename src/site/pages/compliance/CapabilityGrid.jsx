/* global React */

const capabilities = [
  {
    label: "Flow monitoring",
    title: "Every stablecoin transfer, in context.",
    body: "Issuer, counterparty, amount, and protocol context for every USDC, EURC, and issuer-controlled asset movement. Historical replay available for investigations.",
  },
  {
    label: "Counterparty analysis",
    title: "Identify holders, flows, and patterns.",
    body: "Large-holder identification, counterparty frequency, and unusual flow detection. Address labeling for known entities, exchanges, and protocols.",
  },
  {
    label: "Sanctions screening",
    title: "Cross-reference with OFAC SDN and more.",
    body: "Configurable screening rules with alert workflows. Policies reviewable by compliance leadership, evidence exportable for regulators.",
  },
  {
    label: "Audit-ready exports",
    title: "Lineage back to the source ledger.",
    body: "Every data point carries full lineage. CSV, PDF, and API exports formatted for internal review or regulatory submission.",
  },
];

export function CapabilityGrid() {
  return (
    <div className="comp-cap-grid">
      {capabilities.map((item) => (
        <div className="comp-cap" key={item.label}>
          <div className="label">{item.label}</div>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
