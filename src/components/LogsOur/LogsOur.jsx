import React from 'react';
import {Logo1,Logo2,Logo3,Logo4,Logo5,Logo6} from "../../assets/SVG/index.js"
import {styled} from 'styled-components'


const LogsOur = ()=> {
    return (<Wrapper>
        <div className='Container'>
        <h2 className='OurClients'>
            Our Clients
        </h2>
        <p className='Paragraph'>
            We have been working with some Fortune 500+ clients
        </p>
        <div className='Logs'>
            <Logo1/>
            <Logo2/>
            <Logo3/>
            <Logo4/>
            <Logo5/>
            <Logo6/>
            <Logo3/>
        </div>
        </div>
    </Wrapper>);
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  .Container{
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .OurClients{
    padding-top: 20px;
    margin-bottom: -15px;
    padding-bottom: 20px;
  }
  .Paragraph{
    padding: 10px;
  }
  .Logs{
    display: flex;
    justify-content: space-evenly;
  }
  
`
export default LogsOur;

