import { Routes, Route } from '@solidjs/router';
import { Suspense } from 'solid-js';
import Cabecera from './componentes/Cabecera';
import Inicio from './paginas/Inicio';
import DetallePokemon from './paginas/DetallePokemon';

export default function App() {
  return (
    <div class="min-h-screen bg-gray-50">
      <Cabecera />
      <main class="container mx-auto px-4 py-8">
        <Suspense fallback={<div class="text-center py-12">Cargando...</div>}>
          <Routes>
            <Route path="/" component={Inicio} />
            <Route path="/pokemon/:id" component={DetallePokemon} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}