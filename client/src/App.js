import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginAndRegistration from './components/LoginAndRegistration';
import Home from './components/Home';
import Company from './components/Company';
import Company_edit from './components/Company_edit'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LoginAndRegistration/>} path="/" default/>
          <Route element={<Home/>} path="/home" />
          <Route element={<Company/>} path="/company" />
          <Route element={<Company_edit/>} path="/company_edit" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
