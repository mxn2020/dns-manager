import { List, Plus, Search } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";

const records = [
    { id: "1", type: "A", name: "@", value: "198.51.100.42", ttl: "Auto", proxied: true },
    { id: "2", type: "CNAME", name: "www", value: "openclaw.dev", ttl: "Auto", proxied: true },
    { id: "3", type: "MX", name: "@", value: "mx.mailguard.com", ttl: "10 min", proxied: false },
    { id: "4", type: "TXT", name: "_dmarc", value: "v=DMARC1; p=quarantine;", ttl: "10 min", proxied: false },
    { id: "5", type: "A", name: "api", value: "192.0.2.14", ttl: "Auto", proxied: true }
];

export default function RecordsPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: 4 }}><List style={{ color: "var(--color-accent-primary)" }} /> DNS Records</h1>
                <p style={{ color: "var(--color-text-secondary)" }}>openclaw.dev</p>
            </div>
            <Button variant="primary" icon={<Plus size={16} />}>Add Record</Button>
        </div>

        <Card padding="none">
            <div style={{ padding: "var(--space-4)", borderBottom: "1px solid var(--color-border)", display: "flex", gap: "var(--space-2)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", background: "var(--color-bg-secondary)", padding: "6px 12px", borderRadius: 6, flex: 1 }}>
                    <Search size={16} style={{ color: "var(--color-text-tertiary)" }} />
                    <input type="text" placeholder="Search records..." style={{ background: "transparent", border: "none", outline: "none", color: "var(--color-text-primary)", width: "100%" }} />
                </div>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ borderBottom: "1px solid var(--color-border)", background: "var(--color-bg-secondary)" }}>
                        <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Type</th>
                        <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Name</th>
                        <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Value</th>
                        <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>TTL</th>
                        <th style={{ textAlign: "left", padding: "12px 16px", fontSize: "12px", textTransform: "uppercase", color: "var(--color-text-secondary)" }}>Proxy</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map(r => (<tr key={r.id} style={{ borderBottom: "1px solid var(--color-border)" }}>
                        <td style={{ padding: "12px 16px", fontWeight: 600 }}><span style={{ color: "var(--color-accent-primary)" }}>{r.type}</span></td>
                        <td style={{ padding: "12px 16px", fontSize: "14px", fontWeight: 500 }}>{r.name}</td>
                        <td style={{ padding: "12px 16px", fontSize: "13px" }}><span className="mono" style={{ color: "var(--color-text-secondary)" }}>{r.value}</span></td>
                        <td style={{ padding: "12px 16px", fontSize: "13px" }}>{r.ttl}</td>
                        <td style={{ padding: "12px 16px" }}><Badge variant={r.proxied ? "info" : "secondary"}>{r.proxied ? "Proxied" : "DNS Only"}</Badge></td>
                    </tr>))}
                </tbody>
            </table>
        </Card>
    </div>);
}
