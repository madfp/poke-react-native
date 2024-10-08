import { StyleSheet, Text, View } from "react-native";

type props = {
  name: string | undefined;
  order: number | undefined;
};

export default function Header({ name, order }: props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name && name?.charAt(0).toUpperCase() + name?.slice(1)}
      </Text>
      <Text>#{order}</Text>
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
});
