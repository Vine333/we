import React from 'react';
import foto1 from '../img/image 18.svg'
import foto2 from '../img/image 19.svg'
import foto3 from '../img/image 20.svg'
import styled from "styled-components"

import Button from '../Button/Button.jsx';

const Card2 = () => {
    return (

        <Wrapper>
            <Caring>
                <h1>Caring is the new marketing</h1>
                <p>The Nextcent blog is the best place to read about the latest membership insights, trends and more.
                    See
                    who's joining the community, read about how our community are increasing their membership income and
                    lot's more.</p>
            </Caring>
            <div>
                < Container >
                    <Card>
                        <img src={foto1} alt="Фото"/>
                        <CardContent>

                            <p>What are your safeguarding responsibilities and how can you manage them?</p>
                            <Button>Readmore 🠒</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <img src={foto2} alt="Фото"/>
                        <CardContent>

                            <p>What are your safeguarding responsibilities and how can you manage them?</p>
                            <Button>Readmore 🠒</Button>
                        </CardContent>
                    </Card>
                    <Card >
                        <img src={foto3} alt="Фото"/>
                        <CardContent>

                            <p>What are your safeguarding responsibilities and how can you manage them?</p>
                            <Button>Readmore 🠒</Button>
                        </CardContent>
                    </Card>
                </Container >
            </div>
        </Wrapper>);
};

const Wrapper =styled.div`
padding-top: 20px;
padding-bottom: 20px;
`
const Caring =styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  p{
    padding-bottom: 20px;
    margin-bottom: 30px;
    padding-inline: 50px;
  }
`
const Container =styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  @media(max-width: 767px){

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const Card =styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0.5rem 10px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  text-align: center;
  img{
    width: 100%;
    height: auto;
  }
`
const CardContent =styled.div`
  padding: 16px;
  p{
    margin: 0 0 20px;
  }
`


export default Card2;