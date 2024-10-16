import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
} from "react-native";
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
    <>
      <FlatList
        contentContainerStyle={{
          padding: 10,
        }}
        data={pokemons}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        onEndReached={nextUrl ? loadMore : null}
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
  <Card key={item.name} name={item.name} linkenable />
);

const styles = StyleSheet.create({
  spinner: {
    marginTop: 10,
    marginBottom: 10,
  },
});
