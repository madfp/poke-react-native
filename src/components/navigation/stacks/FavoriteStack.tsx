import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../../screens/Favorites";
import IndividualScreen from "../../screens/Individual";
const Stack = createNativeStackNavigator();

export default function FavoriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Favorites}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={IndividualScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
