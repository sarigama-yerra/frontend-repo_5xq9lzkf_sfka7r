import { useState } from "react";

export default function CTA({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await onSubmit({ email, name });
      setStatus("success");
      setEmail("");
      setName("");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  return (
    <section id="early" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Get early access</h3>
          <p className="mt-2 text-blue-200/90">Join the list and be the first to install the beta.</p>
          <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3">
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name (optional)" className="w-full rounded-xl bg-slate-800/70 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" className="w-full rounded-xl bg-slate-800/70 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            <button disabled={status==="loading"} className="sm:col-span-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:opacity-90 disabled:opacity-60">{status==="loading"?"Joining...":"Join the waitlist"}</button>
          </form>
          {status==="success" && <p className="mt-3 text-emerald-300">You're in! We'll email you soon.</p>}
          {status==="error" && <p className="mt-3 text-red-300">Something went wrong. Try again.</p>}
        </div>
      </div>
    </section>
  );
}
