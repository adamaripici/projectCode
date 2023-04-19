import './App.css';
import Home from "./Home"
import NavBar from "./Navbar"
import Footer from "./Footer"
import Login from "./Login"
import Signup from "./Signup"
import FinancialAssistance from "./FinancialAssistance"
import StudentDiscount from "./StudentDiscount"
import ParentDiscount from "./ParentDiscount"
import FamilyDiscount from './FamilyDiscount';
import LowIncome from './LowIncome';
import Newsletter from './Newsletter';
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
            <Route path="/financial-assistance" element={<FinancialAssistance/>}/>
            <Route path="/student-discount" element={<StudentDiscount/>}/>
            <Route path="/parent-discount" element={<ParentDiscount/>}/>
            <Route path="/family-discount" element={<FamilyDiscount/>}/>
            <Route path="/low-income-discount" element={<LowIncome/>}/>
            <Route path="/newsletter" element={<Newsletter/>}/>
          </Routes>
        
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
