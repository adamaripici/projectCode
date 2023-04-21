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


import FinancialAssistance from "./FinancialAssistance"
import StudentDiscount from "./StudentDiscount"
import ParentDiscount from "./ParentDiscount"
import FamilyDiscount from './FamilyDiscount';
import LowIncome from './LowIncome';
import Newsletter from './Newsletter';
import Careers from './Careers';
import Faq from './Faq';
import Press from './Press';
import Management from './Management';

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
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/mentalHealth" element={<MentalHealth/>}/>
            <Route path="/practicalArticles" element={<PracticalArticles/>}/>
            <Route path="/therapyArticles" element={<TherapyArticles/>}/>
            <Route path="/helpingLovedOnes" element={<HelpingLovedOnes/>}/>
            <Route path="/financial-assistance" element={<FinancialAssistance/>}/>
            <Route path="/student-discount" element={<StudentDiscount/>}/>
            <Route path="/parent-discount" element={<ParentDiscount/>}/>
            <Route path="/family-discount" element={<FamilyDiscount/>}/>
            <Route path="/low-income-discount" element={<LowIncome/>}/>
            <Route path="/newsletter" element={<Newsletter/>}/>
            <Route path="/Careers" element={<Careers/>}/>
            <Route path="/Faq" element={<Faq/>}/>
            <Route path="/Press" element={<Press/>}/>
            <Route path="/management" element={<Management/>}/>
          </Routes>
        
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
