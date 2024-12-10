import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import About from "./Components/About/About";
import Work from "./Components/Work/Work.js";
import Edu from "./Components/Edu/Edu.js";
import Skills from "./Components/Skills/Skills.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Main/>} />
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Education" element={<Edu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
