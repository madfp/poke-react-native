import { useState, useEffect } from "react";
import { ResponseModel } from "../types/response.model";
import { getPokemons } from "../services/api";

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<ResponseModel[]>([]);

  useEffect(() => {
    getPokemons().then((res) => setPokemons(res.results));
  }, []);

  return pokemons;
};
