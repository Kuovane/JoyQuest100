import { Link } from 'react-router-dom';
import { useGameStore } from '../store/useGameStore';
import { GameCard } from '../components/GameCard';

export default function Favorites() {
  const games = useGameStore((state) => state.games);
  const favorites = useGameStore((state) => state.favorites);

  const favoriteGames = games.filter((game) => favorites.includes(game.id));

  return (
    <div className="flex-1 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">我的收藏</h1>
          <span className="text-gray-600">
            共 <span className="font-bold text-orange-500">{favoriteGames.length}</span> 个游戏
          </span>
        </div>

        {favoriteGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">💔</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">还没有收藏任何游戏</h3>
            <p className="text-gray-600 mb-6">
              浏览游戏并收藏您喜欢的
            </p>
            <Link
              to="/games"
              className="inline-block bg-orange-500 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-orange-600 transition-colors"
            >
              浏览全部游戏
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
