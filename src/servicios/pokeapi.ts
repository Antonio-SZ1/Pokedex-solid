import { Pokemon } from '../types';

const URL_BASE = 'https://pokeapi.co/api/v2';

export const obtenerPokemon = async (id: number): Promise<Pokemon> => {
  const response = await fetch(`${URL_BASE}/pokemon/${id}`);
  if (!response.ok) throw new Error('Pokémon no encontrado');
  return response.json();
};

export const obtenerListaPokemon = async (limite = 151): Promise<Pokemon[]> => {
  const response = await fetch(`${URL_BASE}/pokemon?limit=${limite}`);
  const data = await response.json();
  
  // Obtener detalles de todos los Pokémon en paralelo
  const pokemonPromises = data.results.map((p: any, index: number) => 
    obtenerPokemon(index + 1)
  );
  
  return Promise.all(pokemonPromises);
};