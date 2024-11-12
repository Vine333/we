import React from 'react';
import foto1 from '../img/image 18.svg'
import foto2 from '../img/image 19.svg'
import foto3 from '../img/image 20.svg'
import styled from "styled-components"

import Button from '../Button/Button.jsx';

const CardMarketing = () => {
    return (

        <Wrapper>
            < Container>
                <div className="caring">
                    <h1>Caring is the new marketing</h1>
                    <p>The Nextcent blog is the best place to read about the latest membership insights, trends and
                        more.
                        See
                        who's joining the community, read about how our community are increasing their membership income
                        and
                        lot's more.</p>
                </div>
                <div className='marketing'>
                    <div className="card">
                        <img src={foto1} alt="Фото"/>
                        <div className="cardContent">

                            <p>What are your safeguarding responsibilities and how can you manage them?</p>
                            <Button>Readmore 🠒</Button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={foto2} alt="Фото"/>
                        <div className="cardContent">

                            <p>What are your safeguarding responsibilities and how can you manage them?</p>
                            <Button>Readmore 🠒</Button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={foto3} alt="Фото"/>
                        <div className="cardContent">

                            <p>What are your safeguarding responsibilities and how can you manage them?</p>
                            <Button>Readmore 🠒</Button>
                        </div>
                    </div>
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
  gap: 20px;
  justify-content: center;
  align-items: center;
  width: 90%;
  flex-direction: column;
  color: #1a1a1a;
  padding: 5px;
.caring{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  p {
    padding-bottom: 20px;
    margin-bottom: 30px;
    padding-inline: 50px;
  }
}
  .marketing {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
  }
  .card{
    background-color: white;
    border-radius: 8px;
    box-shadow: 0.5rem 10px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;
    text-align: center;
    img {
      width: 100%;
      height: auto;
    }
  }
  .cardContent{
    padding: 16px;

    p {
      margin: 0 0 20px;
    }
  }

  @media (max-width: 1024px) {
.marketing{
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
   
  }
`




export default CardMarketing;