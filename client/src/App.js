import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginAndRegistration from './components/LoginAndRegistration';
import Home from './components/Home';
import Company from './components/Company';
import CompanyEdit from './components/CompanyEdit'

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LoginAndRegistration changeUser={setUser}/>} path="/" default/>
          <Route element={<Home user={user}/>} path="/home"/>
          <Route element={<Company/>} path="/company" />
          <Route element={<CompanyEdit/>} path="/company_edit" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
