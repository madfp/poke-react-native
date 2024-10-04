import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../../screens/Settings";
import IndividualScreen from "../../screens/Individual";
const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Settings}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
