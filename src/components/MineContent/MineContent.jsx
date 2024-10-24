import React from 'react';
import {styled} from "styled-components"
import Illustration from "../img/Illustration.svg"
import './MineContent.css'
import Button from "../Button/Button.jsx";



const MineContent = () => {
    return (

        <Wrapper>
            <div className="block1">
                <div className="manie">
                    <h1 className="mine_txt">Lessons and insights<br/>
                        <p className="mine_sms">from 8 years</p>
                    </h1>
                    <p className="mine_ps">Where to grow your business as a photographer: site or social media?</p>
                    <Button> Register </Button>
                </div>

                <div className="illustration">

                    <img src={Illustration}/>
                </div>
            </div>
            </Wrapper>

    );
};

export default MineContent;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #F5F7FA;
  margin: 20px -60px;
  padding-top: 20px;
  padding-bottom: 20px;
`