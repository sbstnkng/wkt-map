import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/header';
import Map from './components/map';
import Panel from './components/panel';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <Panel />
      <Map />
    </Provider>
  );
};

export default App;
