import { Link } from 'react-router-dom';

interface GameCategoryProps {
  name: string;
  icon: string;
  color: string;
}

export function GameCategory({ name, icon, color }: GameCategoryProps) {
  return (
    <Link
      to="/games"
      state={{ category: name }}
      className="group bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div
        className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl ${color} group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <h3 className="font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
        {name}
      </h3>
    </Link>
  );
}
