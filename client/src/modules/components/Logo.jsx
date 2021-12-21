import React from "react";
import imgs from "../img.js";
import styled from "styled-components";

export default function Logo(){
    const MyImgLogo= styled.img`
    max-width: 10em;
    `;
    const DivLogo= styled.div`
    position: absolute;
    z-index: 30;
    `;
    return (
        <DivLogo>
            <MyImgLogo src={imgs.logo} alt="Img Logo"  />
        </DivLogo>
    );
}