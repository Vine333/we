import React from 'react';
import logo1 from '../img/4.svg'
import logo2 from '../img/6.svg'
import logo3 from '../img/3.svg'
import logo4 from '../img/5.svg'
import logo5 from '../img/1.svg'
import logo6 from '../img/2.svg'

import {styled} from 'styled-components'
import classes from './LogsOur.module.css'

export default function LogsOur() {
    return (
        <div className={classes.block2}>
            <h2 className={classes.ourclient}>
                Our Clients
            </h2>
            <p className="bl2ps">
                We have been working with some Fortune 500+ clients
            </p>
            <Logo >
                <img src={logo1}/>
                <img src={logo2}/>
                <img src={logo3}/>
                <img src={logo4}/>
                <img src={logo5}/>
                <img src={logo6}/>
                <img src={logo3}/>
            </Logo>
        </div>);
};

const Logo = styled.div`
  display: flex;
  justify-content: space-evenly;
 
`

