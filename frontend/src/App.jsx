import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import TierListPage from "./pages/TierListPage.jsx";
import ChampionPage from "./pages/ChampionPage.jsx";
import SummonerPage from "./pages/SummonerPage.jsx";

const tabs = [
  { label: "Champions", href: "/" },
  { label: "Tier List", href: "/tier-list" },
  { label: "Builds", href: "/champion/ahri" },
  { label: "Matchups", href: "/champion/ahri" },
  { label: "Players", href: "/summoner" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-midnight text-white">
      <Navbar tabs={tabs} />
      <main className="pt-28 pb-16 px-6 md:px-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tier-list" element={<TierListPage />} />
          <Route path="/champion/:name" element={<ChampionPage />} />
          <Route path="/summoner" element={<SummonerPage />} />
        </Routes>
      </main>
    </div>
  );
}
