import React from "react";
import imgs from "../../img";
import styled from "styled-components";

export default function imgDefault(){
    const MyImgLogo= styled.img`
    max-width: 9em;
    `;
    
    return (
        <MyImgLogo src={imgs.alter} alt="Img Alter"  />
    );
}