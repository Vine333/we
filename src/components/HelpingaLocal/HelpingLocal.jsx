import React from 'react';
import Click from '../img/click.svg'
import People from '../img/people.svg'
import Heands from '../img/heands.svg'
import Wallet from '../img/wallet.svg'
import styled from 'styled-components'


const HelpingLocal = () => {
    return (<Wrapper>
        <Frame6>
            <Frame6text>
                <span>Helping a local </span><br/>
                <Busines>business reinvent itself</Busines><br/>
                <Opis>We reached here with our hard work and dedication</Opis>
            </Frame6text>

            <Det>
                <Names>
                    <LogoFoto>
                        <img src={People} alt=""/>
                    </LogoFoto>
                    <Count>
                        <h1>2,245,341</h1>
                        <p>Members</p>
                    </Count>
                </Names>
                <Names>
                    <LogoFoto>
                        <img src={Click} alt=""/>
                    </LogoFoto>
                    <Count>
                        <h1>828,867</h1>
                        <p>Event Bookings</p>
                    </Count>
                </Names>
            </Det>
            <Det2>
                <Names >
                    <LogoFoto>
                        <img src={Heands}/>
                    </LogoFoto>
                    <Count>
                        <h1>46,328</h1>
                        <p>Clubs</p>
                    </Count>
                </Names>
                <Names>
                    <LogoFoto>
                        <img src={Wallet}/>
                    </LogoFoto>
                    <Count >
                        <h1>
                            1,926,436
                        </h1>
                        <p>Payments</p>
                    </Count>
                </Names>
            </Det2>
        </Frame6>

    </Wrapper>);
};

export default HelpingLocal;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #F5F7FA;
  
  padding-top: 20px;
  padding-bottom: 20px;
`
const Frame6 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 90px;
  @media (max-width: 767px) {
    
      
      flex-direction: column;
    }
`
const Frame6text = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 28px;
  @media(max-width: 767px){
    order: 1
  }

`
const Busines = styled.span`
  color: #28cb8b
`

const Det = styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width: 767px){
    order: 2;
  }
  `
const Det2 = styled.div`
  display: flex;
  flex-direction: column;
  @media(max-width: 767px){
    order: 3;
  }

`
const LogoFoto = styled.div`
  
  scale: 2;
  justify-content: center;
  padding-bottom: 10px;
  padding-top: 35px;
  padding-right: 15px;
  
`
const Opis = styled.span`
  font-size: 16px;
`
const Names = styled.div`
  display: flex;
  flex-direction: row;
  @media(max-width: 767px){
  
    
  }
`



const Count= styled.div`
  text-align: left;
 p{
   padding-bottom: 30px;
   margin-bottom: 20px;
 }
`
