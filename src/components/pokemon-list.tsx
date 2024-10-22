import { FlatList, ActivityIndicator, StyleSheet, Text } from "react-native";
import type { ResponseModel } from "../types/response.model";
import Card from "./ui/card";
import NotFound from "./no-pokemons";

export default function PokemonList({
  loadPokemons,
  pokemons,
  nextUrl,
}: {
  loadPokemons: () => void;
  pokemons: ResponseModel[];
  nextUrl: string | null;
}) {
  return (
    <>
      <FlatList
        contentContainerStyle={{
          padding: 10,
        }}
        data={pokemons}
        ListEmptyComponent={() => <NotFound />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        onEndReached={nextUrl ? loadPokemons : null}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          nextUrl ? (
            <ActivityIndicator size={"large"} style={styles.spinner} />
          ) : null
        }
        renderItem={_renderItem}
      />
    </>
  );
}

const _renderItem = ({ item }: { item: ResponseModel }) => (
  <Card key={item.name} name={item.name} />
);

const styles = StyleSheet.create({
  spinner: {
    marginTop: 10,
    marginBottom: 10,
  },
});
