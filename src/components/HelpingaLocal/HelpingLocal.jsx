import React from 'react';
import Click from '../img/click.svg'
import People from '../img/people.svg'
import Heands from '../img/heands.svg'
import Wallet from '../img/wallet.svg'
import styled from 'styled-components'
import classes from './HelpingLocal.module.css'

const HelpingLocal = () => {
    return (<Wrapper>
            <div className={classes.frame6}>
                <div className={classes.fr6text}>
                    <span>Helping a local </span><br/>
                    <span className={classes.BusinessReinventItself}>business reinvent itself</span>
                    <div className={classes.opis}>We reached here with our hard work and dedication</div>
                </div>

                <div className={classes.det1}>
                    <div className={classes.memberscount}>
                        <div className={classes.peoplefoto}>
                            <img src={People} alt=""/></div>
                        <div className={classes.count}>
                            <h1>2,245,341</h1>
                            <p>Members</p>
                        </div>
                    </div>
                    <div className={classes.eventbook}>
                        <div className={classes.memfoto}>
                            <img src={Click} alt=""/></div>
                        <div className={classes.count}>
                            <h1>828,867</h1>
                            <p>Event Bookings</p>
                        </div>
                    </div>
                </div>
                <div className={classes.det2}>
                    <div className={classes.club}>
                        <div className={classes.clubfoto}>
                            <img src={Heands}/></div>
                        <div className={classes.count}>
                            <h1>46,328</h1>
                            <p>Clubs</p>
                        </div>
                    </div>
                    <div className={classes.pay}>
                        <div className={classes.payfoto}>
                            <img src={Wallet}/>
                        </div>
                        <div className={classes.count}>
                            <h1>
                                1,926,436
                            </h1>
                            <p>Payments</p>
                        </div>
                    </div>
                </div>
            </div>

        </Wrapper>);
};

export default HelpingLocal;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #F5F7FA;
  margin: 20px -60px;
  padding-top: 20px;
  padding-bottom: 20px;
`
let frame6 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #f5f7fa;
`