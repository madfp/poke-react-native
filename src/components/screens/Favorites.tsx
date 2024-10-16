import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { GetFavoritePokemons } from "../../services/async-storage";

export default function Favorites() {
  const router = useNavigation();
  const [favoritePokemon, setFavoritePokemons] = useState<[string] | []>([]);

  useEffect(() => {
    (async () => {
      console.log("trayendo favoritos");
      console.log(favoritePokemon);
      const response = await GetFavoritePokemons();
      setFavoritePokemons(response);
    })();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => {
          router.navigate("Individual" as never);
        }}
      >
        See individual
      </Text>
      <FlatList
        data={favoritePokemon}
        renderItem={(item) => (
          <View>
            <Text>{item.item}</Text>
          </View>
        )}
      />
    </View>
  );
}
