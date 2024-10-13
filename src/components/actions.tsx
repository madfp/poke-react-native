import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function ActionsButtons() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Rotate</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Shiny</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Female</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
});
