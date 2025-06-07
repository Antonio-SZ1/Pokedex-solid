const URL_BASE = 'https://pokeapi.co/api/v2';

export const obtenerPokemon = async (id: number) => {
  const response = await fetch(`${URL_BASE}/pokemon/${id}`);
  if (!response.ok) throw new Error('Pokémon no encontrado');
  return response.json();
};

export const obtenerListaPokemon = async (limite = 151) => {
  const response = await fetch(`${URL_BASE}/pokemon?limit=${limite}`);
  const data = await response.json();
  
  // Obtener detalles de todos los Pokémon en paralelo
  const pokemonPromises = data.results.map((p, index) => 
    obtenerPokemon(index + 1)
  );
  
  return Promise.all(pokemonPromises);
};