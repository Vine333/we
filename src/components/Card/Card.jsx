import React from 'react';
import logo1 from '../img/per.svg'
import logo2 from '../img/vtor.svg'
import logo3 from '../img/tre.svg'
import styled from 'styled-components'

const Card = () => {
    return (<>
        <Frame4>

            <Fr4Logo>
                <Fr4l1>
                    <img src={logo1}/>
                </Fr4l1>
                <TextFr4logo>
                    <h2 >
                        Membership<br/>Organisations
                    </h2>
                    <p>Our membership management software provides full automation of membership
                        renewals and payment</p>
                </TextFr4logo>
            </Fr4Logo>

            <Fr4Logo>
                <div >
                    <img src={logo2}/>
                </div>
                <TextFr4logo>
                    <h2>
                        National<br/>Associations
                    </h2>
                    <p>Our membership management software provides full automation of membership
                        renewals and payment</p>
                </TextFr4logo>
            </Fr4Logo>
            <Fr4Logo>
                <div>
                    <img src={logo3}/>
                </div>
                <TextFr4logo>
                    <h2 >
                        Clubs And<br/>Groups
                    </h2>
                    <p>Our membership management software provides full automation of membership
                        renewals and payment</p>
                </TextFr4logo>
            </Fr4Logo>
        </Frame4>
    </>);
};
const Fr4Logo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
  box-shadow: 0.5rem 10px 40px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  margin: 3px;
  padding: 30px;
  @media(max-width: 900px){
    padding-inline: 50px;
  }
`
const TextFr4logo = styled.div`
  padding: 5px;
`
const Frame4 = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 20px;
  gap: 50px;
  @media (max-width: 900px) {
    flex-direction: column;
    
  }
`
const Fr4l1 = styled.div`
 
  height: 40px;
  scale: 1.5;
  display: flex;
  justify-content: center;
`
export default Card;