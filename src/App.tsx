import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import './index.css';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import About from './pages/AboutMe/About';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/portfolio' element={<PortfolioPage />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
