import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGameStore } from '../store/useGameStore';
import { GameCard } from '../components/GameCard';

export default function GameList() {
  const location = useLocation();
  const games = useGameStore((state) => state.games);
  const getAllCategories = useGameStore((state) => state.getAllCategories);

  const [selectedCategory, setSelectedCategory] = useState<string>(
    (location.state as { category?: string })?.category || '全部'
  );
  const [selectedAge, setSelectedAge] = useState<string>('全部');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('全部');

  const categories = ['全部', ...getAllCategories()];
  const ageRanges = ['全部', '2-6岁', '3-6岁', '4-8岁', '5-10岁', '5-12岁', '6-12岁', '7-12岁', '8-12岁'];
  const difficulties = ['全部', 'easy', 'medium', 'hard'];

  const filteredGames = games.filter((game) => {
    const categoryMatch =
      selectedCategory === '全部' || game.category === selectedCategory;
    const ageMatch = selectedAge === '全部' || game.ageRange === selectedAge;
    const difficultyMatch =
      selectedDifficulty === '全部' || game.difficulty === selectedDifficulty;
    return categoryMatch && ageMatch && difficultyMatch;
  });

  return (
    <div className="flex-1 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">全部游戏</h1>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                游戏分类
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                适合年龄
              </label>
              <select
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {ageRanges.map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                难度等级
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {difficulties.map((diff) => (
                  <option key={diff} value={diff}>
                    {diff === 'easy' ? '简单' : diff === 'medium' ? '中等' : diff === 'hard' ? '困难' : '全部'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            找到 <span className="font-bold text-orange-500">{filteredGames.length}</span> 个游戏
          </p>
        </div>

        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">没有找到游戏</h3>
            <p className="text-gray-600">试试调整筛选条件</p>
          </div>
        )}
      </div>
    </div>
  );
}
