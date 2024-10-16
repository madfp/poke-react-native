import { Image, ScrollView, StyleSheet, View } from "react-native";
import Header from "../ui/individual-header";
import PokemonStats from "../ui/pokemon-stats";
import PokemonTypes from "../ui/pokemon-types";
import { useInfividualPokemon } from "../../hooks/useIndividualPokemon";
import ActionsButtons from "../actions";
import { useEffect } from "react";
import FavoriteButton from "../ui/favorite";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type IndividualScreenProps = {
  route: RouteProp<{ params: { id: string } }, "params">;

  navigation: NativeStackNavigationProp<ParamListBase>;
};

export default function IndividualScreen({
  route,
  navigation,
}: IndividualScreenProps) {
  const pokemon = useInfividualPokemon(route.params.id);

  useEffect(() => {
    navigation.setOptions({
      title: pokemon?.name,
      headerRight: () => <FavoriteButton id={route.params?.id} />,
    });
  }, [pokemon]);

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
