export interface TipoPokemon {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface HabilidadPokemon {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface EstadisticaPokemon {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: TipoPokemon[];
  height: number;
  weight: number;
  stats: EstadisticaPokemon[];
  abilities: HabilidadPokemon[];
}