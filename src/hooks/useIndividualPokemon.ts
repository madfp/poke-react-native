import { useState, useEffect } from "react";
import { getIndividualPokemon } from "../services/api";
import { Pokemon } from "../types/pokemon.model";

export const useInfividualPokemon = (name: string) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>();

  useEffect(() => {
    getIndividualPokemon(name).then((res) => setPokemon(res));
  }, [name]);

  return pokemon;
};
