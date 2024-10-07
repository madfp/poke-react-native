export const getPokemons = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPokemon = async (name: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
