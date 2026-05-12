import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Game } from '../data/games';
import { useGameStore } from '../store/useGameStore';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const toggleFavorite = useGameStore((state) => state.toggleFavorite);
  const isFavorite = useGameStore((state) => state.isFavorite);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(game.id);
  };

  return (
    <Link
      to={`/games/${game.id}`}
      className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <button
            onClick={handleFavoriteClick}
            className={`p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-md ${
              isFavorite(game.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
            }`}
          >
            <Heart
              className={`w-5 h-5 ${isFavorite(game.id) ? 'fill-current' : ''}`}
            />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
            {game.category}
          </span>
          <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
            {game.ageRange}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
          {game.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{game.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {game.duration}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              game.difficulty === 'easy'
                ? 'bg-green-100 text-green-700'
                : game.difficulty === 'medium'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {game.difficulty === 'easy' ? '简单' : game.difficulty === 'medium' ? '中等' : '困难'}
          </span>
        </div>
      </div>
    </Link>
  );
}
