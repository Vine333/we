import React from 'react';
import styled from 'styled-components'
import Card from "../Card/Card.jsx";

const Manage = () => {
    return (<Wrapper>
        <div className='Container'>
            <div className='Manage'>
                <h2 className='Headline'>
                    Manage your entire community<br/>
                    in a single system

                </h2>
                <p>Who is Nexcent suitable for?</p>
            </div>
            <Card/>
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
  .Manage{
    padding-top: 20px;
  }
  .Headline{
    font-size: 30px;
    margin-bottom: -15px;
    padding: 20px;
  }
`
export default Manage;