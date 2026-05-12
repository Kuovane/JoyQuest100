export function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">100个亲子游戏</p>
          <p className="text-gray-400">
            创造美好回忆，陪伴孩子成长
          </p>
          <p className="text-gray-500 text-sm mt-4">
            © {new Date().getFullYear()} 100个亲子游戏. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
