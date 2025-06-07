import { createResource } from 'solid-js';
import TarjetaPokemon from '../componentes/TarjetaPokemon';
import Cargando from '../componentes/Cargando';
import { obtenerListaPokemon } from '../servicios/pokeapi';
import { Pokemon } from '../types';

export default function Inicio() {
  const [pokemons] = createResource(obtenerListaPokemon);

  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Show 
          when={!pokemons.loading} 
          fallback={<Cargando />}
        >
          <For each={pokemons()}>
            {(pokemon: Pokemon) => <TarjetaPokemon pokemon={pokemon} />}
          </For>
        </Show>
      </div>
      
      <div class="mt-8 text-center text-gray-500">
        Mostrando los primeros 151 Pokémon de la Generación I
      </div>
    </div>
  );
}