import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import './index.css';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import About from './pages/AboutMe/About';
import Contacts from './pages/Contacts/Contacts';
import NewsPage from './pages/NewsPage/NewsPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/portfolio' element={<PortfolioPage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/news' element={<NewsPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
