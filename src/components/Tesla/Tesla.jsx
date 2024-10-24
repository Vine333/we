import React from 'react';
import TeslaF from '../img/tesla.svg'
import logo1 from '../img/4.svg'
import logo2 from '../img/6.svg'
import logo3 from '../img/3.svg'
import logo4 from '../img/5.svg'
import logo5 from '../img/1.svg'
import logo6 from '../img/2.svg'
import classes from "./Tesla.module.css";
import {styled} from 'styled-components'

const Tesla = () => {
    return (

        <Wrapper>
            <div className={classes.conteiner}>
                <div className={classes.imgtesla}>
                    <img src={TeslaF}/>
                </div>
                <div className={classes.text}>
                    <div className={classes.txttesla}>
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum
                        risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam
                        in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
                        molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis
                        tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
                        potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate
                        odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus
                        ac sit amet magna.
                    </div>
                    <div className={classes.timsmit}>
                        <p className={classes.TS}>Tim Smith</p>
                        <p>British Dragon Boat Racing Association</p>

                    </div>
                    <div className={classes.logoMeet}>
                        <img src={logo1}/>
                        <img src={logo2}/>
                        <img src={logo3}/>
                        <img src={logo4}/>
                        <img src={logo5}/>
                        <img src={logo6}/>
                        <a href="#">Meet all customers 🠒</a>
                    </div>

                </div>
            </div>
        </Wrapper>

    );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #F5F7FA;
  margin: 30px -60px;
  padding-top: 20px;
  padding-bottom: 20px;
`

export default Tesla;