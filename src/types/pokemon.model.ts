export interface Pokemon {
  id: number;
  name: string;
  order: number;
  next: string | null;
  abilities: ability[];
  base_experience: number;
  forms: form[];
  stats: pokemonStats[];
  types: type[];
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
}

// STATS INTERFACE
export interface pokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

// TYPE INTERFACE
interface type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

// FORM INTERFACE
interface form {
  name: string;
  url: string;
}

// ABILITY INTERFACE
interface ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
