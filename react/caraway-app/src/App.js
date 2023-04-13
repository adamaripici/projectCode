import './App.css';
import Home from "./Home"
import NavBar from "./Navbar"
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </NavBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
