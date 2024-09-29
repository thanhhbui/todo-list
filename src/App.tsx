import React from 'react';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header title='Header'/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
