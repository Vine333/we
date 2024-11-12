import React from 'react';
import TeslaF from '../img/tesla.svg'
import logo1 from '../img/4.svg'
import logo2 from '../img/6.svg'
import logo3 from '../img/3.svg'
import logo4 from '../img/5.svg'
import logo5 from '../img/1.svg'
import logo6 from '../img/2.svg'
import {styled} from 'styled-components'

const Tesla = () => {
    return (

        <Wrapper>
            <Conteiner>
                <div className="tesla">
                    <img src={TeslaF}/>
                </div>
                <div className="text">
                    <div >
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum
                        risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam
                        in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
                        molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis
                        tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
                        potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate
                        odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus
                        ac sit amet magna.
                    </div>
                    <div>
                        <span className="TimSmith">Tim Smith</span>
                        <p>British Dragon Boat Racing Association</p>

                    </div>
                    <div className='logoTeslaCont'>
                        <img src={logo1}/>
                        <img src={logo2}/>
                        <img src={logo3}/>
                        <img src={logo4}/>
                        <img src={logo5}/>
                        <img src={logo6}/>
                        <a href="#">Meet all customers 🠒</a>
                    </div>

                </div>
            </Conteiner>
        </Wrapper>

    );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #F5F7FA;
  align-items: center;
  width: 100%;
  padding: 5px;
  //border: 1px solid black;
 
 
`
const Conteiner = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  color: #1a1a1a;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  
  padding: 20px;
  .tesla{
    
    
    width: 30%;
    
    img{
     scale: 2;
    }
  }
  .text{
    display: flex;

    flex-direction: column;
    padding: 20px;
    text-align: left;
    gap: 20px;
    width: 70%;
  }
  .TimSmith{
    color: #28cb8b;
    padding-bottom: 20px;
  }
  .logoTeslaCont{
    display: flex;
    justify-content: space-between;
    a{
      padding-top: 5px;
      color: #28cb8b;
    }
  }
  @media (max-width:1024px ) {
    
      justify-content: center;
      flex-wrap: wrap;
      padding-top: 50px;
      flex-direction: column;
      
    .text{
      order: 2;
      padding-top: 60px;
      width: 100%;
    } 
    .tesla{
      order: 1;
      padding-top: 20px;
    }
  }
  
`


export default Tesla;