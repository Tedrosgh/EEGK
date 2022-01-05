import React from 'react';
import { BrowserRouter, useNavigate, Route, Routes } from 'react-router-dom';
import PrimarySearchAppBar from './components/navigation.js';
import Sundaysperformance from './pages/sunday.js';
import Einnahme from './pages/Einnahme.js';
import Ausgabe from './pages/Ausgabe.js';
import Events from './pages/Events.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <PrimarySearchAppBar />
        <h1>EEGK</h1>
        <Routes>
          <Route exact path='/' element={<Sundaysperformance />}></Route>
          <Route exact path='/events' element={<Events />}></Route>
          <Route exact path='/einnahme' element={<Einnahme />}></Route>
          <Route exact path='/ausgabe' element={<Ausgabe />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
