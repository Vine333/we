import React from 'react';
import styled from 'styled-components'

const Button = ({children,isActive,...props}) => {
    return (
        <Btn {...props}>

            {children}
        </Btn>
    );
};
const Btn = styled.button`
  padding: 10px 15px;
  background: #43a046;
  color: #FFFFFF;
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  white-space: nowrap;
  border: 1px #717171;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #52af55;
  }
`
export default Button;