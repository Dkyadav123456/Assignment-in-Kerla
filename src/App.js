import About from "./Componenets/About";
import Navbar from "./Componenets/Navbar";
import Home from "./Componenets/Home";
import NoteState from "./Context/notes/NoteState.js";
import Alert from "./Componenets/Alert";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert msg="Amazing  " />
          <div className="container my-5">
            <Routes>
              <Route exact path="/home" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
