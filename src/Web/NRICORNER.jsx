import React from "react";
import NirDocPart,{INVESTMENT,NRICornerQuestions,JaywantFeatured} from "./NriDocPart.jsx"

function NRICORNER()
{
    return(
        <>
            <NirDocPart></NirDocPart>
            <INVESTMENT></INVESTMENT>
            <NRICornerQuestions></NRICornerQuestions>
            <JaywantFeatured></JaywantFeatured>
        </>
    )
}

export default NRICORNER;