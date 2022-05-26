import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginAndRegistration from './components/LoginAndRegistration';
import Home from './components/Home';
import Company from './components/Company';
import CompanyEdit from './components/CompanyEdit'
import Registration from './components/Register';
import Login from './components/Login';


function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LoginAndRegistration user={user} changeUser={setUser}/>} path="/" default/>
          <Route element={<Home user={user}/>} path="/home"/>
          <Route element={<Company/>} path="/company/:id" />
          <Route element={<CompanyEdit/>} path="/company/edit/:id" />
          <Route element={<Registration/>} path="/registration"/>
          <Route element={<Login/>} path="/login"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
