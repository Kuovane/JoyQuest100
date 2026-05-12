import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { games, Game } from '../data/games';

interface GameState {
  games: Game[];
  favorites: number[];
  toggleFavorite: (gameId: number) => void;
  isFavorite: (gameId: number) => boolean;
  getGameById: (id: number) => Game | undefined;
  getGamesByCategory: (category: string) => Game[];
  getAllCategories: () => string[];
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      games,
      favorites: [],
      toggleFavorite: (gameId: number) =>
        set((state) => ({
          favorites: state.favorites.includes(gameId)
            ? state.favorites.filter((id) => id !== gameId)
            : [...state.favorites, gameId],
        })),
      isFavorite: (gameId: number) => get().favorites.includes(gameId),
      getGameById: (id: number) => get().games.find((game) => game.id === id),
      getGamesByCategory: (category: string) =>
        get().games.filter((game) => game.category === category),
      getAllCategories: () =>
        [...new Set(get().games.map((game) => game.category))],
    }),
    {
      name: 'game-favorites-storage',
    }
  )
);
