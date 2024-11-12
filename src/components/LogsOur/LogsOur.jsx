import React from 'react';
import logo1 from '../img/4.svg'
import logo2 from '../img/6.svg'
import logo3 from '../img/3.svg'
import logo4 from '../img/5.svg'
import logo5 from '../img/1.svg'
import logo6 from '../img/2.svg'

import {styled} from 'styled-components'


export default function LogsOur() {
    return (<Wrapper>
        <Conteiner>
        <h2>
            Our Clients
        </h2>
        <p>
            We have been working with some Fortune 500+ clients
        </p>
        <div>
            <img src={logo1}/>
            <img src={logo2}/>
            <img src={logo3}/>
            <img src={logo4}/>
            <img src={logo5}/>
            <img src={logo6}/>
            <img src={logo3}/>
        </div>
        </Conteiner>
    </Wrapper>);
};
const Conteiner = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  h2{
  padding-top: 20px;
  margin-bottom: -15px;
  padding-bottom: 20px;
}
  p{
    padding: 10px;
  }
  div{
    display: flex;
    justify-content: space-evenly;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  
`

