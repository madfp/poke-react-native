export const getPokemons = async (next?: string | null) => {
  try {
    const response = await fetch(next || "https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getIndividualPokemon = async (name: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
