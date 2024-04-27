import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"

function Nav()
{
    return(
        <>
            	<header className="nav-on-banner mb-2">
                <div id="header" className="nav-header header-four">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 ">
                                <nav className="navbar navbar-expand-lg navbar-light px-0">
                                    <a className="navbar-brand text-center" href="index">
                                    <img className="nav-logo" style={{width:'190px'}} src="/image/jaywant1.png"
                                            alt="industrial warehouse for rent
                                            "/></a>

                                    <button className="toggle-btn btn" data-toggle="collapse" data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                         <ion-icon name="list-outline"></ion-icon>
                                    </button>

                                    <div className="collapse navbar-collapse navbar" id="navbarSupportedContent">
                                        <ul className="navbar-nav mx-auto">
                                            <li className="nav-item">
                                                <NavLink style={{fontWeight:'400',textShadow:'0px  black',marginLeft:'12px',fontWeight:'bolder'}} className="nav-link active" to="/">Home</NavLink>
                                            </li>
                                            <li className="nav-item ">
                                                <NavLink style={{fontWeight:'400',textShadow:'0px  black',marginLeft:'12px',fontWeight:'bolder'}} className="nav-link " to="/about-us">About
                                                    Us</NavLink>
                                            </li>

                                            <li className="nav-item">
                                                <NavLink style={{fontWeight:'400',textShadow:'0px  black',marginLeft:'12px',fontWeight:'bolder'}} className="nav-link" to="/projects" role="button">Projects</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <a style={{fontWeight:'400',textShadow:'0px  black',marginLeft:'12px',fontWeight:'bolder'}} className="nav-link "
                                                 href="/CaseStudies"
                                                    role="button">Case Studies</a>

                                            </li>
                                            <li className="nav-item">
                                                <a style={{fontWeight:'400',textShadow:'0px  black',marginLeft:'12px',fontWeight:'bolder'}} className="nav-link " href="/SocialEvents" role="button">Social Events</a>

                                            </li>
                                            <li className="nav-item">
                                                <a style={{fontWeight:'400',textShadow:'0px  black',marginLeft:'12px',fontWeight:'bolder'}} className="nav-link " href="/career" role="button">Careers</a>

                                            </li>
                                            <li className="nav-item">
                                                <a style={{fontWeight:'400',textShadow:'0px  black',marginLeft:'12px',fontWeight:'bolder'}} className="nav-link " href="/blog" role="button">Blog</a>

                                            </li>
                                            <li className="nav-item">
                                                <a style={{fontWeight:'400',textShadow:'0px  black',marginLeft:'12px',fontWeight:'bolder'}} className="nav-link " href="/NRI-Corner" role="button">NRI Corner</a>

                                            </li>
                                            <li className="nav-item">
                                                <a style={{fontWeight:'400',textShadow:'0px  black',marginLeft:'12px',fontWeight:'bolder'}} className="nav-link " href="/contact" role="button">Contact</a>

                                            </li>

                                        </ul>

                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Nav;