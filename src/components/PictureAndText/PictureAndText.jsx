import React from 'react';
import Button from "../Button/Button.jsx";
import styled from 'styled-components';
import Frame35 from "../img/Frame 35.svg";
import HowToDesign from "../img/how to desing.svg";

export const ways = [{
    id: 1,
    title: 'The unseen of spending there',
    hd: 'years at Pixelgrade',
    image: Frame35,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio"
}, {
    id: 2,
    title: 'How to design your site footer like we did',
    image: HowToDesign,
    description: "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
},

]


const PictureAndText = ({item}) => {
    const {title, hd, image, description} = item;
    return (<Wrapper>

        <Container>
            <div >
                <img src={image}/>
            </div >
            <div>
                <h2>{title}<br/>{hd}</h2>
                <p>{description}
                </p>
                <div>
                    <Button>
                        Learn More
                    </Button>

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
  width: 80%;
  flex-direction: row;
  color: #1a1a1a;
  justify-content: space-between;
  padding-inline: 100px;
  gap: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 1300px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      order: 2;
      scale: 2;
      padding-right: 0px;
      padding-bottom: 60px;
      padding-top: 90px;
      width: 100%;
    }
    div{
      order: 2;
      padding-left: 0;
      padding-top: 80px;
      align-items: center;
    }
  }

  img {
    
    width: 300px;
    height: 300px;
  }
  div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    h2 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
      padding-bottom:20px;
    }

  }
`

export default PictureAndText;