import { useParams } from '@solidjs/router';
import { createResource } from 'solid-js';
import VistaDetalle from '../componentes/VistaDetalle';
import Cargando from '../componentes/Cargando';
import { obtenerPokemon } from '../servicios/pokeapi';

export default function DetallePokemon() {
  const params = useParams();
  const id = () => parseInt(params.id, 10);
  
  const [pokemon] = createResource(id, obtenerPokemon);

  return (
    <Show 
      when={!pokemon.loading} 
      fallback={<Cargando />}
    >
      <VistaDetalle pokemon={pokemon()} />
    </Show>
  );
}