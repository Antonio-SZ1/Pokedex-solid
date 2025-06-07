import { A } from '@solidjs/router';
import TiposPokemon from './TiposPokemon';
import { Pokemon } from '../types';
import pokeball from '../assets/pokeball.svg';

interface TarjetaPokemonProps {
  pokemon: Pokemon;
}

export default function TarjetaPokemon(props: TarjetaPokemonProps) {
  const imagen = () => 
    props.pokemon.sprites.front_default || pokeball;
  
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
            src={imagen()} 
            alt={props.pokemon.name} 
            class="w-24 h-24 object-contain"
            onError={(e) => {
              e.currentTarget.src = pokeball;
            }}
          />
        </div>
        <TiposPokemon tipos={props.pokemon.types} />
      </div>
    </A>
  );
}