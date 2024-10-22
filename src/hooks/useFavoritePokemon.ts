import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { GetFavoritePokemons } from "../services/async-storage";
import { ResponseModel } from "../types/response.model";

export default function UseFavoritePokemon() {
  const [favorites, setFavorites] = useState<ResponseModel[] | []>([]);

  const loadPokemons = async () => {
    const response: string[] = await GetFavoritePokemons();
    const array: ResponseModel[] = [];

    for (let index = 0; index < response.length; index++) {
      array.push({ name: response[index] });
    }

    setFavorites(array);
  };

  useFocusEffect(
    useCallback(() => {
      loadPokemons();
    }, [])
  );

  return { favorites, loadPokemons };
}
