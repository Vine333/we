import React from 'react';
import {styled} from "styled-components";
import './header.css'
import AppLogo from "./img/Logo.svg"

const Header = () => {

    return (

<HeaderWrapper>

        <div className="logo">
            <img src={AppLogo}/>

        </div>
        <div className="link">
            <div className="home"> Home</div>
            <div className="features">Features</div>
            <div className="community">Community</div>
            <div className="blog">Blog</div>
            <div className="Pricing">Pricing</div>
        </div>
        <div className="btnheader">
            <button className=" CONST register">Register Now 🠒</button>
        </div>





</HeaderWrapper>

    );


};

export default Header;

const HeaderWrapper = styled.header`
    display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: #1a1a1a;
  padding-inline: 50px;
  
  
`
