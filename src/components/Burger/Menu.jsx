import React from 'react';

import Button from "../Button/Button.jsx";
import styled from 'styled-components'


const Menu = ({open}) => {
    return (<MenuWrapper open={open}>

        <MenuLink href='#'>Home</MenuLink>
        <MenuLink href='#'>Features</MenuLink>
        <MenuLink href='#'>Community</MenuLink>
        <MenuLink href='#'>Blog</MenuLink>
        <MenuLink href='#'>Pricing</MenuLink>
        <Button>Register Now🠒</Button>

    </MenuWrapper>);
};

const MenuWrapper = styled.div`
  display: ${({open}) => (open ? 'flex' : 'none')};
  background-color: white;
  position: absolute;
  top: 70px;
  right: 30px;
  width: 100%;
  border: 1px solid #ccc;
  z-index: 1000;

  ${({open}) => open && `
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
export default Menu;
