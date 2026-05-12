import { Link } from 'react-router-dom';
import { useGameStore } from '../store/useGameStore';
import { GameCard } from '../components/GameCard';
import { GameCategory } from '../components/GameCategory';

export default function Home() {
  const games = useGameStore((state) => state.games);
  const getAllCategories = useGameStore((state) => state.getAllCategories);

  const categories = getAllCategories();
  const featuredGames = games.slice(0, 8);

  const categoryIcons = [
    { name: '创造力游戏', icon: '🎨', color: 'bg-gradient-to-br from-pink-400 to-pink-600' },
    { name: '运动游戏', icon: '⚽', color: 'bg-gradient-to-br from-green-400 to-green-600' },
    { name: '智力游戏', icon: '🧩', color: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    { name: '协作游戏', icon: '👨‍👩‍👧‍👦', color: 'bg-gradient-to-br from-purple-400 to-purple-600' },
    { name: '艺术游戏', icon: '🎭', color: 'bg-gradient-to-br from-yellow-400 to-yellow-600' },
    { name: '科学探索', icon: '🔬', color: 'bg-gradient-to-br from-cyan-400 to-cyan-600' },
    { name: '户外游戏', icon: '🏕️', color: 'bg-gradient-to-br from-orange-400 to-orange-600' },
    { name: '室内游戏', icon: '🏠', color: 'bg-gradient-to-br from-indigo-400 to-indigo-600' },
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in">
            100个亲子游戏
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-white/90">
            创造美好回忆，陪伴孩子成长
          </p>
          <Link
            to="/games"
            className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            开始探索
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">游戏分类</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => {
              const iconData = categoryIcons.find((c) => c.name === category) || {
                icon: '🎮',
                color: 'bg-gradient-to-br from-gray-400 to-gray-600',
              };
              return (
                <GameCategory
                  key={category}
                  name={category}
                  icon={iconData.icon}
                  color={iconData.color}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Games Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">精选游戏</h2>
            <Link
              to="/games"
              className="text-orange-500 font-semibold hover:text-orange-600 transition-colors flex items-center gap-1"
            >
              查看全部
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">为什么选择我们</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center text-3xl">
                👨‍👩‍👧‍👦
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">增进亲子关系</h3>
              <p className="text-gray-600">
                通过有趣的游戏互动，建立更紧密的家庭纽带
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                🧠
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">促进全面发展</h3>
              <p className="text-gray-600">
                覆盖认知、运动、社交等多方面能力培养
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center text-3xl">
                🎉
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">轻松有趣</h3>
              <p className="text-gray-600">
                简单易懂的玩法，随时随地都能开始游戏
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
