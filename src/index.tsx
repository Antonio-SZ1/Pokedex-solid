import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import './estilos/index.css';
import App from './App';

render(() => (
  <Router>
    <App />
  </Router>
), document.getElementById('root') as HTMLElement);