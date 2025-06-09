import { createResource, createSignal, Show, For } from 'solid-js';
import TarjetaPokemon from '../componentes/TarjetaPokemon';
import Cargando from '../componentes/Cargando';
import Buscador from '../componentes/Buscador';
import { obtenerListaPokemon, buscarPokemon } from '../servicios/pokeapi';
import { Pokemon } from '../types';

export default function Inicio() {
  const [terminoBusqueda, setTerminoBusqueda] = createSignal('');
  const [pokemons] = createResource(() => obtenerListaPokemon(151));
  const [resultadosBusqueda] = createResource(terminoBusqueda, buscarPokemon);

  const manejarBusqueda = (termino: string) => {
    setTerminoBusqueda(termino);
  };

  return (
    <div>
      <Buscador onBuscar={manejarBusqueda} />
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Show 
          when={!pokemons.loading} 
          fallback={<Cargando />}
        >
          <For each={terminoBusqueda() ? resultadosBusqueda() : pokemons()}>
            {(pokemon: Pokemon) => (
              <div class="pokemon-card">
                <TarjetaPokemon pokemon={pokemon} />
              </div>
            )}
          </For>
        </Show>
      </div>
      
      <Show when={terminoBusqueda() && resultadosBusqueda()?.length === 0}>
        <div class="col-span-full text-center py-12">
          <p class="text-lg">No se encontraron Pokémon con "{terminoBusqueda()}"</p>
          <button 
            class="btn btn-link mt-4"
            onClick={() => setTerminoBusqueda('')}
          >
            Mostrar todos
          </button>
        </div>
      </Show>

      <Show when={!terminoBusqueda()}>
        <div class="mt-8 text-center text-gray-500">
          Mostrando los primeros 151 Pokémon de la Generación I
        </div>
      </Show>
    </div>
  );
}






