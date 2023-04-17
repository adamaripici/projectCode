import './App.css';
import Home from "./Home"
import NavBar from "./Navbar"
import Footer from "./Footer"
import Login from "./Login"
import Signup from "./Signup"
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
