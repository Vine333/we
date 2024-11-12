import React from 'react';
import logo1 from '../img/per.svg'
import logo2 from '../img/vtor.svg'
import logo3 from '../img/tre.svg'
import styled from 'styled-components'

const Card = () => {
    return (<Wrapper>
        <Container>

            <div>
                <Img>
                    <img src={logo1}/>
                </Img>
                <span>
                    <h2 >
                        Membership<br/>Organisations
                    </h2>
                    <p>Our membership management software provides full automation of membership
                        renewals and payment</p>
                </span>
            </div>

            <div>
                <Img >
                    <img src={logo2}/>
                </Img>
                <span>
                    <h2>
                        National<br/>Associations
                    </h2>
                    <p>Our membership management software provides full automation of membership
                        renewals and payment</p>
                </span>
            </div>
            <div>
                <Img>
                    <img src={logo3}/>
                </Img>
                <span>
                    <h2 >
                        Clubs And<br/>Groups
                    </h2>
                    <p>Our membership management software provides full automation of membership
                        renewals and payment</p>
                </span>
            </div>
        </Container>
    </Wrapper>);
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
`
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
  gap: 50px;
  width: 80%;
  flex-direction: row;
  color: #1a1a1a;
  max-width: 80%;
  padding-inline: 100px;
  padding-bottom: 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
    
  }
  div{
    display: flex;
    justify-content: center;
    flex-direction: column;
   
    gap: 3px;
    box-shadow: 0.5rem 10px 40px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    margin: 3px;
    padding: 10px;
    @media(max-width: 900px){
      padding-inline: 50px;
    }
    span{
      padding: 5px;
      
    }
  }
`
const Img = styled.div`
  height: 40px;
  scale: 0.25;
  display: flex;
  justify-content: center;
  
`
export default Card;