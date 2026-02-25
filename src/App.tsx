import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DomainsPage from "./pages/DomainsPage";
import RecordsPage from "./pages/RecordsPage";
import PropagationPage from "./pages/PropagationPage";
export default function App() {
  return (<BrowserRouter><div style={{ display: "flex" }}><Sidebar /><main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>
    <Routes>
      <Route path="/" element={<DomainsPage />} />
      <Route path="/records" element={<RecordsPage />} />
      <Route path="/propagation" element={<PropagationPage />} />
      <Route path="/changelog" element={<DomainsPage />} />
    </Routes>
  </main></div></BrowserRouter>);
}
