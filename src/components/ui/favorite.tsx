import { Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  AddPokemonToFavorites,
  DeleteFavoritePokemon,
  CheckFavoritePokemon,
} from "../../services/async-storage";
import { useEffect, useState } from "react";

export default function FavoriteButton({ id }: { id: string }) {
  const [favorite, setFavorite] = useState<boolean | undefined>(undefined);
  const [reload, setReload] = useState(false);

  const addFav = async () => {
    await AddPokemonToFavorites(id);
    setReload((prev) => !prev);
  };

  const deleteFav = async () => {
    await DeleteFavoritePokemon(id);
    setReload((prev) => !prev);
  };

  useEffect(() => {
    (async () => {
      const response = await CheckFavoritePokemon(id);
      setFavorite(response);
    })();
  }, [id, reload]);

  return (
    <>
      <Pressable onPress={favorite ? deleteFav : addFav}>
        {favorite ? (
          <MaterialIcons name="favorite" size={24} color="black" />
        ) : (
          <MaterialIcons name="favorite-border" size={24} color="black" />
        )}
      </Pressable>
    </>
  );
}
