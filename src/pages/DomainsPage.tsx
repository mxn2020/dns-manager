import { Globe, Plus, ExternalLink } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";

const domains = [
    { id: "1", name: "openclaw.dev", status: "Active", records: 45, addedOn: "Oct 12, 2025" },
    { id: "2", name: "api.openclaw.dev", status: "Active", records: 12, addedOn: "Nov 04, 2025" },
    { id: "3", name: "app.openclaw.dev", status: "Active", records: 28, addedOn: "Nov 04, 2025" },
    { id: "4", name: "claw-workspace.co", status: "Pending Verification", records: 0, addedOn: "2 days ago" }
];

export default function DomainsPage() {
    return (<div style={{ padding: "var(--space-8)", maxWidth: 1000 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Globe style={{ color: "var(--color-accent-primary)" }} /> Domains</h1>
            <Button variant="primary" icon={<Plus size={16} />}>Add Domain</Button>
        </div>

        <div style={{ display: "grid", gap: "var(--space-4)" }}>
            {domains.map(d => (<Card key={d.id} padding="md" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderLeft: d.status === "Active" ? "3px solid var(--color-success)" : "3px solid var(--color-warning)" }}>
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: 4 }}>
                        <h3 style={{ fontSize: "var(--font-size-lg)", fontWeight: 700 }}>{d.name}</h3>
                        <Badge variant={d.status === "Active" ? "success" : "warning"}>{d.status}</Badge>
                    </div>
                    <div style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>
                        {d.records} records • Added {d.addedOn}
                    </div>
                </div>
                <div style={{ display: "flex", gap: "var(--space-2)" }}>
                    <Button variant="outline" size="sm">Manage Records</Button>
                    <Button variant="ghost" size="sm" icon={<ExternalLink size={16} />} />
                </div>
            </Card>))}
        </div>
    </div>);
}
