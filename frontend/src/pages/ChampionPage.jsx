import { useParams } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const eloStats = [
  { name: "Gold", winrate: 51 },
  { name: "Platinum", winrate: 52 },
  { name: "Diamond", winrate: 53 },
  { name: "Master+", winrate: 54 }
];

const builds = [
  { title: "Core Items", items: ["Luden", "Shadowflame", "Rabadon"] },
  { title: "Runes", items: ["Eletrocutar", "Gosto de Sangue", "Globos" ] },
  { title: "Skill Order", items: ["Q", "W", "E"] }
];

const matchups = {
  good: ["Twisted Fate", "Viktor", "Veigar"],
  bad: ["Syndra", "Zed", "Leblanc"]
};

export default function ChampionPage() {
  const { name } = useParams();

  return (
    <div className="space-y-10">
      <section className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-40" />
        <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row md:items-end gap-6">
          <div className="glass-panel rounded-2xl p-4 h-24 w-24 flex items-center justify-center text-3xl font-semibold">
            {name?.slice(0, 1).toUpperCase()}
          </div>
          <div>
            <p className="text-sm text-white/60">Champion</p>
            <h1 className="text-4xl font-semibold capitalize">{name}</h1>
            <p className="text-white/70">
              Splash art e estatísticas detalhadas por elo.
            </p>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
        <div className="glass-panel rounded-2xl p-6 space-y-4">
          <SectionTitle title="Winrate por Elo" subtitle="Dados do patch atual." />
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={eloStats}>
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" domain={[48, 56]} />
                <Tooltip contentStyle={{ background: "#0b0f1a", border: "1px solid #2b3645" }} />
                <Line type="monotone" dataKey="winrate" stroke="#8c7bff" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="glass-panel rounded-2xl p-6 space-y-4">
          <SectionTitle title="Matchups" subtitle="Bons e maus confrontos" />
          <div className="space-y-4">
            <div>
              <p className="text-sm text-emerald-300">Favorecidos</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {matchups.good.map((champion) => (
                  <span key={champion} className="px-3 py-1 rounded-full bg-emerald-400/20 text-xs">
                    {champion}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-rose-300">Difíceis</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {matchups.bad.map((champion) => (
                  <span key={champion} className="px-3 py-1 rounded-full bg-rose-400/20 text-xs">
                    {champion}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {builds.map((build) => (
          <div key={build.title} className="glass-panel rounded-2xl p-6 space-y-4">
            <SectionTitle title={build.title} />
            <div className="space-y-3">
              {build.items.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    {item.slice(0, 1)}
                  </div>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
