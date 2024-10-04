import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Favorites() {
  const router = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => {
          router.navigate("Individual" as never);
        }}
      >
        See individual
      </Text>
    </View>
  );
}
