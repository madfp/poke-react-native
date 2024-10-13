import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

import AccountStack from "./stacks/AccountStack";
import HomeStack from "./stacks/HomeStack";
import FavoriteStack from "./stacks/FavoriteStack";
import SearchStack from "./stacks/SearchStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
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
