import React from 'react';
import {ICHeands,ICHouse,ICPeople} from "../../assets/Icons/index.js"
import styled from 'styled-components'

const Card = () => {
    return (<Wrapper>
        <div className="Container">

            <div className="MemberOrg">
                <div className='img'>
                    <ICPeople />
                </div>
                <span className="CardText">
                    <h2>
                        Membership<br/>Organisations
                    </h2>
                    <p>Our membership management software provides full automation of membership
                        renewals and payment</p>
                </span>
            </div>

            <div className='MemberOrg'>
                <div className='img'>
                    <ICHeands/>
                </div>
                <span className="CardText">
                    <h2>
                        National<br/>Associations
                    </h2>
                    <p>Our membership management software provides full automation of membership
                        renewals and payment</p>
                </span>
            </div>
            <div className='MemberOrg'>
                <div className='img'>
                    <ICHouse/>
                </div>
                <span className="CardText">
                    <h2>
                        Clubs And<br/>Groups
                    </h2>
                    <p>Our membership management software provides full automation of membership
                        renewals and payment</p>
                </span>
            </div>
        </div>
    </Wrapper>);
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;

  .Container {
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
  }

  .MemberOrg {
    gap: 3px;
    box-shadow: 0.5rem 10px 40px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    margin: 3px;
    padding: 10px;
  }

  .CardText {
    padding: 5px;
  }

  .img {
    padding-top: 10px;
    height: 40px;
    scale: 2;
    display: flex;
    justify-content: center;
  }
  
  @media (max-width: 1024px) {
    .Container {
      flex-direction: column;
    }
    .MemberOrg{
      padding-inline: 50px;
    }


  }

 


`

export default Card;