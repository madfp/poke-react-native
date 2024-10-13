import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function ErrorComponent() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/poke-logo.webp")}
      />
      <Text style={styles.text}>There was a problem...</Text>
      <TouchableOpacity>
        <Text>Try again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
