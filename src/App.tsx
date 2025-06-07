import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import Cabecera from './componentes/Cabecera';

export default function App() {
  return (
    <div class="min-h-screen bg-gray-50">
      <Cabecera />
      <main class="container mx-auto px-4 py-8">
        <Suspense fallback={<div class="text-center py-12">Cargando...</div>}>
          <FileRoutes />
        </Suspense>
      </main>
    </div>
  );
}