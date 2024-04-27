import React from "react";
import OurProjects,{HomeOurProjects} from "./ProjectDocPart.jsx"
import Ourproject from "./HomeDate.jsx"

function Projects()
{
    return(
        <>
            <OurProjects></OurProjects>
            <div className="container mt-5">
                <div className="row">
                    <HomeOurProjects img={Ourproject[0].img} heading={Ourproject[0].heading} location={Ourproject[0].location} Acre={Ourproject[0].Acre} plot={Ourproject[0].plot}></HomeOurProjects>
                    <HomeOurProjects img={Ourproject[1].img} heading={Ourproject[1].heading} location={Ourproject[1].location} Acre={Ourproject[1].Acre} plot={Ourproject[1].plot}></HomeOurProjects>
                    <HomeOurProjects img={Ourproject[2].img} heading={Ourproject[2].heading} location={Ourproject[2].location} Acre={Ourproject[2].Acre} plot={Ourproject[2].plot}></HomeOurProjects>
                    <HomeOurProjects img={Ourproject[3].img} heading={Ourproject[3].heading} location={Ourproject[3].location} Acre={Ourproject[3].Acre} plot={Ourproject[3].plot}></HomeOurProjects>
                    <HomeOurProjects img={Ourproject[4].img} heading={Ourproject[4].heading} location={Ourproject[4].location} Acre={Ourproject[4].Acre} plot={Ourproject[4].plot}></HomeOurProjects>
                    <HomeOurProjects img={Ourproject[5].img} heading={Ourproject[5].heading} location={Ourproject[5].location} Acre={Ourproject[5].Acre} plot={Ourproject[5].plot}></HomeOurProjects>
                    <HomeOurProjects img={Ourproject[6].img} heading={Ourproject[6].heading} location={Ourproject[6].location} Acre={Ourproject[6].Acre} plot={Ourproject[6].plot}></HomeOurProjects>
                    <HomeOurProjects img={Ourproject[7].img} heading={Ourproject[7].heading} location={Ourproject[7].location} Acre={Ourproject[7].Acre} plot={Ourproject[7].plot}></HomeOurProjects>
                    <HomeOurProjects img={Ourproject[8].img} heading={Ourproject[8].heading} location={Ourproject[8].location} Acre={Ourproject[8].Acre} plot={Ourproject[8].plot}></HomeOurProjects>
                    <HomeOurProjects img={Ourproject[9].img} heading={Ourproject[9].heading} location={Ourproject[9].location} Acre={Ourproject[9].Acre} plot={Ourproject[9].plot}></HomeOurProjects>
                </div>
            </div>
            
        </>
    )
}

export default Projects;