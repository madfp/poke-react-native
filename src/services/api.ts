const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
export const getPokemons = async (next?: string | null) => {
  try {
    const response = await fetch(next || BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getIndividualPokemon = async (name: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export async function getPokemonById(id: number) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
