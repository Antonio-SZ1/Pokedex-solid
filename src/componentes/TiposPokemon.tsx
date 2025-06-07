export default function TiposPokemon(props) {
  const tipoColores = {
    normal: 'bg-pokemon-normal',
    fire: 'bg-pokemon-fire',
    water: 'bg-pokemon-water',
    electric: 'bg-pokemon-electric',
    grass: 'bg-pokemon-grass',
    ice: 'bg-pokemon-ice',
    fighting: 'bg-pokemon-fighting',
    poison: 'bg-pokemon-poison',
    ground: 'bg-pokemon-ground',
    flying: 'bg-pokemon-flying',
    psychic: 'bg-pokemon-psychic',
    bug: 'bg-pokemon-bug',
    rock: 'bg-pokemon-rock',
    ghost: 'bg-pokemon-ghost',
    dragon: 'bg-pokemon-dragon',
    dark: 'bg-pokemon-dark',
    steel: 'bg-pokemon-steel',
    fairy: 'bg-pokemon-fairy',
  };

  return (
    <div class="flex flex-wrap justify-center gap-2 mt-3">
      {props.tipos.map(tipo => (
        <span 
          class={`px-3 py-1 rounded-full text-white text-xs font-semibold capitalize ${
            tipoColores[tipo.type.name] || 'bg-gray-500'
          }`}
        >
          {tipo.type.name}
        </span>
      ))}
    </div>
  );
}