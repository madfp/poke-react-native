import { useState, useEffect } from "react";
import { getPokemon } from "../services/api";
import { Pokemon } from "../types/pokemon.model";

export const useInfividualPokemon = (name: string) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>();

  useEffect(() => {
    getPokemon(name).then((res) => setPokemon(res));
  }, [name]);

  return pokemon;
};
