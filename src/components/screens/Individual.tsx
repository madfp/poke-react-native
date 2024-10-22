import { Image, ScrollView, StyleSheet, View } from "react-native";
import Header from "../ui/individual-header";
import PokemonStats from "../ui/pokemon-stats";
import PokemonTypes from "../ui/pokemon-types";
import { useInfividualPokemon } from "../../hooks/useIndividualPokemon";
import { useEffect } from "react";
import FavoriteButton from "../ui/favorite";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getColorByType } from "../../utils/getColorByType";
import { POKEMON_COLORS } from "../../types/pokemon.color.model";

type IndividualScreenProps = {
  route: RouteProp<{ params: { id: string } }, "params">;
  navigation: NativeStackNavigationProp<ParamListBase>;
};

export default function IndividualScreen({
  route,
  navigation,
}: IndividualScreenProps) {
  const pokemon = useInfividualPokemon(route.params.id);

  const backgroundColor = getColorByType(
    pokemon?.types[0].type.name as POKEMON_COLORS
  );

  useEffect(() => {
    navigation.setOptions({
      title: pokemon?.name,
      headerRight: () => <FavoriteButton id={route.params?.id.toString()} />,
    });
  }, [pokemon]);

  return (
    <ScrollView>
      <Header name={pokemon?.name} order={pokemon?.order} />
      <View style={styles.imageContainer}>
        <Image
          style={[
            styles.image,
            pokemon && { backgroundColor: backgroundColor, borderRadius: 700 },
          ]}
          source={
            pokemon
              ? { uri: pokemon?.sprites.front_default }
              : require("../../assets/poke-logo.webp")
          }
        />
      </View>
      <PokemonTypes types={pokemon?.types} />
      <PokemonStats stats={pokemon?.stats} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
    objectFit: "contain",
  },
  imageContainer: {
    position: "relative",
    marginBottom: 20,
    marginHorizontal: "auto",
    width: "90%",
  },
});
