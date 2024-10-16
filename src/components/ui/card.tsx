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
import { memo } from "react";

type cardProps = {
  name: string;
  linkenable?: boolean;
};

const Card = ({ name }: cardProps) => {
  const navigation = useNavigation();
  const pokemon = useInfividualPokemon(name);

  const handlePress = () => {
    navigation.navigate("PokemonDetail", {
      id: pokemon?.id,
      name: pokemon?.name,
    });
  };

  const backgroundColor = getColorByType(
    pokemon?.types[0].type.name as POKEMON_COLORS
  );

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={{
          ...styles.card,
          backgroundColor: "#EDEDED",
        }}
      >
        {/* Image container */}
        <View style={styles.imageContainer}>
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
        <View
          style={{
            ...styles.bottomContainer,
            backgroundColor: backgroundColor,
          }}
        >
          <View style={styles.container}>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../../assets/poke-logo.webp")}
            />
            <Text style={styles.title}>{name.toUpperCase()}</Text>
          </View>
          <Text style={styles.order}>
            #{pokemon?.order.toString().padStart(3, "0")}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(Card);

const styles = StyleSheet.create({
  order: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  imageContainer: {
    width: "100%",
    height: 300,
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
  },
  Image: {
    width: "100%",
    height: "100%",
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
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
});
