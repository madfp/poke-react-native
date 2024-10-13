import { Image, ScrollView, StyleSheet, View } from "react-native";
import Header from "../ui/individual-header";
import PokemonStats from "../ui/pokemon-stats";
import PokemonTypes from "../ui/pokemon-types";
import { useInfividualPokemon } from "../../hooks/useIndividualPokemon";
import ActionsButtons from "../actions";

export default function IndividualScreen({ route }: { route: any }) {
  const pokemon = useInfividualPokemon(route.params?.id);

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
      <Header name={pokemon?.name} order={pokemon?.order} />
      <Image
        style={styles.image}
        source={
          pokemon
            ? { uri: pokemon?.sprites.front_default }
            : require("../../assets/poke-logo.webp")
        }
      />
      <PokemonTypes types={pokemon?.types} />
      <PokemonStats stats={pokemon?.stats} />
      <ActionsButtons />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    top: 0,
    width: "100%",
    height: 350,
  },
});
