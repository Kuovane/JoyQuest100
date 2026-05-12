import { useParams, Link } from 'react-router-dom';
import { Heart, ArrowLeft, Clock, Users, Award } from 'lucide-react';
import { useGameStore } from '../store/useGameStore';

export default function GameDetail() {
  const { id } = useParams<{ id: string }>();
  const getGameById = useGameStore((state) => state.getGameById);
  const toggleFavorite = useGameStore((state) => state.toggleFavorite);
  const isFavorite = useGameStore((state) => state.isFavorite);

  const game = getGameById(parseInt(id || '0'));

  if (!game) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎮</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">游戏未找到</h2>
          <Link
            to="/games"
            className="text-orange-500 font-semibold hover:text-orange-600"
          >
            返回游戏列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      {/* Hero Image */}
      <div className="relative">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-64 sm:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
                {game.category}
              </span>
              <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded-full">
                {game.ageRange}
              </span>
              <span
                className={`px-3 py-1 text-white text-sm font-semibold rounded-full ${
                  game.difficulty === 'easy'
                    ? 'bg-green-600'
                    : game.difficulty === 'medium'
                    ? 'bg-yellow-600'
                    : 'bg-red-600'
                }`}
              >
                {game.difficulty === 'easy' ? '简单' : game.difficulty === 'medium' ? '中等' : '困难'}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">{game.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button and Favorite */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/games"
            className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            返回游戏列表
          </Link>
          <button
            onClick={() => toggleFavorite(game.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isFavorite(game.id)
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite(game.id) ? 'fill-current' : ''}`} />
            {isFavorite(game.id) ? '已收藏' : '收藏'}
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">游戏时长</p>
              <p className="font-bold text-gray-800">{game.duration}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">适合年龄</p>
              <p className="font-bold text-gray-800">{game.ageRange}</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">难度等级</p>
              <p className="font-bold text-gray-800">
                {game.difficulty === 'easy' ? '简单' : game.difficulty === 'medium' ? '中等' : '困难'}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">游戏介绍</h2>
          <p className="text-gray-600 leading-relaxed">{game.description}</p>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">教育意义</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {game.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-700"
              >
                <span className="text-green-500">✓</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Materials */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">需要准备</h2>
          <div className="flex flex-wrap gap-2">
            {game.materials.map((material, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
              >
                {material}
              </span>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">游戏步骤</h2>
          <div className="space-y-4">
            {game.steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
