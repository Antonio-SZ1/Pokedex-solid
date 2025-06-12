import { A } from '@solidjs/router';

export default function Cabecera() {
  return (
    <header class="bg-red-600 shadow-lg">
      <div class="container mx-auto px-4 py-3 flex items-center">
        <A href="/" class="flex items-center space-x-2">
          <div class="bg-white rounded-full p-1">
          
          </div>
          <h1 class="text-white text-2xl font-bold">Pokédex</h1>
        </A>
        <div class="ml-auto">
          <span class="text-white text-sm bg-red-700 px-3 py-1 rounded-full">
            Generación I
          </span>
        </div>
      </div>
    </header>
  );
}