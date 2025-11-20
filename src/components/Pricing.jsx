export default function Pricing({ onPreorder }) {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Early-bird pricing</h2>
          <p className="mt-3 text-blue-200/90">Secure your spot and get launch perks.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
            <h3 className="text-white font-semibold">Pro Monthly</h3>
            <p className="mt-1 text-sm text-blue-200/80">Full features • Cancel anytime</p>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl font-bold text-white">$5</span>
              <span className="text-blue-200/70">/mo</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-blue-200/90">
              <li>• Floating timer + whitelist blocker</li>
              <li>• Unlimited sites</li>
              <li>• Keyboard shortcuts</li>
            </ul>
            <button onClick={() => onPreorder({ plan: "pro_monthly", price_cents: 500 })} className="mt-6 w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:opacity-90">Pre-purchase</button>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-400/30 p-6">
            <h3 className="text-white font-semibold">Early Lifetime</h3>
            <p className="mt-1 text-sm text-blue-200/80">Limited quantity • One-time payment</p>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl font-bold text-white">$29</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-blue-200/90">
              <li>• All Pro features</li>
              <li>• Early adopter badge</li>
              <li>• Priority feature requests</li>
            </ul>
            <button onClick={() => onPreorder({ plan: "early_lifetime", price_cents: 2900 })} className="mt-6 w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:opacity-90">Pre-purchase</button>
          </div>
        </div>
      </div>
    </section>
  );
}
