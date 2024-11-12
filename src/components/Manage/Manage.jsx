import React from 'react';
import styled from 'styled-components'
import Card from "../Card/Card.jsx";

const Manage = () => {
    return (<Wrapper>
        <Conteiner>
            <div>
                <h2>
                    Manage your entire community<br/>
                    in a single system

                </h2>
                <p>Who is Nexcent suitable for?</p>
            </div>
            <Card/>
        </Conteiner>
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
const Conteiner = styled.div`
div{
 padding-top: 20px;
}
h2{
  font-size: 30px;
  margin-bottom: -15px;
  padding: 20px;
}
`





export default Manage;