import React from "react";

function SocialEventsDocPart()
{
    return (
        <>
            <section style={{backgroundImage:'url(/image/factories.webp)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                <div style={{backgroundColor:'rgba(0, 0, 0, 0.8)'}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 text-white text-center" style={{paddingBottom:'120px',paddingTop:'120px'}}>
                                <h1 style={{fontSize:'55px',fontWeight:'bolder'}}>Social Events</h1>
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
                            <h5 style={{fontWeight:'300'}}><a style={{textDecoration:'none'}} href="/">Home</a> / Social Events</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function SocialEventsmenu()
{
    return(
        <>
            <section>
                <div style={{borderBottom:'1px solid black'}} className="pb-3 mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center" style={{marginTop:'100px',marginBottom:'100px'}}>
                            <h1>Social Events</h1>
                            </div>  
                        </div>  
                        <div className="row">

                            <div className="col-md-2 text-center">
                                <p style={{fontSize:'17px',color:'#0b6cb4',borderBottom:'1px solid #0b6cb4'}} className="pb-2">Show All</p>
                            </div>
                            <div className="col-md-2 text-center">
                                <p style={{fontSize:'17px'}}>Awards & Recognization</p>
                            </div>
                            <div className="col-md-2 text-center">
                                <p style={{fontSize:'17px'}}>Social Campagins</p>
                            </div>
                            <div className="col-md-2 text-center">
                                <p style={{fontSize:'17px'}}>Tournament & Events</p>
                            </div>
                            <div className="col-md-2 text-center">
                                <p style={{fontSize:'17px'}}>Life @Jaywant</p>
                            </div>
                            <div className="col-md-2 text-center">
                                <p style={{fontSize:'17px'}}>Jito Connect 2022</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>  
        </>
    )
}


function SocialEventsCards()
{
    return(
        <>
            <section>
                <div>
                    <div className="container">
                        <div className="row">

                            <div className="col-md-4">
                                <img src="/image/social1.webp" width={'100%'}/>
                            </div>
                            <div className="col-md-4">
                                <img src="/image/social2.webp" width={'100%'}/>
                            </div>
                            <div className="col-md-4">
                                <img src="/image/social3.webp" width={'100%'}/>
                            </div>

                        </div>

                        <div className="row mt-4">
                            <div className="col-md-4">
                                <img src="/image/social4.webp" width={'100%'}/>
                            </div>
                            <div className="col-md-4">
                                <img src="/image/social5.webp" width={'100%'}/>
                            </div>
                            <div className="col-md-4">
                                <img src="/image/social6.webp" width={'100%'}/>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-4">
                                <img src="/image/social7.webp" width={'100%'}/>
                            </div>
                            <div className="col-md-4">
                                <img src="/image/social8.webp" width={'100%'}/>
                            </div>
                            <div className="col-md-4">
                                <img src="/image/social9.png" width={'100%'}/>
                            </div>
                        </div>
                        <div className="row mt-4 mb-5">
                            <div className="col-md-4">
                                <img src="/image/social10.png" width={'100%'}/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default SocialEventsDocPart;
export {SocialEventsmenu,SocialEventsCards}