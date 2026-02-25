import { Plus, Pencil, Trash2 } from "lucide-react";
const recordColors: Record<string, string> = { A: "#EF4444", AAAA: "#8B5CF6", CNAME: "#3B82F6", MX: "#F59E0B", TXT: "#10B981", NS: "#6B7280" };
const records = [
    { id: "1", type: "A", name: "@", value: "76.76.21.21", ttl: 300, proxy: true },
    { id: "2", type: "A", name: "www", value: "76.76.21.21", ttl: 300, proxy: true },
    { id: "3", type: "CNAME", name: "api", value: "api.vercel-id.com", ttl: 3600, proxy: false },
    { id: "4", type: "MX", name: "@", value: "route1.mx.cloudflare.net", ttl: 3600, proxy: false },
    { id: "5", type: "TXT", name: "@", value: "v=spf1 include:_spf.google.com ~all", ttl: 3600, proxy: false },
    { id: "6", type: "NS", name: "@", value: "aria.ns.cloudflare.com", ttl: 86400, proxy: false }
];
export default function RecordsPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 1200 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-5)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700 }}>DNS Records</h1>
                <p className="mono" style={{ color: "var(--color-accent-primary)", marginTop: 4 }}>openclaw.dev</p>
            </div>
            <button className="btn btn-primary"><Plus size={16} /> Add Record</button>
        </div>
        <div className="card" style={{ overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-secondary)" }}>
                        {["Type", "Name", "Value", "TTL", "Proxy", ""].map(h => (
                            <th key={h} style={{ textAlign: "left", padding: "10px 16px", fontSize: "11px", textTransform: "uppercase", letterSpacing: 1, color: "var(--color-text-tertiary)", fontWeight: 600 }}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {records.map(r => (
                        <tr key={r.id} style={{ borderBottom: "1px solid var(--color-border)" }}>
                            <td style={{ padding: "10px 16px" }}><span className="record-type" style={{ background: (recordColors[r.type] || "#666") + "20", color: recordColors[r.type] || "#666" }}>{r.type}</span></td>
                            <td style={{ padding: "10px 16px" }}><span className="mono">{r.name}</span></td>
                            <td style={{ padding: "10px 16px", maxWidth: 320, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}><span className="mono" style={{ color: "var(--color-text-secondary)" }}>{r.value}</span></td>
                            <td style={{ padding: "10px 16px" }}><span className="mono" style={{ color: "var(--color-text-tertiary)" }}>{r.ttl}s</span></td>
                            <td style={{ padding: "10px 16px" }}>{r.proxy && <span style={{ background: "#F59E0B20", color: "#D97706", padding: "2px 8px", borderRadius: 4, fontSize: "11px", fontWeight: 600 }}>Proxied</span>}</td>
                            <td style={{ padding: "10px 16px" }}>
                                <div style={{ display: "flex", gap: 4 }}>
                                    <button className="btn btn-sm"><Pencil size={12} /></button>
                                    <button className="btn btn-sm" style={{ color: "var(--color-danger)" }}><Trash2 size={12} /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>);
}
