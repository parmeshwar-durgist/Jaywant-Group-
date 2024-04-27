import React from "react";
import SocialEventsDocPart,{SocialEventsmenu,SocialEventsCards} from "./SocialEventsDocPart.jsx";

function SocialEvents()
{
    return(
        <>
            <SocialEventsDocPart></SocialEventsDocPart>
            <SocialEventsmenu></SocialEventsmenu>
            <SocialEventsCards></SocialEventsCards>
        </>
    )
}
export default SocialEvents;