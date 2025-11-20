import { Timer, ShieldCheck, ListChecks, Rocket } from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Floating Timer",
    desc: "Compact overlay timer you can place anywhere on screen. Set sessions and micro-breaks.",
  },
  {
    icon: ShieldCheck,
    title: "Whitelist Blocker",
    desc: "Block every distracting site by default. Only your allowed list gets through.",
  },
  {
    icon: ListChecks,
    title: "Session Goals",
    desc: "Define focus goals and track streaks. Gentle nudges keep you on track.",
  },
  {
    icon: Rocket,
    title: "One-Click Pause",
    desc: "Need a break? Pause protection temporarily with keyboard shortcut.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Designed for deep work</h2>
          <p className="mt-3 text-blue-200/90">Everything you need to focus — nothing you don't.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-slate-900/60 border border-white/10 p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-300 grid place-items-center">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
