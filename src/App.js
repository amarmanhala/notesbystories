import GlobalStyles from "./GlobalStyles";
import "./index.css";
import Header from "./components/Header";
import Editor from "./components/Editor";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Header></Header>
        <Editor></Editor> 
       
      </div>
    </>
  );
}

export default App;
