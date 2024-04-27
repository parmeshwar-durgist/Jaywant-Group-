import React from "react";
import "./style.css";

function Case_Studies_Client_Testimonial()
{
    return(
        <>
            <section style={{backgroundImage:'url(/image/factories.webp)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                <div style={{backgroundColor:'rgba(0, 0, 0, 0.8)'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 text-white text-center" style={{paddingBottom:'120px',paddingTop:'120px'}}>
                                <h1 style={{fontSize:'55px',fontWeight:'bolder'}}>Case Studies & Client Testimonials</h1>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{backgroundColor:'rgba(122, 122, 122, 0.1)'}}>
                <div className="container pb-3 pt-3 " >
                    <div className="row">
                        <div className="col-md-12">
                            <h5 style={{fontWeight:'300'}}><a style={{textDecoration:'none'}} href="/">Home</a> / Case Studies</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Client_Testimonial()
{
    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5 mb-5 text-center">
                            <h5 style={{color:'#0b6cb4'}}>_________  Testimonial  __________</h5>
                            <h1 style={{fontWeight:'bold'}}>What Our Client's Say</h1>
                        </div>
                    </div>    
                </div>
            </section>

            <div id="carouselExampleIndicators" className="carousel slide " style={{paddingTop:'60px',paddingBottom:'100px'}} data-ride="carousel">
            <ol className="carousel-indicators ">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active bg-dark"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1" className="bg-dark"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2" className="bg-dark"></li>
            </ol>
            <div className="carousel-inner">
            
                <div className="carousel-item active  text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <h1><i style={{color:'#0b6cb4'}} class="fa fa-quote-left" aria-hidden="true"></i></h1>
                                    <h5 style={{fontWeight:'400'}} className="mt-2">Excellent experience with Jaywant Group. Really appreciate the way they addressed
                                    our need and explained finer details about the property we wanted.</h5>
                                    <h5 className="mt-4">Amtulla Dahadwale</h5>
                                    <h5>Pune</h5>
                            </div>
                            <div  className="col-md-2"></div>
                            <div className="col-md-5">
                                <h1><i style={{color:'#0b6cb4'}} class="fa fa-quote-left" aria-hidden="true"></i></h1>
                                    <h5 style={{fontWeight:'400'}} className="mt-2">
                                    
                                    I am Suresh Patel have small manufacturing unit in pune for expansion we purchased
									land from Dineshji rathod (Jaywant group)Doing Business Deal was great experience of
									faith , trust & clarification which is reputation of real business men,Thank you,GBU
									all                                    
                                    </h5>
                                    <h5 className="mt-4">Suresh Patel</h5>
                                    <h5>Om Decor</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item   text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <h1><i style={{color:'#0b6cb4'}} class="fa fa-quote-left" aria-hidden="true"></i></h1>
                                    <h5 style={{fontWeight:'400'}} className="mt-2">Recently invested money in property through Jaywant group. Was a
									fantastic experience with the ever-enjoyable Mr. Dinesh Rathod. We get good monthly
									income through industrial shed rent. Have good communication with firm
									representatives. Highly recommend people to invest money through Jaywant Group</h5>
                                    <h5 className="mt-4">Amtulla Dahadwale</h5>
                                    <h5>Pune</h5>
                            </div>
                            <div  className="col-md-2"></div>
                            <div className="col-md-5">
                                <h1><i style={{color:'#0b6cb4'}} class="fa fa-quote-left" aria-hidden="true"></i></h1>
                                    <h5 style={{fontWeight:'400'}} className="mt-2">It was absolutely delightful experience working with Mr Dinesh Rathod.
									I got my property and warehouse built on it by Jaywant Civil Works, They were
									quality construction and reasonable.</h5>
                                    <h5 className="mt-4">AKIL</h5>
                                    <h5>Pune</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item  text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <h1><i style={{color:'#0b6cb4'}} class="fa fa-quote-left" aria-hidden="true"></i></h1>
                                    <h5 style={{fontWeight:'400'}} className="mt-2">The experience of purchasing property in the project "Gaud Dhara" being executed by
									Jaywant Group has been a rather pleasing one. Right from the day of enquiry till the
									execution of document, information or queries, be it related to project,
									documentation or payment were promptly replied. In short, ease of doing business,
									integrity and clarity were all experienced here while buying my dream Property.</h5>
                                    <h5 className="mt-4">Ali Attarwala</h5>
                                    <h5>Dubai</h5>
                            </div>
                            <div  className="col-md-2"></div>
                            <div className="col-md-5">
                                <h1><i style={{color:'#0b6cb4'}} class="fa fa-quote-left" aria-hidden="true"></i></h1>
                                    <h5 style={{fontWeight:'400'}} className="mt-2">Excellent experience with Jaywant Group. Really appreciate the way they addressed
                                    our need and explained finer details about the property we wanted.</h5>
                                    <h5 className="mt-4">S. Mala</h5>
                                    <h5>Kuwait</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>

        </>
    )
}


function CaseStudiesPart()
{
    return(
        <>
            <section style={{backgroundColor:'rgba(236, 235, 235, 0.4)'}}>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-12 mt-5 mb-5 text-center pb-4" style={{borderBottom:'1px solid black'}}>
                            <h5 style={{color:'#0b6cb4'}}>_________  Why Choose Us  __________</h5>
                            <h1 style={{fontWeight:'bold',color:'#0b6cb4'}}>Case Studies</h1>
                        </div>
                    </div>    
                </div>

                <div className="container" >
                    <div className="row mt-4">
                        <div className="col-md-5">
                            <img src="/image/f1.webp" width={'100%'} height={'350px'} />
                        </div>
                        <div className="col-md-7 bg-white">
                            <h5 className="mt-4" style={{color:'#0b6cb4'}}>Go Ahead and Invest without any second thought!</h5>
                            <p> <ion-icon style={{color:'#0b6cb4'}} name="location"></ion-icon> SHED NO: 20, VELU ESTATE PUNE</p>
                            <p> <ion-icon style={{color:'#0b6cb4'}} name="person"></ion-icon> ABDUL KADER VELANWADAWALA</p>
                            <span>
                            Jaywant Group Owner Mr Dinesh Rathod is a gem of a person. Commitment and Reliability are the pillars of his success. I bought a pretty big warehouse on one of his real estate, which was delivered to me on time and without any hassles.He has been very co-operative and understanding from the day we have worked together.
                            </span>
                        </div>
                    </div>


                    <div className="row mt-4">
                        <div className="col-md-5">
                            <img src="/image/f2.webp" width={'100%'} height={'350px'} />
                        </div>
                        <div className="col-md-7 bg-white">
                            <h5 className="mt-4" style={{color:'#0b6cb4'}}>
                            The construction of the shed and leasing the property on rent is both provided by Jaywant group.
                            </h5>
                            <p> <ion-icon style={{color:'#0b6cb4'}} name="location"></ion-icon>Jay Nagar</p>
                            <p> 
                            <ion-icon style={{color:'#0b6cb4'}} name="calendar"></ion-icon>
                             06/27/2022  
                             <ion-icon style={{color:'#0b6cb4',marginLeft:'20px'}} name="person"></ion-icon>
                             Mustansir Ismail.</p>
                            <span>
                            I would like to share with you the experience which I had by my decision on investments. We are all been taught that INTEREST is Haraam in our community and my colleagues has also adviced me that the money which I have and is lying idle with me is getting lesser value day by day because of the Rupee going down day by day.
                           </span>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-5">
                            <img src="/image/f3.png" width={'100%'} height={'350px'} />
                        </div>
                        <div className="col-md-7 bg-white">
                            <h5 className="mt-4" style={{color:'#0b6cb4'}}>
                            I love my new property in Jaywant Group

                            </h5>
                            <p> <ion-icon style={{color:'#0b6cb4'}} name="location"></ion-icon>SHED NO: 20, VELU ESTATE PUNE</p>
                            <p> 
                             <ion-icon style={{color:'#0b6cb4'}} name="person"></ion-icon>
                             Nakoda group,Vijay shah</p>
                            <span>
                            Jaywant Group Owner Mr Dinesh Rathod is a gem of a person. Commitment and Reliability are the pillars of his success. I bought a pretty big warehouse on one of his real estate, which was delivered to me on time and without any hassles.He has been very co-operative and understanding from the day we have worked together.
                            </span>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-5">
                            <img src="/image/f1.webp" width={'100%'} height={'350px'} />
                        </div>
                        <div className="col-md-7 bg-white">
                            <h5 className="mt-4" style={{color:'#0b6cb4'}}>I am very happy with my investment!</h5>
                            <p> <ion-icon style={{color:'#0b6cb4'}} name="location"></ion-icon>SHED NO: 20, KELAWADE ESTATE PUNE</p>
                            <p> <ion-icon style={{color:'#0b6cb4'}} name="person"></ion-icon> NAZIR BAKROLWALA</p>
                            <span>
                            I recently bought a Shed on rental basis scheme from Mr Dinesh Rathod (Owner of Jaywant group) During our ongoing financial transactionS, he was very flexible and helpful. He stuck to his commitments and delivered the shed on time and has been receiving rents before time from him.
                            </span>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-5">
                            <img src="/image/f4.webp" width={'100%'} height={'350px'} />
                        </div>
                        <div className="col-md-7 bg-white">
                            <h5 className="mt-4" style={{color:'#0b6cb4'}}>I look forward to work with him again in near future!</h5>
                            <p> <ion-icon style={{color:'#0b6cb4'}} name="location"></ion-icon>NO: 34, KHED SHIVAPUR R ZONE PLOTS</p>
                            <p> <ion-icon style={{color:'#0b6cb4'}} name="person"></ion-icon>HUSSAIN KHANBHAIWALA</p>
                            <span>
                            Jaywant Group Owner Mr Dinesh Rathod is a gem of a person. Commitment and Reliability are the pillars of his success. I bought a pretty big warehouse on one of his real estate, which was delivered to me on time and without any hassles.He has been very co-operative and understanding from the day we have worked together.
                            </span>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-5 mb-5">
                            <img src="/image/f3.png" width={'100%'} height={'350px'} />
                        </div>
                        <div className="col-md-7 bg-white">
                            <h5 className="mt-4" style={{color:'#0b6cb4'}}>We Experienced that investing in Jaywant Group is of great Convenience.</h5>
                            <p> <ion-icon style={{color:'#0b6cb4'}} name="location"></ion-icon>VELU ESTATE PUNE</p>
                            <p> <ion-icon style={{color:'#0b6cb4'}} name="person"></ion-icon>Samina patanwala</p>
                            <span>
                            My self Samina patanwala, We've bought a land in project led by Jaywant Group at pune bangalore highway call as area VELU near upcoming ring road and metro project before a year ago after the development of this by the Jaywant Group
                            </span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Case_Studies_Client_Testimonial;
export {Client_Testimonial,CaseStudiesPart}