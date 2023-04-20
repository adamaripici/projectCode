import './App.css';
import Home from "./Home"
import NavBar from "./Navbar"
import Footer from "./Footer"
import Login from "./Login"
import Signup from "./Signup"
import Blogs from "./Blogs"
import MentalHealth from "./MentalHealth"
import PracticalArticles from "./PracticalArticles"
import TherapyArticles from "./TherapyArticles"
import HelpingLovedOnes from "./HelpingLovedOnes"



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
            <Route path="/mentalHealth" element={<MentalHealth/>}/>
            <Route path="/practicalArticles" element={<PracticalArticles/>}/>
            <Route path="/therapyArticles" element={<TherapyArticles/>}/>
            <Route path="/helpingLovedOnes" element={<HelpingLovedOnes/>}/>
          </Routes>
        
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
