import React from "react";
import stitch from "../stitch.png";
import styled from "styled-components";

export default function imgDefault(){
    const MyImgLogo= styled.img`
    max-width: 9em;
    `;
    
    return (
        <MyImgLogo src={stitch} alt="Img Logo"  />
    );
}