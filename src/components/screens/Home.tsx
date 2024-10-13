import { ResponseModel } from "../../types/response.model";
import { useEffect, useState } from "react";
import { getPokemons } from "../../services/api";
import NetInfo from "@react-native-community/netinfo";
import PokemonList from "../pokemon-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

export default function Home() {
  const [pokemons, setPokemons] = useState<ResponseModel[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [connected, setConnected] = useState<boolean>(false);

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
    <SafeAreaView>
      <PokemonList
        loadPokemons={loadPokemons}
        nextUrl={nextUrl}
        pokemons={pokemons}
      />
    </SafeAreaView>
  );
}
