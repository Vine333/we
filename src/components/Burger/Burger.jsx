import React, { useState} from 'react';
import styled from 'styled-components';
import Menu from '../Burger/Menu.jsx';

const BurgerButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Dp>
            <BurgerBtn open={isOpen} onClick={toggleMenu}>
                <Bar open={isOpen} />
                <Bar open={isOpen} />
                <Bar open={isOpen} />
            </BurgerBtn>
            <Menu Open={isOpen} />
        </Dp>
    );
};

const BurgerBtn = styled.div`
  display: ${({ open }) => (open ? 'none' : 'block')};

  ${({ open }) => open && `
    display: flex;
    flex-direction: column;
    cursor: pointer;
  `}
  
`;

const Dp = styled.div`
  display: none;
  @media (max-width: 1023px) {
    display: block;
  }
`
const Bar = styled.div`
  width: 30px;
  height: 4px;
  background-color: black;
  margin: 4px 0;
  transition: all 0.5s ease;

  &:nth-child(1) {
    ${({ open }) => open && `
      transform: rotate(45deg) translate(5px, 5px);
    `}
  }
  &:nth-child(2) {
    ${({ open }) => open && `
      opacity: 0;
    `}
  }
  &:nth-child(3) {
    ${({ open }) => open && `
      transform: rotate(-45deg) translate(5px, -5px);
    `}
  }
`;

export default BurgerButton;