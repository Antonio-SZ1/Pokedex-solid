import { Pokemon } from '../types';

const URL_BASE = 'https://pokeapi.co/api/v2';

export const obtenerPokemon = async (id: number): Promise<Pokemon> => {
  const response = await fetch(`${URL_BASE}/pokemon/${id}`);
  if (!response.ok) throw new Error('Pokémon no encontrado');
  
  const data = await response.json();
  
  if (!data.sprites.other?.['official-artwork']?.front_default) {
    data.sprites.other = {
      'official-artwork': {
        front_default: data.sprites.front_default || ''
      }
    };
  }
  
  return data;
};

export const obtenerListaPokemon = async (limite: number = 151): Promise<Pokemon[]> => {
  const response = await fetch(`${URL_BASE}/pokemon?limit=${limite}`);
  const data = await response.json();
  
  const pokemonPromises: Promise<Pokemon>[] = [];
  
  for (let i = 1; i <= limite; i++) {
    pokemonPromises.push(obtenerPokemon(i));
  }
  
  return Promise.all(pokemonPromises);
};

export const buscarPokemon = async (nombre: string): Promise<Pokemon[]> => {
  const todos = await obtenerListaPokemon(151);
  return todos.filter(p => 
    p.name.toLowerCase().includes(nombre.toLowerCase())
  );
};