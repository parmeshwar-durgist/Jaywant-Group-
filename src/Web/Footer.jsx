import React from "react";

function Footer()
{
    return(
        <>
            <section>
                <div className="container">
                    <div className="row pb-4 mb-3" style={{borderBottom:'1px solid black'}}>
                        <div className="col-md-3">
                            <img src="/image/jaywant1.png" width={"220px"}/>
                        </div>
                        <div className="col-md-9">
                            <div className="row mt-4">
                                <div className="col-md-2">
                                    <img src="/image/jaywantaarogyam.png" width={"150px"}/>
                                </div>
                                <div className="col-md-2">
                                    <img src="/image/jaywantdrrealty.png" width={"150px"}/>
                                </div>
                                <div className="col-md-2">
                                    <img src="/image/jaywantevents.png" width={"150px"}/>
                                </div>
                                <div className="col-md-2">
                                    <img src="/image/jaywantfortune.png" width={"150px"}/>
                                </div>
                                <div className="col-md-2">
                                    <img src="/image/jaywantgreenbliss.png" width={"150px"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row mb-5">
                        <div className="col-md-3">
                            <h4 style={{fontWeight:'bold'}}>Have Any Question?<br></br>_______</h4>
                            <h5 className="mt-4" >Call</h5>
                            <h5 style={{color:'blue',fontWeight:'300'}}>020-24242999</h5>
                            <h5 style={{color:'blue',fontWeight:'300'}}>+91 2071966872</h5>
                            <h5 className="mt-4">Email</h5>
                            <h5 style={{color:'blue',fontWeight:'300'}}>sales@jaywantgroup.com</h5>
                        </div>
                        <div className="col-md-3">
                            <h4 style={{fontWeight:'bold'}}>Quick Links<br></br>_______</h4>
                            <p className="mt-2" style={{fontSize:'17px'}}>Home</p>
                            <p className="mt-2" style={{fontSize:'17px'}}>About Us</p>
                            <p className="mt-2" style={{fontSize:'17px'}}>Projects</p>
                            <p className="mt-2" style={{fontSize:'17px'}}>Case Studies</p>
                            <p className="mt-2" style={{fontSize:'17px'}}>Social Events</p>
                            <p className="mt-2" style={{fontSize:'17px'}}>NRI Corner</p>
                            <p className="mt-2" style={{fontSize:'17px'}}>Agro Farming</p>
                        </div>

                        <div className="col-md-3">
                            <h4 style={{fontWeight:'bold'}}>Global Branches<br></br>_______</h4>
                            <p className="mt-2" style={{fontSize:'17px'}}>India</p>
                            <p className="mt-2" style={{fontSize:'17px'}}>U.A.E</p>
                            <p className="mt-2" style={{fontSize:'17px'}}>Europe</p>
                            <p className="mt-2" style={{fontSize:'17px'}}>Kuwait</p>
                        </div>

                        <div className="col-md-3">
                            <h4 style={{fontWeight:'bold'}}>Information<br></br>_______</h4>
                            <p className="mt-2" style={{fontSize:'17px'}}>Blogs</p>
                            <p className="mt-2" style={{fontSize:'17px'}}>Privacy Policy</p>
                            <p className="mt-2" style={{fontSize:'17px'}}>Careers</p>
                            <p className="mt-2" style={{fontSize:'17px'}}>Contact</p>
                            <p className="mt-2" style={{fontSize:'17px'}}>Sitemap</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;