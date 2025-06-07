import { useParams } from '@solidjs/router';
import { createResource, Show } from 'solid-js';
import VistaDetalle from '../componentes/VistaDetalle';
import Cargando from '../componentes/Cargando';
import { obtenerPokemon } from '../servicios/pokeapi';
import { Pokemon } from '../types';

export default function DetallePokemon() {
  const params = useParams();
  const id = () => parseInt(params.id, 10);
  
  const [pokemon] = createResource(id, obtenerPokemon);

  return (
    <Show 
      when={!pokemon.loading} 
      fallback={<Cargando />}
    >
      <VistaDetalle pokemon={pokemon()!} />
    </Show>
  );
}