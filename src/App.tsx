import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/styles/index.scss';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MenuPopup from './components/MenuPopup/MenuPopup';

import Main from './pages/Main/Main';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import About from './pages/AboutMe/About';
import Contacts from './pages/Contacts/Contacts';
import NewsPage from './pages/NewsPage/NewsPage';

const App = () => {
  const [open, setOpen] = React.useState(false);

  const clickDrawer = () => setOpen(!open);

  return (
    <div className="App">
      <Header clickDrawer={clickDrawer} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer />
      <MenuPopup clickDrawer={clickDrawer} open={open} />
    </div>
  );
};

export default App;
