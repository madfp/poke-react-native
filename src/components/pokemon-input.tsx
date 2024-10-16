import { StyleSheet, TextInput, View } from "react-native";
import { Dispatch, SetStateAction } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function PokemonInput({
  value,
  setValue,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Busca un pokemon..."
        onChangeText={(newText) => setValue(newText)}
        value={value}
      />
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
