import * as React from 'react';

import '@csstools/normalize.css';
import './app.scss';
import ReactDOM, { render } from 'react-dom';


const Content: React.FC = () => {
  return <div>Coming soon...</div>;
};

const App: React.FC = () => {
  return (
    <div id="app">
      <Content />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
