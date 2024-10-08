import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useInfividualPokemon } from "../../hooks/useIndividualPokemon";
import { getColorByType } from "../../utils/getColorByType";
import { POKEMON_COLORS } from "../../types/pokemon.color.model";
import { useNavigation } from "@react-navigation/native";

type cardProps = {
  name: string;
  linkenable?: boolean;
};

export default function Card({ name, linkenable }: cardProps) {
  const navigation = useNavigation();
  const pokemon = useInfividualPokemon(name);

  const handlePress = () => {
    navigation.navigate("PokemonDetail", {
      id: pokemon?.id,
      name: pokemon?.name,
    });
  };

  const pokemonStyle = {
    ...styles.card,
    backgroundColor: getColorByType(
      pokemon?.types[0].type.name as POKEMON_COLORS
    ),
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={pokemonStyle}>
        {/* Image container */}
        <View style={styles.imageContainer}>
          <Text
            style={{
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            #{pokemon?.order}
          </Text>
          <Image
            style={styles.Image}
            source={
              pokemon?.sprites.front_default
                ? { uri: pokemon?.sprites.front_default }
                : require("../../assets/poke-logo.webp")
            }
          />
        </View>

        {/* Bottom stats & navigation */}
        <View style={styles.bottomContainer}>
          <View style={styles.container}>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../../assets/poke-logo.webp")}
            />
            <Text style={styles.title}>{name.toUpperCase()}</Text>
          </View>
          <Text>Toggle</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    position: "relative",
    borderRadius: 10,
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
  },
  Image: {
    width: "100%",
    height: 300,
    objectFit: "contain",
  },
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  bottomContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
});
