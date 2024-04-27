import React from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Service from './Service.jsx'
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx"
import Projects from "./Projects.jsx"
import CaseStudies from "./CaseStudies.jsx"
import SocialEvents from "./SocialEvents.jsx"
import Career from "./Career.jsx"
import Blog from "./blog.jsx"
import NRICORNER from "./NRICORNER.jsx"
import Contect from "./Contect.jsx"
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";


function App()
{
    return(
        <>
            <Router>
                <Nav></Nav>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/about-us" element={<About></About>}></Route>
                    <Route path="/projects" element={<Projects></Projects>}></Route>
                    <Route path="/CaseStudies" element={<CaseStudies></CaseStudies>}></Route>
                    <Route path="/SocialEvents" element={<SocialEvents></SocialEvents>}></Route>
                    <Route path="/career" element={<Career></Career>}></Route>
                    <Route path="/blog" element={<Blog></Blog>}></Route>
                    <Route path="/NRI-Corner" element={<NRICORNER></NRICORNER>}></Route>
                    <Route path="/contact" element={<Contect></Contect>}></Route>
                </Routes>
                <Footer></Footer>
            </Router>
        </>
    )
}

export default App;