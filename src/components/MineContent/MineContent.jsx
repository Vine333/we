import React from 'react';
import {styled} from "styled-components"
import {Illustration} from "../../assets/SVG/index.js"
import Button from "../Button/Button.jsx";


const MineContent = () => {
    return (

        <Wrapper>
            <div className="Container">
                <div className="Lesson">
                    <h1 className='LessonH1'>Lessons and insights<br/>
                        <p className='LessonP'>from 8 years</p>
                    </h1>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <Button> Register </Button>
                </div>

                <div className='Img'>

                    <Illustration/>
                </div>
            </div>
        </Wrapper>

    );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #F5F7FA;
  padding: 20px;
  box-sizing: border-box;
  .Container{
    display: flex;
    align-items: center;
    width: 80%;
    padding: 40px;
    text-align: center;
    justify-content: space-between;
  }
  .Lesson{
    gap: 20px;

    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
  }
  .LessonP{
    padding-bottom: 10px;
    color: #4CAF4F;;
  }
  .Img{
    scale: 0.9;
  }
  @media (max-width: 900px) {
   .Container{
     flex-direction: column;
     justify-content: center;
     order: 1;
     padding-right: 0;
     padding-bottom: 30px;
   }
    .Lesson{
      gap: 20px;
      flex-direction: column;
      justify-content: flex-start;
      text-align: left;
    }
    .LessonP{
      font-size: 38px;
      
    }
    .LessonH1{
      font-size: 38px;
      color: #263238;
      padding-bottom: 10px; 
    }
    .Img{
      order: 2;
    }
    
  }
`
export default MineContent;
