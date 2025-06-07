import { lazy } from 'solid-js';
import { RouteDefinition } from '@solidjs/router';

export const rutas: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./paginas/Inicio')),
  },
  {
    path: '/pokemon/:id',
    component: lazy(() => import('./paginas/DetallePokemon')),
  },
  {
    path: '/*404',
    component: lazy(() => import('./paginas/Inicio')),
  },
];