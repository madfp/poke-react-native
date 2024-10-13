import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import IndividualScreen from "../../screens/Individual";
import FavoriteButton from "../../ui/favorite";
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={Home}
        options={{
          title: "Inicio",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={IndividualScreen}
        options={{
          title: "Detalles del pokemon",
          headerRight: () => <FavoriteButton />,
        }}
      />
    </Stack.Navigator>
  );
}
