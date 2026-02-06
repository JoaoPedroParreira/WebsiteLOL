import SectionTitle from "../components/SectionTitle.jsx";
import StatCard from "../components/StatCard.jsx";
import SkeletonBlock from "../components/SkeletonBlock.jsx";

const highlights = [
  { label: "Meta Champions", value: "28", trend: "+6%" },
  { label: "Patch Atual", value: "14.18" },
  { label: "Jogos analisados", value: "1.2M" }
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-accent">Lol insights</p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Domina a SoloQ com dados ao vivo, builds e matchups premium.
          </h1>
          <p className="text-white/70">
            Análises avançadas por role, elo e patch. Tudo o que precisas para
            subir de rank com confiança.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-accent hover:bg-accent-soft transition px-6 py-3 rounded-full text-sm font-semibold">
              Ver Tier List
            </button>
            <button className="border border-white/20 hover:border-white/50 transition px-6 py-3 rounded-full text-sm font-semibold">
              Explorar Matchups
            </button>
          </div>
        </div>
        <div className="glass-panel rounded-3xl p-6 space-y-4">
          <SectionTitle
            title="Destaques do Meta"
            subtitle="Atualizado em tempo real com a Riot API."
          />
          <div className="grid gap-4">
            {highlights.map((item) => (
              <StatCard key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="glass-panel rounded-2xl p-6 space-y-4">
          <SectionTitle title="Champion Rotation" subtitle="Live" />
          <SkeletonBlock className="h-28" />
          <SkeletonBlock className="h-28" />
        </div>
        <div className="glass-panel rounded-2xl p-6 space-y-4">
          <SectionTitle title="Tier List" subtitle="Por role" />
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <SkeletonBlock className="h-10 w-10 rounded-full" />
                  <SkeletonBlock className="h-4 w-24" />
                </div>
                <SkeletonBlock className="h-4 w-12" />
              </div>
            ))}
          </div>
        </div>
        <div className="glass-panel rounded-2xl p-6 space-y-4">
          <SectionTitle title="Pro Players" subtitle="Trending" />
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                <SkeletonBlock className="h-10 w-10 rounded-full" />
                <div className="flex-1">
                  <SkeletonBlock className="h-4 w-32" />
                  <SkeletonBlock className="h-3 w-24 mt-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
