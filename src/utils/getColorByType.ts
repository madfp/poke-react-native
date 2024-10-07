import { POKEMON_TYPE_COLORS } from "./constants";
import { POKEMON_COLORS } from "../types/pokemon.color.model";

export const getColorByType = (value: POKEMON_COLORS) =>
  POKEMON_TYPE_COLORS[value];
