import React from "react";

function OurProjects()
{
    return (
        <>
            <section style={{backgroundImage:'url(/image/factories.webp)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                <div style={{backgroundColor:'rgba(0, 0, 0, 0.8)'}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 text-white text-center" style={{paddingBottom:'120px',paddingTop:'120px'}}>
                                <h1 style={{fontSize:'55px',fontWeight:'bolder'}}>Our Projects</h1>
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{backgroundColor:'rgba(122, 122, 122, 0.1)'}}>
                <div className="container pb-3 pt-3 " >
                    <div className="row">
                        <div className="col-md-12">
                            <h5 style={{fontWeight:'300'}}><a style={{textDecoration:'none'}} href="/">Home</a> / Projects</h5>
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
                        <div className="row">
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




export default OurProjects;
export {HomeOurProjects}
