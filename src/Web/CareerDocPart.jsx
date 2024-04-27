import React from "react";

function CareerDocPart()
{
    return(
        <>
            <section style={{backgroundImage:'url(/image/factories.webp)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                <div style={{backgroundColor:'rgba(0, 0, 0, 0.8)'}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 text-white text-center" style={{paddingBottom:'120px',paddingTop:'120px'}}>
                                <h1 style={{fontSize:'55px',fontWeight:'bolder'}}>Career</h1>
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
                            <h5 style={{fontWeight:'300'}}><a style={{textDecoration:'none'}} href="/">Home</a> / Career</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function CareerInfoForm()
{
    return(
        <>
            <section style={{backgroundColor:'rgba(236, 235, 235, 0.3)'}}>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-6 mt-5 mb-5">
                            <div className="text-center">
                                <img src="/image/jayantCircle.webp" width={'80%'} className="mb-2" />
                                <h5 style={{fontWeight:'bolder'}}>Ready To Take Your<br></br>
                                Career in Real Estate To The Next Level ?</h5>
                            </div>
                        </div>

                        
                        <div className="col-md-6 bg-white mt-5 mb-5 shadow" style={{}}>
                            <form>
                                <div className="p-3 pt-4 pb-4">
                                    <h3 style={{color:'#0b6cb4'}}>Upload Your Resume<br></br> ___</h3>
                                    <div className="p-4" style={{border:'10px solid rgba(236, 235, 235, 0.9)'}}>
                                        <p style={{fontWeight:'bolder',marginTop:'10px'}}>Your Name:</p>
                                        <input type="text" name="name" className="form-control" />
                                        <p style={{fontWeight:'bolder',marginTop:'10px'}}>Email Address:</p>
                                        <input type="email" name="name" className="form-control" />
                                        <p style={{fontWeight:'bolder',marginTop:'10px'}}>Message:</p>
                                        <textarea name="message" className="form-control" cols={'10'} rows={'7'}></textarea>
                                        <p style={{fontWeight:'bolder',marginTop:'10px'}}>Resume Upload:</p>
                                        <input type="file" name="name" className="form-control" />
                                        <div className="text-center mt-3">
                                            <button className="btn form-control text-white " style={{backgroundColor:'#33C3F0'}}>SEND</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CareerDocPart;
export {CareerInfoForm}