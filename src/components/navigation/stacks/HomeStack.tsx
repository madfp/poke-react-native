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
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Individual"
        component={IndividualScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
