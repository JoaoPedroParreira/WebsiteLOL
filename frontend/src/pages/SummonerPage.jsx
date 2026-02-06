import SectionTitle from "../components/SectionTitle.jsx";

const recentMatches = [
  { id: 1, result: "Vitória", champion: "Ahri", kda: "12/4/9" },
  { id: 2, result: "Derrota", champion: "Jinx", kda: "7/6/5" },
  { id: 3, result: "Vitória", champion: "Kai'Sa", kda: "10/2/8" }
];

const topChamps = [
  { name: "Ahri", games: 42 },
  { name: "Jinx", games: 35 },
  { name: "Lux", games: 28 }
];

export default function SummonerPage() {
  return (
    <div className="space-y-8">
      <SectionTitle
        title="Summoner Search"
        subtitle="Procura jogadores, analisa ranks e últimas partidas."
      />

      <div className="glass-panel rounded-2xl p-6 grid md:grid-cols-[1.2fr_0.8fr] gap-6">
        <div className="space-y-4">
          <p className="text-sm text-white/60">Jogador encontrado</p>
          <h2 className="text-3xl font-semibold">Shadowcarry</h2>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-full bg-accent/20 text-sm">Rank: Diamond II</div>
            <div className="px-4 py-2 rounded-full bg-white/10 text-sm">Winrate: 58%</div>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm text-white/60">Champions mais jogados</p>
          {topChamps.map((champion) => (
            <div key={champion.name} className="flex items-center justify-between">
              <p>{champion.name}</p>
              <span className="text-xs text-white/60">{champion.games} jogos</span>
            </div>
          ))}
        </div>
      </div>

      <section className="glass-panel rounded-2xl p-6 space-y-4">
        <SectionTitle title="Últimos Jogos" subtitle="Resultados recentes" />
        <div className="space-y-3">
          {recentMatches.map((match) => (
            <div key={match.id} className="flex items-center justify-between border border-white/5 rounded-xl px-4 py-3">
              <div>
                <p className="font-semibold">{match.result}</p>
                <p className="text-xs text-white/60">Champion: {match.champion}</p>
              </div>
              <div className="text-sm">KDA {match.kda}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
