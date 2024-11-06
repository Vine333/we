import React from 'react';
import {styled} from "styled-components";
import AppLogo from "../img/Logo.svg"
import BurgerButton from "../Burger/Burger";





const Header = () => {
    return (
        <HeaderWrapper>
            <div className="logo">
                <img src={AppLogo} alt="Logo" />
            </div>
            <NavLinks>
                <a className="home">Home</a>
                <a className="features">Features</a>
                <a className="community">Community</a>
                <a className="blog">Blog</a>
                <a className="Pricing">Pricing</a>
            </NavLinks>
            <BtnHeader>
                Register Now
            </BtnHeader>
            <BurgerButton />
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
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 20px;
  padding-top: 8px;
  cursor: pointer;
  color: black;
  align-items: center;
  column-gap: 20px;
  background-color: #FFFFFF;
  margin-left: 210px;
  padding-inline: 32px;

  a {
    color: black;
  }

  a:hover {
    color: #535bf2;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

const BtnHeader = styled.button`
  padding: 10px 15px;
  background: #43a046;
  color: #FFFFFF;
  border: 1px #717171;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #4CAF4F;
    border-radius: 4px;
  }
  
  @media (max-width: 1023px) {
    display: none;
  }
`;


