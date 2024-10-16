import { useState, useEffect } from "react";
import { getPokemons } from "../services/api";
import { ResponseModel } from "../types/response.model";
import { useCallback } from "react";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<ResponseModel[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(null);

  const loadPokemons = useCallback(() => {
    getPokemons(nextUrl).then((res) => {
      setPokemons((prevPokemons) => [...prevPokemons, ...res.results]);
      setNextUrl(res.next);
    });
  }, [nextUrl]);

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  return { pokemons, loadPokemons, nextUrl };
};
