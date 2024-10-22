import PokemonList from "../pokemon-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePokemons } from "../../hooks/usePokemons";
// TODO - import NetInfo from "@react-native-community/netinfo";

export default function Home() {
  const { loadPokemons, pokemons, nextUrl } = usePokemons();

  return (
    <SafeAreaView>
      <PokemonList
        loadPokemons={loadPokemons}
        pokemons={pokemons}
        nextUrl={nextUrl}
      />
    </SafeAreaView>
  );
}
