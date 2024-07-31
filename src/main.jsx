import React from 'react';
import ReactDOM from 'react-dom/client';
import {PrimeReactProvider} from 'primereact/api';
import {bricksPT} from './presets/bricks';
import './index.css';
import './flags.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <PrimeReactProvider value={{unstyled: true, pt: bricksPT}}>
            <App/>
        </PrimeReactProvider>
    </React.StrictMode>
);
