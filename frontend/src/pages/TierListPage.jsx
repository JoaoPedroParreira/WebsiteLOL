import SectionTitle from "../components/SectionTitle.jsx";

const roles = ["Top", "Jungle", "Mid", "ADC", "Support"];
const tierData = [
  { name: "Ahri", role: "Mid", winrate: "52.1%", pickrate: "13.4%", banrate: "7.2%" },
  { name: "Jinx", role: "ADC", winrate: "51.3%", pickrate: "18.9%", banrate: "12.1%" },
  { name: "Kha'Zix", role: "Jungle", winrate: "53.4%", pickrate: "9.1%", banrate: "6.4%" },
  { name: "Aatrox", role: "Top", winrate: "50.9%", pickrate: "11.7%", banrate: "14.5%" }
];

export default function TierListPage() {
  return (
    <div className="space-y-8">
      <SectionTitle
        title="Tier List por Role"
        subtitle="Filtra por patch, elo e role para descobrir o meta atual."
      />

      <div className="flex flex-wrap gap-3">
        {roles.map((role) => (
          <button
            key={role}
            className="px-4 py-2 rounded-full border border-white/20 text-sm hover:border-accent hover:text-accent transition"
          >
            {role}
          </button>
        ))}
        <select className="bg-panel border border-white/10 rounded-full px-4 py-2 text-sm">
          <option>Patch 14.18</option>
          <option>Patch 14.17</option>
        </select>
        <select className="bg-panel border border-white/10 rounded-full px-4 py-2 text-sm">
          <option>Elo: Platinum+</option>
          <option>Elo: Diamond+</option>
        </select>
      </div>

      <div className="grid gap-4">
        {tierData.map((champion) => (
          <div
            key={champion.name}
            className="glass-panel rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:border-accent/40 border border-white/5 transition"
          >
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-xl bg-accent/20 flex items-center justify-center text-xl font-semibold">
                {champion.name.slice(0, 1)}
              </div>
              <div>
                <p className="text-lg font-semibold">{champion.name}</p>
                <p className="text-sm text-white/60">Role: {champion.role}</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <div>
                <p className="text-white/60">Winrate</p>
                <p className="font-semibold text-emerald-300">{champion.winrate}</p>
              </div>
              <div>
                <p className="text-white/60">Pickrate</p>
                <p className="font-semibold">{champion.pickrate}</p>
              </div>
              <div>
                <p className="text-white/60">Banrate</p>
                <p className="font-semibold text-rose-300">{champion.banrate}</p>
              </div>
            </div>
            <button className="ml-auto px-4 py-2 rounded-full border border-white/20 text-xs hover:border-accent hover:text-accent transition">
              Ver build
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
