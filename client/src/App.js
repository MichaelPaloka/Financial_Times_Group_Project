import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginAndRegistration from './components/LoginAndRegistration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LoginAndRegistration/>} path="/Gamepartyfinder" default/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
