import { A } from '@solidjs/router';
import TiposPokemon from './TiposPokemon';
import { Pokemon } from '../types';

interface TarjetaPokemonProps {
  pokemon: Pokemon;
}

export default function TarjetaPokemon(props: TarjetaPokemonProps) {
  return (
    <A 
      href={`/pokemon/${props.pokemon.id}`}
      class="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div class="p-4">
        <div class="flex justify-between items-start">
          <h3 class="font-bold text-gray-700 capitalize">
            {props.pokemon.name}
          </h3>
          <span class="text-gray-500 text-sm">
            #{props.pokemon.id.toString().padStart(3, '0')}
          </span>
        </div>
        <div class="flex justify-center mt-2">
          <img 
            src={props.pokemon.sprites.front_default} 
            alt={props.pokemon.name} 
            class="w-24 h-24 object-contain"
          />
        </div>
        <TiposPokemon tipos={props.pokemon.types} />
      </div>
    </A>
  );
}