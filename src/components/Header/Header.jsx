import React from 'react';
import {styled} from "styled-components";
import {useState} from "react";
import AppLogo from "../img/Logo.svg"
import Button from "../Button/Button.jsx";
import classes from './header.module.css'

import BurgerButton from "../Burger/Burger";

const Header = () => {

    return (

<HeaderWrapper>

        <div className="logo">
            <img src={AppLogo}/>

        </div>

        <div className={classes.link}>
            <a className="home"> Home</a>
            <a className="features">Features</a>
            <a className="community">Community</a>
            <a className="blog">Blog</a>
            <a className="Pricing">Pricing</a>
        </div>
        <div className={classes.btnheader}>
            <Button className={classes.Reghead}>Register Now 🠒</Button>
        </div>
    <BurgerButton className={classes.burger2}/>





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
