import React from 'react';

import Button from "../Button/Button.jsx";
import styled from 'styled-components'


const MenuWrapper = styled.div`
  display: ${({ isOpen }) => ( isOpen ? 'flex' : 'none')};
  background-color: white;
  position: absolute;
  top: 70px;
  right: 30px;
  width: 100%;
  border: 1px solid #ccc;
  z-index: 1000;

  ${({ isOpen }) => isOpen && `
    flex-direction: column;
    width: 150px;
    color: black;
    padding: 15px 16px;
    text-align: left;
  `}
`;

const MenuLink = styled.a`
  color: black;
  padding: 15px 16px;
  text-decoration: none;

  &:hover {
    background-color: #ddd; 
  }
`;

const Menu = ({ Open }) => {
    return (
        <MenuWrapper isOpen={Open}>

                <MenuLink href='#'>Home</MenuLink>
                <MenuLink href='#'>Features</MenuLink>
                <MenuLink href='#'>Community</MenuLink>
                <MenuLink href='#'>Blog</MenuLink>
                <MenuLink href='#'>Pricing</MenuLink>
                <Button>Register Now🠒</Button>

        </MenuWrapper>
    );
};
export default Menu;
