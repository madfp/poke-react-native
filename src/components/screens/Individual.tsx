import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function IndividualScreen() {
  const router = useNavigation();
  return (
    <View>
      <Text
        onPress={() => {
          router.navigate("Home" as never);
        }}
      >
        Volver a favoritos
      </Text>
      <Text>Pokemon Individual</Text>
    </View>
  );
}
