import { View, FlatList } from "react-native";
import type { ResponseModel } from "../types/response.model";
import Card from "./ui/card";

export default function PokemonList({
  pokemons,
}: {
  pokemons: ResponseModel[];
}) {
  return (
    <FlatList
      data={pokemons}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <Card key={item.name} name={item.name} linkenable />
      )}
    />
  );
}
