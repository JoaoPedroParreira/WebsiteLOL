import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="glass-panel flex items-center gap-3 rounded-full px-4 py-2 w-full md:w-96">
      <span className="text-white/60">🔍</span>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Pesquisar champion ou summoner"
        className="bg-transparent outline-none flex-1 text-sm"
      />
      <button className="text-xs font-semibold text-accent hover:text-accent-soft transition">
        Buscar
      </button>
    </div>
  );
}
