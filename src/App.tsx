import React from 'react';
import Header from './components/header';
import Map from './components/map';
import Panel from './components/panel';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Panel />
      <Map />
    </>
  );
};

export default App;
