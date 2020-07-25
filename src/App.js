import React, { useState } from 'react';
import Header from './components/header';
import Map from './components/map';
import EditPanel from './components/editPanel';
import { berlinShape } from './berlinShape';

const App = () => {
  const [shapes, setShapes] = useState([berlinShape]);

  return (
    <>
      <Header />
      <Map shapes={shapes} />
      <EditPanel shapes={shapes} updateShapes={setShapes} />
    </>
  );
};

export default App;
