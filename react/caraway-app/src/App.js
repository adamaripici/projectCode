import './App.css';
import Home from "./Home"
import NavBar from "./Navbar"
import Footer from "./Footer"
import Login from "./Login"
import Signup from "./Signup"
import Blogs from "./Blogs"
import mentalHealth from "./mentalHealth"

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
            <Route path="/blog" element={<Blogs/>}/>
            <Route path="/mentalHealth" element={<mentalHealth/>}/>
          </Routes>
        
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
