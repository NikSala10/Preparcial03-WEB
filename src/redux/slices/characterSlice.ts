import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Character = {
  id: number | string;
  name: string;
  status: string;
  species: string;
  image?: string
};

type InitialState = {
  characters: Character[];
  favorites: Character[];
};

//Estado inicial
const initialState: InitialState = {
  characters: [],
  favorites: [],
};

export const CharacterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacter(state, action: PayloadAction<Character[]>) {
      state.characters = action.payload;
    },
    addCharacter: (state, action: PayloadAction<Character>) => {
      state.characters = [...state.characters, action.payload];
    },
     editCharacter: (state, action: PayloadAction<Character>) => {
      state.characters = state.characters.map((t) =>
        t.id === action.payload.id ? action.payload : t
      );
    },

    deleteCharacter: (state, action: PayloadAction<number | string>) => {
    state.characters = state.characters.filter(
      (character) => character.id !== action.payload
    );
    },
     addFavorites: (state, action: PayloadAction<Character>) => {
      state.favorites = [...state.favorites, action.payload];
    },
  },
});

export const { setCharacter, addCharacter, editCharacter, deleteCharacter, addFavorites } = CharacterSlice.actions;
export default CharacterSlice.reducer;
