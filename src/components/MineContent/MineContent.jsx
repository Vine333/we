import React from 'react';
import {styled} from "styled-components"
import Illustration from "../img/Illustration.svg"
import Button from "../Button/Button.jsx";


const MineContent = () => {
    return (

        <Wrapper>
            <Container>
                <div>
                    <h1>Lessons and insights<br/>
                        <p>from 8 years</p>
                    </h1>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <Button> Register </Button>
                </div>

                <Img>

                    <img src={Illustration}/>
                </Img>
            </Container>
        </Wrapper>

    );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #F5F7FA;
  padding: 20px;
  box-sizing: border-box;
  //border: 1px solid black;
`
const Container = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 40px;
  text-align: center;
  justify-content: space-between;
  //border: 1px solid black;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }

  div {
    gap: 20px;
    //border: 1px solid black;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;

    p {
      padding-bottom: 10px;

    }

    @media (max-width: 900px) {
      order: 1;
      padding-right: 0px;
      padding-bottom: 30px;
    }

    h1 {
      font-size: 38px;
      color: #263238;
      padding-bottom: 10px;

      p {
        color: #4CAF4F;
        font-size: 38px;
        padding-bottom: 10px;
      }
    }
  }
`
const Img = styled.div`
  scale: 0.9;
  //border: 1px solid black;

  @media (max-width: 900px) {
    order: 2;
  }
`
export default MineContent;
