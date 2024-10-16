import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function ClearPokemons() {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    throw error;
  }
}

export async function AddPokemonToFavorites(id: string) {
  try {
    // Get the pokemons
    const favorites = await GetFavoritePokemons();

    favorites.push(id);

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
    const coincidence = await GetFavoritePokemons();
    return coincidence.includes(id);
  } catch (error) {
    throw error;
  }
}

export async function DeleteFavoritePokemon(id: string) {
  try {
    // Get all the pokemons
    const data = await GetFavoritePokemons();

    // Create a new array without the id of the pokemon
    const result = data.filter((value: string) => {
      value != id;
    });

    // Set the new array on async storage
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(result));
  } catch (error) {
    throw error;
  }
}
