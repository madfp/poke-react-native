import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import IndividualScreen from "../../screens/Individual";
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
      <Stack.Screen name="PokemonDetail" component={IndividualScreen} />
    </Stack.Navigator>
  );
}
