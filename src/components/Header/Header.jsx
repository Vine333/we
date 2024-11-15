import React from 'react';
import {styled} from "styled-components";
import {AppLogo} from "../../assets/SVG/index.js"
import BurgerButton from "../Burger/Burger";





const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
            <div className="logo">
                <AppLogo/>
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
            </Container>
        </HeaderWrapper>
    );
};



const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  //border: 1px solid black;
`;
 const Container = styled.div`
   width: 80%;
   display: flex;
   justify-content: space-around;
   flex-direction: row;
   color: #1a1a1a;
   padding:5px;
   @media(max-width: 1023px){
     justify-content: space-between;
   }
 `
const NavLinks = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: end;
  color: black;
  a{
    color: black;
    cursor: pointer;
  }
  column-gap: 20px;
  background-color: #FFFFFF;
  padding-right: 20px;
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

export default Header;
