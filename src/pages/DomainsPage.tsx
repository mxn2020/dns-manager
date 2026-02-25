import { Globe, Plus, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
const domains = [
    { id: "1", name: "openclaw.dev", provider: "Cloudflare", records: 12, verified: true, updated: "10 min ago" },
    { id: "2", name: "the-mehdi.com", provider: "Namecheap", records: 8, verified: true, updated: "2 hours ago" },
    { id: "3", name: "minions.sh", provider: "Cloudflare", records: 6, verified: false, updated: "3 days ago" }
];
export default function DomainsPage() {
    return (<div style={{ padding: "var(--space-6)", maxWidth: 1000 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Globe style={{ color: "var(--color-accent-primary)" }} /> My Domains</h1>
            <button className="btn btn-primary"><Plus size={16} /> Add Domain</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {domains.map(d => (
                <div key={d.id} className="card" style={{ padding: "var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
                    <div style={{ flex: 1 }}>
                        <Link to="/records" style={{ fontSize: "18px", fontWeight: 700, fontFamily: "var(--font-mono)", color: "var(--color-accent-primary)" }}>{d.name}</Link>
                        <div style={{ display: "flex", gap: "var(--space-4)", marginTop: "var(--space-2)" }}>
                            <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>{d.provider}</span>
                            <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>{d.records} records</span>
                            <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>Updated {d.updated}</span>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                        {d.verified ? <><CheckCircle size={16} style={{ color: "var(--color-success)" }} /><span style={{ fontSize: "13px", color: "var(--color-success)", fontWeight: 500 }}>Verified</span></> : <><Shield size={16} style={{ color: "var(--color-danger)" }} /><span style={{ fontSize: "13px", color: "var(--color-danger)", fontWeight: 500 }}>Unverified</span></>}
                    </div>
                    <Link to="/records" className="btn btn-sm">Manage Records</Link>
                </div>
            ))}
        </div>
    </div>);
}
