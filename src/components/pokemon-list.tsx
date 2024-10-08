import { FlatList, ActivityIndicator, StyleSheet } from "react-native";
import type { ResponseModel } from "../types/response.model";
import Card from "./ui/card";

export default function PokemonList({
  pokemons,
  loadPokemons,
  nextUrl,
}: {
  pokemons: ResponseModel[];
  loadPokemons: () => void;
  nextUrl: string | null;
}) {
  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.name}
      onEndReached={nextUrl ? loadMore : null} // This is the function that will be called when the end of the list is reached
      onEndReachedThreshold={0.1} // This is the threshold to call the function
      ListFooterComponent={
        nextUrl ? (
          <ActivityIndicator size={"large"} style={styles.spinner} />
        ) : null
      }
      renderItem={({ item }) => (
        <Card key={item.name} name={item.name} linkenable />
      )}
    />
  );
}

const styles = StyleSheet.create({
  spinner: {
    marginTop: 10,
    marginBottom: 10,
  },
});
