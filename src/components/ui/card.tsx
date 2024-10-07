import { Image, StyleSheet, Text, View } from "react-native";
import { useInfividualPokemon } from "../../hooks/useIndividualPokemon";
import { getColorByType } from "../../utils/getColorByType";
import { POKEMON_COLORS } from "../../types/pokemon.color.model";

type cardProps = {
  name: string;
  linkenable?: boolean;
};

export default function Card({ name, linkenable }: cardProps) {
  const pokemon = useInfividualPokemon(name);
  const handlePress = () => {};

  const pokemonStyle = {
    ...styles.card,
    backgroundColor: getColorByType(
      pokemon?.types[0].type.name as POKEMON_COLORS
    ),
  };

  return (
    <>
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
        {linkenable && (
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
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 300,
    position: "relative",
    borderRadius: 10,
  },
  card: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
    minHeight: 400,
  },
  Image: {
    width: "100%",
    height: 300,
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
