import UseFavoritePokemon from "../../hooks/useFavoritePokemon";
import { Text } from "react-native";
import PokemonList from "../pokemon-list";

export default function Favorites() {
  const { favorites, loadPokemons } = UseFavoritePokemon();
  return (
    <PokemonList
      loadPokemons={loadPokemons}
      nextUrl={""}
      pokemons={favorites}
    />
  );
}
