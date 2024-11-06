import React from 'react';
import TeslaF from '../img/tesla.svg'
import logo1 from '../img/4.svg'
import logo2 from '../img/6.svg'
import logo3 from '../img/3.svg'
import logo4 from '../img/5.svg'
import logo5 from '../img/1.svg'
import logo6 from '../img/2.svg'
import {styled} from 'styled-components'

const Tesla = () => {
    return (

        <Wrapper>
            <Conteiner>
                <Imgtesla>
                    <img src={TeslaF}/>
                </Imgtesla>
                <Text>
                    <div >
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum
                        risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam
                        in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
                        molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis
                        tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
                        potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate
                        odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus
                        ac sit amet magna.
                    </div>
                    <div>
                        <TS>Tim Smith</TS>
                        <p>British Dragon Boat Racing Association</p>

                    </div>
                    <LogoMeet>
                        <img src={logo1}/>
                        <img src={logo2}/>
                        <img src={logo3}/>
                        <img src={logo4}/>
                        <img src={logo5}/>
                        <img src={logo6}/>
                        <a href="#">Meet all customers 🠒</a>
                    </LogoMeet>

                </Text>
            </Conteiner>
        </Wrapper>

    );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #F5F7FA;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100vw;
 
`
const Conteiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 20px;
  padding-inline: 50px; 
  gap: 20px;
  @media (max-width:767px ) {
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      padding-top: 50px;
      flex-direction: column;
      padding-inline: 0px;
    }
`
const  Imgtesla = styled.div`
  display: flex;

  scale: 2;
  padding-top: 40px;
  padding-left: 120px;
  @media (max-width:767px ) {


    order: 1;
    padding: 0;
  }
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 230px;
  padding-top: 50px;
  text-align: left;
  gap: 20px;
  @media (max-width:767px ) {


    order: 2;
    padding-inline: 50px;
    padding-top: 60px;
  }

  
`

const TS = styled.div`
  color: #28cb8b;
`
const LogoMeet = styled.div`
  display: flex;
  justify-content: space-between;
  a{
    padding-top: 5px;
    color: #28cb8b;
  }
`

export default Tesla;