import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import NavBar from "./components/navBar/NavBar";
import Training from "./components/training/Training";
import ChangePeople from "./components/changePeople/ChangePeople";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<Training />}/>
          <Route path="/before&after" element={<ChangePeople />} />
          <Route path="/contact" element={<Contact />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
