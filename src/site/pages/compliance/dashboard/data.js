export const sidebarSections = [
  {
    label: "Monitoring",
    items: [
      { label: "Overview", icon: "●", active: true },
      { label: "Flagged queue", icon: "◦", badge: "24" },
      { label: "Counterparties", icon: "◦" },
      { label: "Policies", icon: "◦" },
    ],
  },
  {
    label: "Investigations",
    items: [
      { label: "Cases", icon: "◦", badge: "7" },
      { label: "SAR drafts", icon: "◦" },
      { label: "Exports", icon: "◦" },
    ],
  },
  {
    label: "Assets",
    items: [
      { label: "scoped", asset: "USDC" },
      { label: "scoped", asset: "EURC" },
      { label: "scoped", asset: "yUSDC" },
    ],
  },
];

export const sidebarUser = {
  initials: "MC",
  name: "M. Chen",
  role: "AML Officer · Circle",
};

export const kpis = [
  {
    label: "7d volume",
    value: "$842.1M",
    delta: "▲ 6.2% · 7d avg",
    deltaClassName: "up",
    sparkPath: "M0,18 L10,16 L20,14 L30,16 L40,12 L50,14 L60,8 L70,10 L80,6",
    stroke: "var(--teal)",
  },
  {
    label: "Transfers",
    value: "312,480",
    delta: "▲ 3.1%",
    deltaClassName: "up",
    sparkPath: "M0,16 L10,18 L20,12 L30,14 L40,10 L50,12 L60,8 L70,10 L80,6",
    stroke: "var(--teal)",
  },
  {
    label: "Unique accounts",
    value: "58,104",
    delta: "▲ 1.8%",
    deltaClassName: "up",
    sparkPath: "M0,14 L10,14 L20,12 L30,13 L40,11 L50,10 L60,9 L70,9 L80,8",
    stroke: "var(--teal)",
  },
  {
    label: "Open flags",
    value: "24",
    delta: "▲ 4 new in last 24h",
    deltaClassName: "warn",
    className: "danger",
    sparkPath: "M0,20 L10,18 L20,20 L30,16 L40,18 L50,12 L60,14 L70,8 L80,6",
    stroke: "var(--accent-ink)",
  },
];

export const counterparties = [
  { name: "Kraken hot wallet", label: "exchange · labeled", value: "$184.2M", width: 92, ok: true },
  { name: "Stellar.org reserve", label: "issuer ops · labeled", value: "$118.9M", width: 68, ok: true },
  { name: "Soroswap router", label: "protocol · labeled", value: "$96.4M", width: 56, ok: true },
  { name: "GCP…A12", label: "unlabeled · high velocity", value: "$47.1M", width: 32, ok: false },
  { name: "Binance corridor", label: "exchange · labeled", value: "$38.8M", width: 26, ok: true },
  { name: "GKE…N01", label: "unlabeled · new", value: "$12.4M", width: 9, ok: false },
];

export const flaggedQueue = {
  summary: "24 open · 4 new · assigned to you: 3",
  filters: ["All (24)", "Sanctions (3)", "Velocity (8)", "Policy (13)"],
  columns: ["Case", "Time", "Severity", "Rule", "Counterparty", "Amount", "Status"],
  rows: [
    { caseId: "CASE-2048", time: "14:32:04", severity: "HIGH", severityClass: "high", rule: "OFAC SDN match", address: "GKF…N01", context: "unlabeled", amount: "$2,500,000", status: "review", statusClass: "review" },
    { caseId: "CASE-2047", time: "14:28:11", severity: "MED", severityClass: "med", rule: "Velocity anomaly · +340%", address: "GCP…A12", context: "unlabeled", amount: "$480,000", status: "open", statusClass: "open" },
    { caseId: "CASE-2046", time: "14:19:42", severity: "MED", severityClass: "med", rule: "Unlabeled counterparty > $1M", address: "GMX…C77", context: "new 2d ago", amount: "$1,200,000", status: "open", statusClass: "open" },
    { caseId: "CASE-2045", time: "14:04:18", severity: "LOW", severityClass: "low", rule: "Structuring pattern", address: "GKE…N01", context: "linked 4 addrs", amount: "$320,000", status: "acked", statusClass: "ack" },
    { caseId: "CASE-2044", time: "13:51:03", severity: "HIGH", severityClass: "high", rule: "Lineage gap · blend vault", address: "CCDC…4E21", context: "protocol", amount: "$3,100,000", status: "review", statusClass: "review" },
    { caseId: "CASE-2043", time: "13:42:48", severity: "LOW", severityClass: "low", rule: "Cross-issuer bridge flow", address: "GAB…8D2", context: "anchor", amount: "$92,400", status: "closed", statusClass: "closed" },
  ],
};
