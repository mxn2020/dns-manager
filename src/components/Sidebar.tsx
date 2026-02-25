import { Link, useLocation } from "react-router-dom";
import { Globe, Settings, Activity, History } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: Globe, label: "My Domains" },
        { to: "/records", icon: Settings, label: "DNS Records" },
        { to: "/propagation", icon: Activity, label: "Propagation" },
        { to: "/changelog", icon: History, label: "Changelog" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-card)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column", boxShadow: "1px 0 0 var(--color-border)" }}>
        <div style={{ padding: "var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border)" }}>
            <div style={{ width: 32, height: 32, background: "var(--color-accent-primary)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}><Globe size={18} style={{ color: "white" }} /></div>
            <strong style={{ fontSize: "1rem", fontWeight: 700 }}>DNS Manager</strong>
        </div>
        <nav style={{ padding: "var(--space-3)", flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "var(--space-2) var(--space-3)", borderRadius: "var(--radius-sm)", color: loc.pathname === l.to ? "var(--color-accent-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-accent-soft)" : "transparent", fontWeight: loc.pathname === l.to ? 600 : 400, fontSize: "14px", transition: "all var(--transition-fast)" }}><l.icon size={16} />{l.label}</Link>)}
        </nav>
        <div style={{ padding: "var(--space-4)", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "flex-end" }}><ThemeToggle /></div>
    </aside>);
}
