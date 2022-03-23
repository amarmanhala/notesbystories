import { Routes, Route, Link } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import "./index.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Welcome from "./components/Welcome";
import Main from "./components/Main";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="welcome" element={<Welcome />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
