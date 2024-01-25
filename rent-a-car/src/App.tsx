import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
   
    </div>
  );
}

export default App;
