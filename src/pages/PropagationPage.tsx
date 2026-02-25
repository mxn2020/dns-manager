import { Activity, Search } from "lucide-react";
const checks = [
    { region: "🇺🇸 US East", ip: "76.76.21.21", status: "resolved", latency: "12ms" },
    { region: "🇬🇧 EU West", ip: "76.76.21.21", status: "resolved", latency: "18ms" },
    { region: "🇸🇬 AP South", ip: "76.76.21.21", status: "propagating", latency: "—" },
    { region: "🇦🇺 AU East", ip: "NXDOMAIN", status: "error", latency: "—" }
];
export default function PropagationPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 900 }}>
        <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Activity style={{ color: "var(--color-accent-primary)" }} /> Propagation Checker</h1>
        <div className="card" style={{ padding: "var(--space-4)", marginBottom: "var(--space-6)", display: "flex", gap: "var(--space-3)" }}>
            <input type="text" className="input" placeholder="Enter domain to check... e.g. openclaw.dev" defaultValue="openclaw.dev" />
            <button className="btn btn-primary" style={{ whiteSpace: "nowrap" }}><Search size={16} /> Check Now</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {checks.map((c, i) => (
                <div key={i} className="card" style={{ padding: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-5)", borderLeft: `4px solid ${c.status === "resolved" ? "var(--color-success)" : c.status === "propagating" ? "var(--color-accent-primary)" : "var(--color-danger)"}` }}>
                    <span style={{ fontSize: "20px", width: 40 }}>{c.region.split(" ")[0]}</span>
                    <div style={{ flex: 1 }}><div style={{ fontWeight: 600 }}>{c.region.substring(3)}</div><div className="mono" style={{ color: "var(--color-text-secondary)", marginTop: 2 }}>{c.ip}</div></div>
                    <div style={{ textAlign: "right" }}><div style={{ fontWeight: 700, color: c.status === "resolved" ? "var(--color-success)" : c.status === "propagating" ? "var(--color-accent-primary)" : "var(--color-danger)", textTransform: "capitalize" }}>{c.status}</div><div className="mono" style={{ color: "var(--color-text-tertiary)", fontSize: "11px", marginTop: 2 }}>{c.latency}</div></div>
                </div>
            ))}
        </div>
    </div>);
}
