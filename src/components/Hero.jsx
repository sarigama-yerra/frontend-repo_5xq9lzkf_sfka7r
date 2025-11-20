export default function Hero({ onJoin }) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-blue-200">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Early Access • Limited spots
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Stay focused with a floating timer and whitelist blocker
          </h1>
          <p className="mt-4 text-lg text-blue-200/90">
            TimeGuard helps you time sessions, block distracting sites, and keep only your whitelisted pages accessible — right from your Chrome toolbar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onJoin} className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:opacity-90 transition">
              Join early access
            </button>
            <a href="#pricing" className="px-5 py-3 rounded-xl bg-slate-800/70 text-white border border-white/10 hover:bg-slate-700 transition text-center">
              Pre-purchase now
            </a>
          </div>
          <p className="mt-3 text-sm text-blue-200/70">Be first in line • Get launch discount</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-10 bg-gradient-to-tr from-blue-500/20 to-indigo-500/10 blur-3xl" />
          <div className="relative rounded-2xl bg-slate-900/60 border border-white/10 p-4">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-900">
              <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-blue-200">timeguard.app</span>
              </div>
              <div className="aspect-video grid place-items-center text-center p-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-300 px-3 py-1 text-xs mb-4">Whitelist active</div>
                  <p className="text-blue-100 max-w-md mx-auto">Minimal floating timer overlays your work and blocks everything not on your whitelist. Pause and resume with one click.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
