import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import AccountStack from "./stacks/AccountStack";
import HomeStack from "./stacks/HomeStack";
import FavoriteStack from "./stacks/FavoriteStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
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
        name="Home"
        component={HomeStack}
        options={{
          title: "Inicio",
          tabBarIcon: ({ size }) => <LogoIcon size={size} />,
        }}
      />

      <Tab.Screen
        name="Settings"
        component={AccountStack}
        options={{
          title: "Configuración",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
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
