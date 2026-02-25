import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import DomainsPage from "../pages/DomainsPage"; import RecordsPage from "../pages/RecordsPage"; import PropagationPage from "../pages/PropagationPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }
describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("DNS Manager")).toBeInTheDocument(); });
    it("DomainsPage renders", () => { wrap(<DomainsPage />); expect(screen.getByText("openclaw.dev")).toBeInTheDocument(); });
    it("RecordsPage renders", () => { wrap(<RecordsPage />); expect(screen.getByText("DNS Records")).toBeInTheDocument(); });
    it("PropagationPage renders", () => { wrap(<PropagationPage />); expect(screen.getByText("Propagation Checker")).toBeInTheDocument(); });
});
