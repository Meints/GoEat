import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DetalhesState } from "./types";
import { Restaurante } from "../listagem/types";

const initialState: DetalhesState = {
  restaurante: {
    name: "",
    address: "",
    image: "",
    rating: 0,
    cnpj: "",
    availableTables: 0,
    description: "",
  },
};

const detalhesSlice = createSlice({
  name: "leadManager",
  initialState,
  reducers: {
    receiveRestaurante: (state, action: PayloadAction<Restaurante>) => {
      state.restaurante = action.payload;
    },
  },
});

export const detalhesReducer = detalhesSlice.reducer;
export const detalhesActions = detalhesSlice.actions;
