import { SafeAreaView } from "react-native";
import PokemonList from "../pokemon-list";
import { ResponseModel } from "../../types/response.model";
import { useEffect, useState } from "react";
import { getPokemons } from "../../services/api";

export default function Home() {
  const [pokemons, setPokemons] = useState<ResponseModel[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  const loadPokemons = () => {
    getPokemons(nextUrl).then((res) => {
      setPokemons([...pokemons, ...res.results]);
      setNextUrl(res.next);
    });
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        nextUrl={nextUrl}
      />
    </SafeAreaView>
  );
}
