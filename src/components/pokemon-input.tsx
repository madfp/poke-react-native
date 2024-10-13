import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function PokemonInput() {
  const [value, setValue] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Pokemon"
        onChangeText={(newText) => setValue(newText)}
        value={value}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          console.log(value);
        }}
      >
        <Text>See</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 10,
  },
  button: {
    padding: 5,
    backgroundColor: "red",
  },
});
