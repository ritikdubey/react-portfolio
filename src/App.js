import React from 'react'
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
    <div>
    <NavBar />
    </div>

    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/home' element={<Home />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    {/* <Route path='/contact' component={Contact}></Route> */}
    </Routes>

    </BrowserRouter>
  );
}

export default App;
