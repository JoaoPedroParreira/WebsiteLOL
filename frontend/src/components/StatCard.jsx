export default function StatCard({ label, value, trend }) {
  return (
    <div className="glass-panel rounded-2xl p-4 flex flex-col gap-2 shadow-glow/30 hover:shadow-glow transition">
      <p className="text-xs text-white/60 uppercase tracking-[0.2em]">{label}</p>
      <div className="flex items-end gap-2">
        <p className="text-2xl font-semibold">{value}</p>
        {trend ? (
          <span className="text-xs text-emerald-300">{trend}</span>
        ) : null}
      </div>
    </div>
  );
}
