import React from 'react';
import { BrowserRouter, useNavigate, Route, Routes, Link, NavLink } from 'react-router-dom';
import MenuAppBar from './components/navigation.js';
import Sundaysperformance from './pages/Sunday.js';
import Finanz from './pages/finanz/Finanz.js';
import Einnahme from './pages/finanz/Einnahme.js';
import Ausgabe from './pages/finanz/Ausgabe.js';
import Events from './pages/finanz/Events.js';
import Mezmur from './pages/mezmur/Mezmur.js';
import './App.css';
import Add_new_mezmur from './pages/mezmur/add_new_mezmur.js';
import Edit_Mezmur from './pages/mezmur/edit_mezmur.js';
import Delete_Mezmur from './pages/mezmur/delete_mezmur.js';
import { Display_Mezmur } from './pages/mezmur/display_mezmur.js';
import Search_Mezmur from './pages/mezmur/search_mezmur.js';
import Help from './pages/mezmur/help.js';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <MenuAppBar />
        <h1> <Link to = '/' element={<Sundaysperformance />}> EEGK</Link></h1>
        <Routes>
          <Route exact path='/' element={<Sundaysperformance />}></Route>
          <Route exact path='/finanz' element={<Finanz /> }></Route>
          <Route exact path='/finanz/events' element={<Events />}></Route>
          <Route exact path='/finanz/einnahme' element={<Einnahme />}></Route>
          <Route exact path='/finanz/ausgabe' element={<Ausgabe />}></Route>
          <Route exact path='/mezmur' element={<Mezmur />}></Route>
          <Route path='/mezmur/addmezmur' element={<Add_new_mezmur/>} ></Route>
          <Route path='/mezmur/editmezmur' element={<Edit_Mezmur/>} ></Route>
          <Route path='/mezmur/deletemezmur' element={<Delete_Mezmur/>} ></Route>
          <Route path='/mezmur/displaymezmur' element={<Display_Mezmur/>} ></Route>
          <Route path='/mezmur/searchmezmur' element={<Search_Mezmur/>}></Route>
          <Route path='/mezmur/help' element={<Help/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
