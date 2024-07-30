import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import ThemeSwitcher from './components/themeSwitcher';
import bricks from './presets/bricks';

import './index.css';
import './flags.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: bricks }}>
      <ThemeSwitcher />
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
