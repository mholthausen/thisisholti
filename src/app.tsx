import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Numbers from './components/Numbers/Numbers';

import '@csstools/normalize.css';
import './app.scss';

const App = () => {
  return <Numbers initValue={42} />;
};

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
