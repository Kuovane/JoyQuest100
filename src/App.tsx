import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import GameList from "@/pages/GameList";
import GameDetail from "@/pages/GameDetail";
import Favorites from "@/pages/Favorites";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GameList />} />
            <Route path="/games/:id" element={<GameDetail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
