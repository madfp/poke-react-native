import { Image, StyleSheet, Text, View } from "react-native";

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/poke-logo.webp")}
      />
      <Text style={styles.text}>No hay pokemones en favoritos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  image: {
    flex: 2,
    height: 250,
    width: "auto",
    objectFit: "contain",
  },
});
