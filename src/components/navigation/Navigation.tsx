import React, { useEffect } from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NetInfo from "@react-native-community/netinfo";
import HomeStack from "./stacks/HomeStack";
import FavoriteStack from "./stacks/FavoriteStack";
import SearchStack from "./stacks/SearchStack";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);

      if (!state.isConnected) {
        console.log("no hay internet");
      } else console.log("hay internet");
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: "Inicio",
          tabBarIcon: ({ size }) => <LogoIcon size={size} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          title: "Inicio",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="search1" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoriteStack}
        options={{
          title: "Favoritos",
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Ajustes",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" size={size} color={color} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

function LogoIcon(size: { size: number }) {
  return (
    <Image
      source={require("../../assets/poke-logo.webp")}
      style={{ width: size.size, height: size.size }}
    />
  );
}
