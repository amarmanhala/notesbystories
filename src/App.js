import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import "./index.css";
import Welcome from "./components/Welcome";
import Main from "./components/Main";
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
