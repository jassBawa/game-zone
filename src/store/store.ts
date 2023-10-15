import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  // filter by text
  setSearchText: (searchText) =>
    set(() => ({
      gameQuery: {
        searchText,
      },
    })),

  // filter by genreid

  setGenreId: (genreId) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        genreId,
      },
    })),

  // filter by platformid
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        platformId,
      },
    })),

  // filter by sortorder
  setSortOrder: (sortOrder) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        sortOrder,
      },
    })),
}));

export default useGameQueryStore;
