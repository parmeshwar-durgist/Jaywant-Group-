import React from "react";
function ContectDocPart()
{
    return(
        <>
            <section style={{backgroundImage:'url(/image/backg.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                <div style={{backgroundColor:'rgba(0, 0, 0, 0.7)'}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 text-white text-center" style={{paddingBottom:'120px',paddingTop:'120px'}}>
                                <h1 style={{fontSize:'55px',fontWeight:'bolder'}}>Contact</h1>
                            </div>
                            <div className="col-md-7"></div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{backgroundColor:'rgba(122, 122, 122, 0.1)'}}>
                <div className="container pb-3 pt-3 " >
                    <div className="row">
                        <div className="col-md-12">
                            <h5 style={{fontWeight:'300'}}><a style={{textDecoration:'none'}} href="/">Home</a> / contect</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


function CONTACTUS()
{
    return(
        <>
            <section style={{backgroundColor:'rgba(156, 155, 155, 0.2)'}} className="pb-5">

                <div className="container pb-3 pt-3 " >
                    <div className="row">
                        <div className="col-md-6 mt-5 mb-5">
                            <h5 style={{color:'#0b6cb4',fontWeight:'bold'}} className="mt-3">Jaywant Across Globe _______</h5>
                            <h1 style={{color:'#0b6cb4',fontWeight:'bold'}} className="mt-3">CONTACT US</h1>
                            <p className="mt-3">At Jaywant Group Real Estate Company , we work seamlessly together as one firm to serve our clients. With 7 offices in 4 countries around the world, we make our collective knowledge, experience, and global network available to our clients.</p>
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>

                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-md-6 " style={{backgroundColor:'rgb(11, 43, 116)'}}>
                            <img src="/image/nakasha.webp" width={"100%"} height={'460px'}/>
                        </div>
                        <div className="col-md-6 p-5 bg-white">
                            <div className=" p-4" style={{backgroundColor:'rgba(156, 155, 155, 0.1)'}}>
                                <div className="p-4 bg-white">
                                    <h3 style={{color:'#0b6cb4',fontWeight:'bold'}}>Pune - Corporate Office <br></br> ____</h3>

                                    <div className="row mt-4">
                                    <div className="col-md-1">
                                        <ion-icon style={{color:'#0b6cb4',fontSize:'30px'}} name="call"></ion-icon>
                                    </div>
                                    <div className="col-md-4">
                                        <p style={{color:'#0b6cb4',fontWeight:'bold'}}>Phone<br></br><span style={{fontWeight:'300'}}>+91 99 786 786 53</span></p>
                                    </div>
                                    <div className="col-md-7"></div>
                                    </div>

                                    <div className="row mt-4">
                                    <div className="col-md-1">
                                        <ion-icon style={{color:'#0b6cb4',fontSize:'40px'}} name="shapes"></ion-icon>
                                    </div>
                                    <div className="col-md-11">
                                        <p style={{color:'#0b6cb4',fontWeight:'bold'}}>Office<br></br><span style={{fontWeight:'400',color:"black"}}>Office 306, 3rd Floor, Ganga Collidium 1, Marketyard-Kondhwa Road Pune 37</span></p>
                                    </div>
                                    {/* <div className="col-md-7"></div> */}
                                    </div>


                                    <div className="row mt-4">
                                    <div className="col-md-1">
                                        <ion-icon style={{color:'#0b6cb4',fontSize:'40px'}} name="mail"></ion-icon>
                                    </div>
                                    <div className="col-md-11">
                                        <p style={{color:'#0b6cb4',fontWeight:'bold'}}>Email<br></br><span style={{fontWeight:'300'}}>info@jaywantgroup.com
                                    </span></p>
                                    </div>
                                    </div>


                                </div>
                            </div>
                        </div>        
                    </div>
                </div>

            </section>
        </>
    )
}


function ContectForm()
{
    return(
        <>
            <section className="mt-5">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6 shadow">
                            <h4 style={{color:'#0b6cb4',fontWeight:'bold'}}>Get in Touch <br></br> ____</h4>
                            <form className="p-4">
                                <span>
                                    <span style={{fontWeight:'bold',fontSize:'14px'}}>Name</span><input type="text" name="name" placeholder="Name" className="form-control" />
                                </span>
                                <div style={{}} className="mt-3">
                                    <span style={{fontWeight:'bold',fontSize:'13px'}}>Email</span><input type="email" name="name" placeholder="Email" className="form-control" />
                                </div>

                                <div style={{}} className="mt-3">
                                    <span style={{fontWeight:'bold',fontSize:'13px'}}>Phone</span><input type="number" name="name" placeholder="Phone" className="form-control" />
                                </div>

                                <div style={{}} className="mt-3">
                                    <span style={{fontWeight:'bold',fontSize:'13px'}}>Project of interest</span><input type="text" name="name" placeholder="Select Project of interest" className="form-control" />
                                </div>

                                <div style={{}} className="mt-3">
                                    <span style={{fontWeight:'bold',fontSize:'13px'}}>Comments</span>
                                    <textarea cols={'10'} rows={'3'} placeholder="Comments" className="form-control"></textarea>
                                </div>
                                <div className="mt-3">
                                    <button className="btn text-white" style={{backgroundColor:'#0b6cb4'}}>Submit</button>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-6">
                            <div className="p-4 bg-white">
                                    <h3 style={{color:'#0b6cb4',fontWeight:'bold'}}>Contact With Us <br></br> ____</h3>

                                    <div className="row mt-4">
                                    <div className="col-md-1">
                                        <ion-icon style={{color:'#0b6cb4',fontSize:'30px'}} name="call"></ion-icon>
                                    </div>
                                    <div className="col-md-4">
                                        <p style={{color:'#0b6cb4',fontWeight:'bold'}}>
                                        Phone<br></br>
                                        <div style={{fontWeight:'400'}} className="mt-3">
                                        <span style={{fontWeight:'500',color:'black'}}>For sales:</span><br></br>
                                        +91 2071966872<br></br>
                                        <span style={{fontWeight:'500',color:'black'}}>For general:</span><br></br>
                                        020-24242999
                                        </div>
                                        </p>
                                    </div>
                                    <div className="col-md-7"></div>
                                    </div>

                                    <div className="row mt-4">
                                    <div className="col-md-1">
                                        <ion-icon style={{color:'#0b6cb4',fontSize:'40px'}} name="shapes"></ion-icon>
                                    </div>
                                    <div className="col-md-11">
                                        <p style={{color:'#0b6cb4',fontWeight:'bold'}}>Office<br></br><span style={{fontWeight:'400',color:"black"}}>Office 306, 3rd Floor, Ganga Collidium 1,<br></br> Marketyard-Kondhwa Road Pune 37</span></p>
                                    </div>
                                    {/* <div className="col-md-7"></div> */}
                                    </div>


                                    <div className="row mt-4">
                                    <div className="col-md-1">
                                        <ion-icon style={{color:'#0b6cb4',fontSize:'40px'}} name="mail"></ion-icon>
                                    </div>
                                    <div className="col-md-11">
                                        <p style={{color:'#0b6cb4',fontWeight:'bold'}}>Email<br></br><span style={{fontWeight:'300'}}>info@jaywantgroup.com
                                    </span></p>
                                    </div>
                                    </div>


                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function ContectLocation()
{
    return(
        <>
            <div className="mb-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7540.133836581807!2d74.72716369231046!3d19.104720028422996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb0880b94485d%3A0x26c76370437e9d0d!2sNew%20Arts%2C%20Commerce%20and%20Science%20College!5e0!3m2!1sen!2sin!4v1713411964552!5m2!1sen!2sin" width={"100%"} height={"450"} style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default ContectDocPart;
export {CONTACTUS,ContectForm,ContectLocation}