import React from 'react';
import {styled} from "styled-components"
import Illustration from "../img/Illustration.svg"
import Button from "../Button/Button.jsx";


const MineContent = () => {
    return (

        <Wrapper>
            <Block1>
                <Manie>
                    <MineText>Lessons and insights<br/>
                        <MineSms>from 8 years</MineSms>
                    </MineText>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <Button> Register </Button>
                </Manie>

                <Fotka>

                    <img src={Illustration}/>
                </Fotka>
            </Block1>
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
const Block1 = styled.div`

  display: flex;
  justify-content: space-between;
  padding-top: 40px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
const Manie = styled.div`
  padding-right: 20rem;
  gap: 20px;
  p{
    padding-bottom: 10px;
  }
  @media (max-width: 900px){
    order: 1;
    padding-right: 0px;
    padding-bottom: 30px;
  }

`
const MineText = styled.h1`
  font-size: 38px;
  color: #4CAF4F;
  padding-bottom: 10px;
`
const MineSms = styled.p`
  color: #263238;
  font-size: 38px;
  padding-bottom: 10px;
`
const Fotka = styled.div`
  scale: 1;
  
  @media(max-width: 900px){
    order: 2;
  }
`
export default MineContent;
