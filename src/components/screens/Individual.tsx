import { Image, StyleSheet, View } from "react-native";
import Header from "../ui/individual-header";
import PokemonStats from "../ui/pokemon-stats";
import PokemonTypes from "../ui/pokemon-types";
import { useInfividualPokemon } from "../../hooks/useIndividualPokemon";
import { getColorByType } from "../../utils/getColorByType";
import { POKEMON_COLORS } from "../../types/pokemon.color.model";

export default function IndividualScreen({ route }: { route: any }) {
  const pokemon = useInfividualPokemon(route.params?.id);
  //console.log(pokemon?.stats);

  return (
    <View>
      <Header name={pokemon?.name} order={pokemon?.order} />
      <Image
        style={styles.image}
        source={
          pokemon
            ? { uri: pokemon?.sprites.front_default }
            : require("../../assets/poke-logo.webp")
        }
      />
      <PokemonTypes />
      <PokemonStats stats={pokemon?.stats || []} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    top: 0,
    width: "100%",
    height: 350,
  },
});
