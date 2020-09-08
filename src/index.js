import { loadableReady } from '@loadable/component';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';


loadableReady(() => {
  const root = document.getElementById('root');
  hydrate(
      <React.StrictMode>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </React.StrictMode>,
      root
  );
},
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
