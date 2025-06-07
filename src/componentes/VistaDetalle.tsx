import { A } from '@solidjs/router';
import TiposPokemon from './TiposPokemon';

export default function VistaDetalle(props) {
  const pokemon = props.pokemon;
  
  return (
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:w-1/3 p-6 flex flex-col items-center">
            <img 
              src={pokemon.sprites.front_default} 
              alt={pokemon.name} 
              class="w-48 h-48 object-contain"
            />
            <h2 class="text-2xl font-bold mt-4 capitalize">{pokemon.name}</h2>
            <span class="text-gray-500">
              #{pokemon.id.toString().padStart(3, '0')}
            </span>
            <TiposPokemon tipos={pokemon.types} />
            
            <div class="mt-6 grid grid-cols-2 gap-4 w-full">
              <div class="bg-gray-50 p-3 rounded-lg text-center">
                <p class="text-sm text-gray-500">Altura</p>
                <p class="font-semibold">{(pokemon.height / 10).toFixed(1)} m</p>
              </div>
              <div class="bg-gray-50 p-3 rounded-lg text-center">
                <p class="text-sm text-gray-500">Peso</p>
                <p class="font-semibold">{(pokemon.weight / 10).toFixed(1)} kg</p>
              </div>
            </div>
          </div>
          
          <div class="md:w-2/3 p-6 border-t md:border-t-0 md:border-l border-gray-100">
            <h3 class="text-xl font-bold mb-4">Estadísticas</h3>
            <div class="space-y-3">
              {pokemon.stats.map(stat => (
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="capitalize">{stat.stat.name.replace('-', ' ')}</span>
                    <span class="font-bold">{stat.base_stat}</span>
                  </div>
                  <progress 
                    class="progress progress-primary w-full" 
                    value={stat.base_stat} 
                    max="255"
                  ></progress>
                </div>
              ))}
            </div>
            
            <h3 class="text-xl font-bold mt-8 mb-4">Habilidades</h3>
            <div class="flex flex-wrap gap-2">
              {pokemon.abilities.map(ability => (
                <span class="badge badge-outline capitalize">
                  {ability.ability.name.replace('-', ' ')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-6">
        <A href="/" class="btn btn-outline">
          ← Volver al listado
        </A>
      </div>
    </div>
  );
}