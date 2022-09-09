import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar"
import Home from './Components/Pages/Home';
import Trip from './Components/Pages/Trip';
import Detail from './Components/Pages/Detail';
import Context from './Context/Context';
import Buy from './Components/Pages/Buy';
import Excursion from './Components/Pages/Excursion';
import DetailInit from './Components/Pages/DetailInit';
import Experiences from './Components/Experiences/Experiences';
import Navbar2 from './Components/Navbar/Navbar2';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Footer from './Components/Pages/Footer';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
//import "carousel.css"
//<link rel="stylesheet" href="carousel.css"/>

import './App.css';

function App() {
  return (
    <div className="App">
      <Context>
      <div className='content'>
        <BrowserRouter>
        <header className="App-header">
          <Navbar2/>
      
        </header>
        <main>
          <Routes>

            <Route path="/" element={<Home/>}/>           
            <Route path="/trips/:trip" element={<Trip/>}/>
            <Route path="/category/:category/detail/:id" element={<Detail/>}/>
            <Route path="/excursions/:destiny" element={<Excursion/>}/>
            <Route path="/init/:destination" element={<DetailInit/>}/>
            <Route path="/experiences" element={<Experiences msg="site"/>}/>
            <Route path="/aboutus" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/buy" element={<Buy/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        
        </main>
        <footer>
          <Footer/>
        </footer>
        </BrowserRouter>
      </div>
      </Context>
    </div>
  );
}

export default App;
