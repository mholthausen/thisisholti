import * as React from 'react';
import ReactDOM from 'react-dom/client';

import '@csstools/normalize.css';
import './app.scss';

import Welcome from './components/Welcome';

const App = () => {
  return <Welcome />;
};

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
