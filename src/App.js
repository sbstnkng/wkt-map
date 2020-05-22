import React, { useState } from 'react';
import Header from './components/header';
import Map from './components/map';
import EditPanel from './components/editPanel';

const App = () => {
  const [shapes, setShapes] = useState([]);

  return (
    <>
      <Header />
      <Map shapes={shapes} />
      <EditPanel shapes={shapes} updateShapes={setShapes} />
    </>
  );
};

export default App;
