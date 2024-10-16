import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../../screens/Search";
import IndividualScreen from "../../screens/Individual";
const Stack = createNativeStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={SearchScreen}
        options={{
          title: "Buscar Pokemon",
          headerShown: false,
        }}
      />
      <Stack.Screen name="PokemonDetail" component={IndividualScreen} />
    </Stack.Navigator>
  );
}
