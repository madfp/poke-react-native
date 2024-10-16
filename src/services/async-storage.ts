import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function AddPokemonToFavorites(id: string) {
  try {
    // Get the pokemons
    const favorites = await GetFavoritePokemons();

    // verify if is already in favorites
    favorites.includes(id) && favorites.push(id);

    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function GetFavoritePokemons() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return response ? JSON.parse(response) : [];
  } catch (error) {
    throw error;
  }
}

export async function CheckFavoritePokemon(id: string) {
  try {
    const coincidence = await AsyncStorage.getItem(id.toString());
    return coincidence ? true : false;
  } catch (error) {
    throw error;
  }
}

export async function DeleteFavoritePokemon(id: string) {
  try {
    await AsyncStorage.removeItem(id);
  } catch (error) {
    throw error;
  }
}
