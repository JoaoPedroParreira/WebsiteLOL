import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

export default function Navbar({ tabs }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-midnight/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="LoL Insights" className="h-10 w-10" />
          <div>
            <p className="text-lg font-semibold">LoL Insights</p>
            <p className="text-xs text-white/60">Data-driven esports hub</p>
          </div>
        </div>
        <SearchBar />
      </div>
      <nav className="border-t border-white/10">
        <ul className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap gap-6 text-sm font-medium">
          {tabs.map((tab) => (
            <li key={tab.label}>
              <NavLink
                to={tab.href}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-accent"
                      : "text-white/70 hover:text-white"
                  }`
                }
              >
                {tab.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
