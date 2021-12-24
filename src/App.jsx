import React from 'react';
import './styles.scss';
import Timer from './components/Timer';
import Ring from './components/Ring';

const App = () => {
  return (
    <div className="wrapper">
      <Ring />
      <Timer />
    </div>
  );
};

export default App;
