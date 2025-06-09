import { createSignal } from 'solid-js';

interface BuscadorProps {
  onBuscar: (termino: string) => void;
}

export default function Buscador(props: BuscadorProps) {
  const [termino, setTermino] = createSignal('');

  const manejarBusqueda = (e: Event) => {
    e.preventDefault();
    props.onBuscar(termino());
  };

  return (
    <form onSubmit={manejarBusqueda} class="mb-8">
      <div class="join w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Buscar Pokémon..."
          class="input input-bordered join-item w-full"
          value={termino()}
          onInput={(e) => setTermino(e.currentTarget.value)}
        />
        <button type="submit" class="btn btn-primary join-item">
          Buscar
        </button>
        {termino() && (
          <button
            type="button"
            class="btn btn-ghost join-item"
            onClick={() => {
              setTermino('');
              props.onBuscar('');
            }}
          >
            Limpiar
          </button>
        )}
      </div>
    </form>
  );
}