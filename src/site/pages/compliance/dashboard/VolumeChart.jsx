/* global React */

export function VolumeChart() {
  // 7-day hourly chart — stylized but believable
  const w = 720, h = 180, pad = 12;
  // Two series
  const inflow = [40, 46, 52, 44, 58, 62, 56, 68, 72, 64, 70, 78, 82, 74, 80, 86, 82, 90, 84, 92, 88, 94, 90, 100, 94];
  const outflow = [36, 40, 42, 38, 46, 50, 44, 54, 58, 50, 58, 62, 70, 64, 68, 74, 70, 78, 72, 80, 76, 82, 78, 88, 82];
  const flags = [{ i: 6, t: 'Velocity' }, { i: 13, t: 'Sanctions' }, { i: 19, t: 'Lineage' }];
  const maxV = 110;
  const xStep = (w - pad * 2) / (inflow.length - 1);
  const toPath = (arr) => arr.map((p, i) => `${i === 0 ? 'M' : 'L'} ${pad + i * xStep} ${h - (p / maxV) * (h - pad * 2) - pad}`).join(' ');
  const areaPath = (arr) => `${toPath(arr)} L ${pad + (arr.length - 1) * xStep} ${h - pad} L ${pad} ${h - pad} Z`;

  return (
    <div className="compd-chart-wrap">
      <div className="compd-yaxis">
        <span>$12M</span><span>$9M</span><span>$6M</span><span>$3M</span><span>0</span>
      </div>
      <svg className="compd-svg" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="fadeInflow" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#1F4E5F" stopOpacity="0.18"/>
            <stop offset="100%" stopColor="#1F4E5F" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="fadeOutflow" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#FF7F50" stopOpacity="0.12"/>
            <stop offset="100%" stopColor="#FF7F50" stopOpacity="0"/>
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((t, i) => (
          <line key={i} x1={pad} y1={pad + (h - pad * 2) * t} x2={w - pad} y2={pad + (h - pad * 2) * t} stroke="var(--border)" strokeWidth="1" strokeDasharray="2 4"/>
        ))}
        <path d={areaPath(inflow)} fill="url(#fadeInflow)"/>
        <path d={toPath(inflow)} fill="none" stroke="#1F4E5F" strokeWidth="1.6"/>
        <path d={areaPath(outflow)} fill="url(#fadeOutflow)"/>
        <path d={toPath(outflow)} fill="none" stroke="#E05E2B" strokeWidth="1.6"/>
        {flags.map((f, k) => {
          const x = pad + f.i * xStep;
          const y = h - (inflow[f.i] / maxV) * (h - pad * 2) - pad;
          return (
            <g key={k}>
              <line x1={x} y1={pad} x2={x} y2={h - pad} stroke="#E05E2B" strokeWidth="1" strokeDasharray="2 3" opacity="0.5"/>
              <circle cx={x} cy={y} r="4" fill="#fff" stroke="#E05E2B" strokeWidth="1.6"/>
              <circle cx={x} cy={y} r="1.8" fill="#E05E2B"/>
            </g>
          );
        })}
      </svg>
      <div className="compd-xaxis">
        <span>Apr 14</span><span>Apr 15</span><span>Apr 16</span><span>Apr 17</span><span>Apr 18</span><span>Apr 19</span><span>Apr 20</span>
      </div>
    </div>
  );
}

