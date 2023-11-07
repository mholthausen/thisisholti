import * as React from 'react';
import ReactDOM from 'react-dom/client';

import '@csstools/normalize.css';
import './app.scss';

const App = () => {
  return <div>Coming soon...</div>;
};

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
