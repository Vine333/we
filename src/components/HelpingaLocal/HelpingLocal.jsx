import React from 'react';
import Click from '../img/click.svg'
import People from '../img/people.svg'
import Heands from '../img/heands.svg'
import Wallet from '../img/wallet.svg'
import styled from 'styled-components'


const Achievements = () => {
    return (<Wrapper>
        <Container>
            <div className="text">
                <span>Helping a local </span><br/>
                <span className="business">business reinvent itself</span><br/>
                <span className="weReached">We reached here with our hard work and dedication</span>
            </div>
            <div className="details">
                <div className="det">
                    <div className="names">
                        <div className="logoFoto">
                            <img src={People} alt=""/>
                        </div>
                        <div className="count">
                            <h1>2,245,341</h1>
                            <p>Members</p>
                        </div>
                    </div>
                    <div className="names">
                        <div className="logoFoto">
                            <img src={Click} alt=""/>
                        </div>
                        <div className="count">
                            <h1>828,867</h1>
                            <p>Event Bookings</p>
                        </div>
                    </div>
                </div>
                <div className="det2">
                    <div className="names">
                        <div className="logoFoto">
                            <img src={Heands}/>
                        </div>
                        <div className="count">
                            <h1>46,328</h1>
                            <p>Clubs</p>
                        </div>
                    </div>
                    <div className="names">
                        <div className="logoFoto">
                            <img src={Wallet}/>
                        </div>
                        <div className="count">
                            <h1>
                                1,926,436
                            </h1>
                            <p>Payments</p>
                        </div>
                    </div>
                </div>

            </div>
        </Container>

    </Wrapper>);
};

export default Achievements;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #F5F7FA;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding-top: 20px;
  padding-bottom: 20px;
`
const Container = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  color: #1a1a1a;
  padding: 5px;
  justify-content: space-evenly;
  align-items: center;
  gap: 90px;

  .weReached {
    font-size: 16px;
  }

  .text {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 28px;
  }

  .business {
    color: #28cb8b
  }

  .logoFoto {
    scale: 2;
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 30px;
    padding-right: 15px;
  }
.details{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
}
  .det {
    display: flex;
    flex-direction: column;
  }

  .det2 {
    display: flex;
    flex-direction: column;
  }

  .names {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }

  .count {
    text-align: left;

    p {
      padding-bottom: 30px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 1024px) {
   
    .details{
      order: 2;
      flex-direction: row;
      justify-content: space-between;
      width: 70%;
    }

    

    .text {
      order: 1
    }

    flex-direction: column;
  }
  @media(max-width: 700px){
    .details{
      flex-direction: column;
      order: 2;
      justify-content: center;
      align-items: center;
    }
    .det1{
  
      flex-direction: column;
    }
    .det2{
     
      flex-direction: column;
    }
`

