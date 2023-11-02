import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReactProvider } from 'react-redux';
import App from './App.tsx';
import { store } from './store/index.ts';
import 'simplebar/src/simplebar.css';
import './assets/third-party/apex-chart.css';
import reportWebVitals from './reportWebVitals.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactProvider store={store}>
      <BrowserRouter basename='/'>
        <App />
      </BrowserRouter>
    </ReactProvider>
  </React.StrictMode>
);

reportWebVitals();
