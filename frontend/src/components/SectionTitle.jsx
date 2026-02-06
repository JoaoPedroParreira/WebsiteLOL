export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {subtitle ? <p className="text-sm text-white/60">{subtitle}</p> : null}
    </div>
  );
}
