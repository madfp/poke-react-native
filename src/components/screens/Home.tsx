import { SafeAreaView } from "react-native";
import PokemonList from "../pokemon-list";
import { usePokemons } from "../../hooks/usePokemon";

export default function Home() {
  const pokemons = usePokemons();
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
}
