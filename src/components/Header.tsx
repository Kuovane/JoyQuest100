import { Link } from 'react-router-dom';
import { Home, Grid, Heart } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-orange-500 font-bold text-lg">游</span>
            </div>
            <span className="text-xl font-bold">100个亲子游戏</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors"
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline">首页</span>
            </Link>
            <Link
              to="/games"
              className="flex items-center space-x-2 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors"
            >
              <Grid className="w-5 h-5" />
              <span className="hidden sm:inline">全部游戏</span>
            </Link>
            <Link
              to="/favorites"
              className="flex items-center space-x-2 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors"
            >
              <Heart className="w-5 h-5" />
              <span className="hidden sm:inline">收藏</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
