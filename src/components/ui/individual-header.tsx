import { StyleSheet, Text, View } from "react-native";

type props = {
  name: string | undefined;
  order: number | undefined;
};

export default function Header({ name, order }: props) {
  return (
    <View style={styles.container}>
      <Text style={styles.order}>#{order}</Text>
      <Text style={styles.name}>lorem</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  order: {
    padding: 10,
    backgroundColor: "red",
    fontSize: 20,
    borderRadius: 10,
  },
});
