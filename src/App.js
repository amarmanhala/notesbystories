import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./store";
import GlobalStyles from "./GlobalStyles";
import "./index.css";
import Welcome from "./components/Welcome";
import Main from "./components/Main";
import SignUp from './components/SignUp';

function App() {
  
  return (
    <>
      <Provider store={store}>
      <GlobalStyles />
      <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      </div>
      </Provider>
    </>
  );
}

export default App;
