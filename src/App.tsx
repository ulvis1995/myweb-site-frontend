import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
