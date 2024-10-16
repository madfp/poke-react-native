import { SafeAreaView } from "react-native-safe-area-context";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { Pokemon } from "../../types/pokemon.model";
import { getIndividualPokemon } from "../../services/api";

export default function SearchScreen() {
  const [value, setValue] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const handleSearch = (value: string) => {
    const result = getIndividualPokemon(value);
    console.log(result);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search Pokemon"
          onChangeText={(newText) => setValue(newText)}
          value={value}
        />
        <Pressable style={styles.button} onPress={() => handleSearch(value)}>
          <AntDesign name="search1" size={24} color="black" />
        </Pressable>
      </View>
      <View>
        {value ? (
          <Text>{value}</Text>
        ) : value.length === 0 ? (
          <Text>Not found</Text>
        ) : (
          <Text>Search a new pokemon</Text>
        )}
      </View>
    </SafeAreaView>
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
