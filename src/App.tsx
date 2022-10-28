import React from 'react';
import { AppRouter } from './app/AppRouter';
import './assets/styles/index.scss';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MenuPopup from './components/MenuPopup/MenuPopup';

const App = () => {
  const [open, setOpen] = React.useState(false);

  const clickDrawer = () => setOpen(!open);

  return (
    <div className="App">
      <Header clickDrawer={clickDrawer} />
      <AppRouter />
      <Footer />
      <MenuPopup clickDrawer={clickDrawer} open={open} />
    </div>
  );
};

export default App;
