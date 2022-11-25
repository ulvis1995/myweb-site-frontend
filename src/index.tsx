import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import './assets/styles/index.scss';
import ErrorBoundary from './app/ErrorBoundary';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Router>
    </Provider>
  </React.StrictMode>,
);
