import { render } from "@testing-library/react";
import React from "react";

function HomeSlider(props)
{
    return(
            <>
                <section style={{backgroundImage:'url(/image/frame6.png)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                    <div className="container-fluid" style={{backgroundColor:'rgba(240, 230, 230, 0.8)'}}>
                        <div className="row justify-content-center ">
                            <div className="col-md-6" style={{display:'grid',alignItems:'center'}}>
                                <h3 style={{fontWeight:'bold',marginLeft:'110px'}}>
                                    INVEST IN INDUSTRIAL SHEDS AND<br></br>
                                    <span style={{color:'#0b6cb4',fontSize:'35px'}}>GET ASSURED MONTHLY RENTAL <br></br> INCOME.</span><br></br><br></br>
                                    <button className="btn text-white pl-4 pr-4 pl-2 pb-2" style={{backgroundColor:'#0b6cb4'}}>Know More</button>
                                </h3>
                            </div>
                            <div className="col-md-6 text-center  mb-5 ">
                                <img src="/image/warehouse.webp" className="mr-5" style={{width:'650px',marginTop:'102px'}}/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
    )   
}

function HomeJaywantGroup()
{
    return(
        <>
            <div className="container-fluid">
                <div className="row justify-content-center ">
                    <div className="col-md-6" style={{display:'grid',alignItems:'center'}}>
                    <div className="" style={{marginLeft:'100px'}}>
                        <h5 className="mt-5"  style={{color:'#0b6cb4',fontWeight:'bold'}}>Constructing a Prosperous Future ________</h5>
                        <h4 className="mb-5"  style={{color:'#0b6cb4',fontWeight:'bold'}}>Jaywant Group</h4>
                        <p className="mb-5">
                        Jaywant Group has gained a very trusted name in the field of real estate and <br></br>land development in Pune. It was set up in 2007, under the Chairmanship of Mr<br></br> Dinesh C. Rathod with property development as its main focus. Our Company is <br></br>one of the leading and reputed real estate company.<br></br>
                        Today, the company has earned its reputation as a trusted name in the real<br></br> estate industry, with property development as its core focus. Jaywant Group <br></br>primarily focuses on industrial sheds in pune, residential, commercial property, <br></br>contractual projects and farmhouse plots in India.
                        </p>
                        <div>
                            <button className="btn text-white  pl-5 pr-5 pt-3 pb-3 mb-5" style={{backgroundColor:'#0b6cb4'}}>Read More</button>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-6 h-75 mt-5" style={{display:'grid',alignItems:'center'}}>
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <h1 style={{fontWeight:'bold',color:'#0b6cb4'}}>6</h1>
                                <h5 style={{color:'#0b6cb4'}}>+Branches Globally</h5>
                            </div>
                            <div className="col-md-4 text-center">
                                <h1 style={{fontWeight:'bold',color:'#0b6cb4'}}>12</h1>
                                <h5 style={{color:'#0b6cb4'}}>+Projects Completed</h5>
                            </div>
                            <div className="col-md-4 text-center">
                                <h1 style={{fontWeight:'bold',color:'#0b6cb4'}}>720</h1>
                                <h5 style={{color:'#0b6cb4'}}>+Satisfied Clients</h5>
                            </div>
                        </div>

                        <div className="text-center  w-100 mt-3">
                            <img src="/image/jayantCircle.webp"></img>
                        </div>
                        <div className="row mt-4" style={{marginBottom:'70px',color:'#0b6cb4'}}>
                            <div className="col-md-4 text-center">
                                <h5>●  INTEGRITY</h5>
                            </div>
                            <div className="col-md-4 text-center">
                                <h5>●  RESOURCEFUL</h5>    
                            </div>
                            <div className="col-md-4 text-center">
                                <h5>●  MORALITY</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )  
}


function HomeOurProjects(props)
{   
    return(
        <>
            
                    <div className="col-md-4 mb-4">
                    <div className="card">
                    <img className="card-img-top" src={props.img} alt="Card image cap" height={'250px'} />
                    <div className="card-body">
                        <h5 className="card-title" style={{color:'#0b6cb4'}}>{props.heading}</h5>
                        <p className="card-text"> <ion-icon name="location" style={{color:'orange'}}></ion-icon>{props.location}</p>
                        <p className="card-text"> <ion-icon name="checkmark" style={{color:'orange'}} ></ion-icon>{props.Acre}
                        <ion-icon name="checkmark" style={{color:'orange',marginLeft:'30px'}}></ion-icon>{props.plot}</p>
                        <div className="row ">
                            <div className="col-md-6 mt-2">
                                <a href="#" className="btn pl-4 pr-4 pt-3 pb-3 text-white " style={{backgroundColor:'#0b6cb4'}}>View More</a>
                            </div>
                            <div className="col-md-6 mt-2">
                                <a href="#" className="btn pl-2 pr-3 pt-3 pb-3 text-white " style={{backgroundColor:'green'}}>Enquire Now
                                <ion-icon name="logo-whatsapp" className="ml-2" style={{color:'white'}}></ion-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
        </>
    )
}

function Specialization()
{
    return(
        <>
            <section style={{backgroundImage:'url(/image/10.webp)'}}>
            <div style={{backgroundColor:'rgba(32, 37, 138, 0.4)'}}>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-6 text-white pt-5">
                            <h5 style={{fontWeight:'bold'}}>Our Specialization ________</h5>
                            <h4 style={{fontWeight:'bold'}}>Pushing The Boundaries Of What’s Possible.</h4>
                        </div>
                        <div className="col-md-6 text-white pt-5">
                            <p> Having years of experience in both</p>
                            <h1>industrial sheds construction</h1>
                            <p>and turnkey solutions, the company is capable of handling even the most <br></br>complex building challenges and technical constructions.</p>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="row ">
                            <div className="col-md-3 mt-5 mb-5 text-center text-white">
                                <ion-icon name="cash-outline" style={{fontSize:'80px',marginBottom:'10px'}}></ion-icon>
                                <h4>BUY, RENTAL & LEASE</h4>
                            </div>
                            <div className="col-md-3 mt-5 mb-5 text-center text-white">
                                <ion-icon name="home-outline" style={{fontSize:'80px',marginBottom:'10px'}}></ion-icon>
                                <h4>LAND DEVELOPMENT</h4>
                            </div>
                            <div className="col-md-3 mt-5 mb-5 text-center text-white">
                                <ion-icon name="scan-circle-outline" style={{fontSize:'80px',marginBottom:'10px'}}></ion-icon>
                                <h4>ARCHITECTURAL DESIGNING</h4>
                            </div>
                            <div className="col-md-3 mt-5 mb-5 text-center text-white">
                                <ion-icon name="help-buoy-outline" style={{fontSize:'80px',marginBottom:'10px'}}></ion-icon>
                                <h4>CONSTRUCTION</h4>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </section>
        </>
    )
}

function Jaynagar()
{
    return(
        <>
            <section style={{backgroundImage:'url(/image/bg11.webp)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <div>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className="p-2 mt-5 pl-4 pt-5 bg-white text-dark ">
                                <h3 style={{fontWeight:'bolder',color:'#0b6cb4'}}>Jaynagar</h3>
                                <h6 className="pt-3">
                                This 65000 Sqft. property situated in<br></br> 
                                Kelawade at put-hills of Bangalore National<br></br> 
                                Highway is just 30 minutes away from<br></br> 
                                Pune. Its precious location and surrounding <br></br>
                                natural heritage add value to its beauty by <br></br>
                                giving you a pleasant and healthy work<br></br> 
                                environment.
                                </h6>
                                <h5 className="mt-3" style={{color:'#0b6cb4'}}>Amenities :</h5>
                                <div className="row">

                                    <div className="col-md-6 ">
                                        <div className="row mt-4">
                                            <div className="col-md-4"  >
                                                <img src="/image/jaynagar1.png" height={'40px'} width={'40px'} className="" />
                                            </div>
                                            <div className="col-md-8 text-left" >
                                                <h6 className="">Concrete<br></br>Fencing</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 ">
                                        <div className="row mt-4">
                                            <div className="col-md-4"  >
                                                <img src="/image/jaynagar2.png" height={'40px'} width={'40px'} className="" />
                                            </div>
                                            <div className="col-md-8 text-left pl-3" >
                                                <h6 className="">Water supply</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 ">
                                        <div className="row mt-4">
                                            <div className="col-md-4"  >
                                                <img src="/image/jaynagar4.png" height={'40px'} width={'40px'} className="" />
                                            </div>
                                            <div className="col-md-8 text-left" >
                                                <h6 className="">Plot <br></br>Demarcation</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 ">
                                        <div className="row mt-4">
                                            <div className="col-md-4"  >
                                                <img src="/image/jaynagar5.png" height={'40px'} width={'40px'} className="" />
                                            </div>
                                            <div className="col-md-8 text-left pl-3" >
                                                <h6 className="">Security Gate</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 ">
                                        <div className="row mt-4">
                                            <div className="col-md-4"  >
                                                <img src="/image/jaynagar6.png" height={'40px'} width={'40px'} className="" />
                                            </div>
                                            <div className="col-md-8 text-left pl-3" >
                                                <h6 className="">Internal Roads</h6>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 ">
                                        <div className="row mt-4">
                                            <div className="col-md-4"  >
                                                <img src="/image/jaynagar7.png" height={'40px'} width={'40px'} className="" />
                                            </div>
                                            <div className="col-md-8 text-left pl-3" >
                                                <h6 className="">Name Boards</h6>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="mt-5">
                                    <button className="btn text-white  pl-5 pr-5 pt-3 pb-3 mb-5" style={{backgroundColor:'#0b6cb4'}}>Know More</button>            
                                </div>
                            </div>
                            <div className="bg-warning">
                                <marquee > 
                                    <span className="ml-3" style={{fontWeight:'bold'}}>SOLD OUT</span>
                                    <span className="ml-3" style={{fontWeight:'bold'}}>SOLD OUT</span>
                                    <span className="ml-3" style={{fontWeight:'bold'}}>SOLD OUT</span>
                                    <span className="ml-3" style={{fontWeight:'bold'}}>SOLD OUT</span>
                                    <span className="ml-3" style={{fontWeight:'bold'}}>SOLD OUT</span>
                                    <span className="ml-3" style={{fontWeight:'bold'}}>SOLD OUT</span>
                                    <span className="ml-3" style={{fontWeight:'bold'}}>SOLD OUT</span>
                                </marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )   
}


function JaywantAgroFarming()
{
    return(
        <>
            <section className="mt-5 mb-5">
                <div>
                    <div className="container " >
                        <div className="row">
                            <div className="col-md-6">
                                <img src="/image/agrofarming.webp" width={"100%"} />
                            </div>
                            <div className="col-md-6">
                                <div className="pt-5 pb-5 pl-4">
                                    <h3 style={{color:'#0b6cb4'}}>Jaywant Agro Farming</h3>
                                    <h5 style={{color:'#0b6cb4'}}>YOU BUY, WE GROW, YOU EARN</h5>
                                </div>
                                <p style={{fontWeight:'400',fontSize:'17px'}}>
                                Buy farmlands in India and get assured yearly rental income. Jaywant agro farm
                                helps to achieve your aims of rejuvenation and relaxation while still meeting your
                                financial objectives. Join hands with Jaywant Agro today and reap the benefits of
                                widespread acclaim!!
                                </p>
                                <div className="">
                                    <button className="btn text-white  pl-5 pr-5 pt-3 pb-3 mb-5" style={{backgroundColor:'#0b6cb4'}}>Invest Now</button>            
                                </div>
                            </div>    
                        </div>  
                    </div>  
                </div>
            </section>  


            <section className="mt-5 mb-5">
                <div>
                    <div className="container " >
                        <div className="row">

                        <div className="col-md-6">
                                <div className="mt-3 mb-5">
                                    <h3 style={{color:'#0b6cb4'}}>Jaywant Farmhouse Park</h3>
                                </div>
                                <p style={{fontWeight:'400',fontSize:'17px'}}>
                                Are you planning to invest your hard-earned money in the best way possible ? Are you looking for an investment to make the highest potential returns ? well the Jaywant Group introduces "JAYWANT FARMHOUSE PARK." It is situated in rakh village near Jejuri M.I.D.C , spread across huge 16-acre , (about 6,40,000 sq ft) , it has a natural heritage that adds a great significance value to its attractiveness , also it makes it an ideal location to buy farmhouses in the midst of your daily hectic schedule.
                                </p>
                                <div className="mt-4">
                                    <button className="btn text-white  pl-5 pr-5 pt-3 pb-3 mb-5" style={{backgroundColor:'#0b6cb4'}}>Invest Now</button>            
                                </div>
                            </div> 


                            <div className="col-md-6">
                                <img src="/image/FARMHOUSE.webp" width={"100%"} />
                            </div>   
                        </div>  
                    </div>  
                </div>
            </section>  
        </>
    )
}

function JaywantBussiness()
{
    return(
        <>
            <section className=" pb-5" style={{marginTop:'250px',backgroundColor:'rgba(230, 229, 216, 0.4)'}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 pt-4 pb-5" style={{paddingLeft:'80px'}}>
                                <h1 style={{fontWeight:'bold',color:'#0b6cb4',fontFamily:'revert-layer'}}>JAYWANT<br></br> BUSINESS HUB</h1>
                                <h5 style={{color:'#0b6cb4',fontWeight:'bold'}}>SHOWROOM -1 | SHOPS - 3 | OFFICCE SPACE -24 </h5>
                                <h5 style={{fontWeight:'400'}}>
                                    An ultimate opportunity for you , With its<br></br>
                                    outstanding frontage , exceptional location , and <br></br>
                                    easy accessibility <span style={{fontWeight:'bold'}}>JAYWANT BUSINESS HUB </span><br></br>
                                    Gives you all the advantages for a successful <br></br>
                                    business space.
                                </h5>
                            </div>

                            <div className="col-md-3">
                                <div style={{marginTop:'-150px'}}>
                                    <img src="/image/jaywantb.webp" width={'400px'}  />
                                </div>
                            </div>

                            <div className="col-md-4 mt-3">
                                <div className="" style={{marginLeft:'100px'}}>
                                    <h1 style={{fontWeight:'bolder',color:'#0b6cb4'}}>AMENITIES</h1>
                                    <h4 style={{fontWeight:'400'}} className="mt-4">
                                        <ion-icon name="location" style={{color:'#0b6cb4'}}></ion-icon>
                                        - Gangadham
                                    </h4>
                                    <h4 style={{fontWeight:'400'}} className="mt-4">
                                        <ion-icon name="time" style={{color:'#0b6cb4'}}></ion-icon>
                                            - Accessibility : (10-12 mins from Katraj Mumbai highway)
                                    </h4>
                                    <h4 style={{fontWeight:'400'}} className="mt-4">
                                        <ion-icon name="car-sport" style={{color:'#0b6cb4'}}></ion-icon>
                                        - Parking Space 
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>    
            </section>
        </>
    )
}

function HomeLocation()
{   
    return(
        <>
            <section style={{backgroundColor:'rgb(19, 8, 103)'}} >
                <div style={{backgroundImage:'url(/image/nakasha.webp)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                    <div className="container-fluid">
                        <div className="row pb-5">
                            <div className="col-md-4" >
                                <div className="ml-5" style={{marginTop:'400px'}}>
                                    <h1 style={{color:'#0b6cb4'}}>____________</h1>
                                    <h1 style={{color:'#0b6cb4'}}>Testimonial</h1>
                                    <h6 style={{fontSize:'17px'}} className="text-white">
                                    Jaywant Group has gained a very trusted name in the<br></br>
                                    field of real estate and land development in Pune. It<br></br>
                                    was set up in 2007, under the Chairmanship of Mr<br></br>
                                    Dinesh C. Rathod with property development as its<br></br>
                                    main focus.
                                    </h6>
                                </div>
                            </div>
                            <div className="col-md-7">

                                <div className="row">
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4">
                                        <div className="text-dark bg-white p-3" style={{borderRadius:'5px',marginTop:'70px'}}>
                                            <p style={{fontSize:'15px'}}>
                                            It was great experience working with Mr Dinesh Rathod.
                                            I got my property and warehouse built on it by Jaywant Civil Works, Very happy with their
                                            service.
                                            </p>
                                        </div>
                                        <h5 className="mt-3" style={{fontWeight:'bold',color:'white'}}>EUROPE .</h5>
                                    </div>
                                    <div className="col-md-4"></div>

                                </div>

                                <div className="row">
                                <div className="col-md-4">
                                        <div className="text-dark bg-white p-3" style={{borderRadius:'5px'}}>
                                            <p style={{fontSize:'15px'}}>
                                            It was great experience working with Mr Dinesh Rathod.
                                            I got my property and warehouse built on it by Jaywant Civil Works, Very happy with their
                                            service.
                                            </p>
                                        </div>
                                        <h5 className="mt-3" style={{fontWeight:'bold',color:'white'}}>AFRIKA .</h5>
                                    </div>
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4">
                                        <div className="text-dark bg-white p-3" style={{borderRadius:'5px'}}>
                                            <p style={{fontSize:'15px'}}>
                                            It was great experience working with Mr Dinesh Rathod.
                                            I got my property and warehouse built on it by Jaywant Civil Works, Very happy with their
                                            service.
                                            </p>
                                        </div>
                                        <h5 className="mt-3" style={{fontWeight:'bold',color:'white'}}>ASIA .</h5>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4" style={{marginTop:'-100px'}}>
                                        <div className="text-dark bg-white p-3" style={{borderRadius:'5px'}}>
                                            <p style={{fontSize:'15px'}}>
                                            It was great experience working with Mr Dinesh Rathod.
                                            I got my property and warehouse built on it by Jaywant Civil Works, Very happy with their
                                            service.
                                            </p>
                                        </div>
                                        <h5 className="mt-3" style={{fontWeight:'bold',color:'white'}}>AMERICA .</h5>
                                    </div>
                                    <div className="col-md-4"></div>

                                </div>

                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

function HomeBlog(props)
{
    return(
        <>
            
                    <div className="col-md-4 mt-5 mb-5 mb-4">
                        <div className="card" >
                        <img className="card-img-top" src={props.img} alt="Card image cap" width={'100%'} height={'250px'} />
                        <div className="card-body" >
                            <div className="row">
                                <div className="col-md-3 p-3" style={{backgroundColor:'rgba(234, 227, 232, 0.4)'}}>
                                    <div className="text-center " >
                                        <h6 style={{fontWeight:'bold',color:'#0b6cb4'}}>{props.date}</h6>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <h5 style={{color:'#0b6cb4'}}>{props.info}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h5 style={{color:'#0b6cb4'}}>Read More</h5>
                        </div>
                    </div>
                </div>
            
                    
        </>
    )
}

export default HomeSlider;
export {HomeJaywantGroup,HomeOurProjects,Specialization,Jaynagar,JaywantAgroFarming,JaywantBussiness,HomeLocation,HomeBlog}