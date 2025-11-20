import { useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

async function postJSON(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}

function App() {
  const handleJoin = useCallback(() => {
    const el = document.getElementById("early");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const submitLead = useCallback(async ({ email, name }) => {
    await postJSON("/api/leads", { email, name, consent: true });
  }, []);

  const handlePreorder = useCallback(async ({ plan, price_cents }) => {
    const email = prompt("Enter your email to reserve this price:");
    if (!email) return;
    await postJSON("/api/preorders", { email, plan, price_cents });
    alert("Preorder recorded! We'll email you checkout details at launch.");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_10%,rgba(59,130,246,0.2),transparent),radial-gradient(600px_300px_at_80%_20%,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
      <Navbar />
      <Hero onJoin={handleJoin} />
      <Features />
      <Pricing onPreorder={handlePreorder} />
      <CTA onSubmit={submitLead} />
      <footer className="py-10 text-center text-blue-200/60">© {new Date().getFullYear()} TimeGuard</footer>
    </div>
  );
}

export default App;
