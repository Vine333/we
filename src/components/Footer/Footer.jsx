import React from 'react';
import Button from "../Button/Button.jsx";
import Nexcent from '../img/Nexcent.svg'
import NSocial from '../img/Social Icons.svg'
import Social2 from '../img/Social2.svg'
import Social3 from '../img/Social3.svg'
import Social4 from '../img/Social4.svg'
import qir from '../img/qir.svg'
import styled from 'styled-components'

const Footer = () => {
    return (<Wrapper>

        <div className="footerBtnText">
            <h2>Pellentesque suscipit fringilla libero eu.</h2>
            <Button className=" register footerBtn">
                Get a Demo 🠒
            </Button>
        </div>
        <WrapperFooter>
            <Container>
                <div className="footerLogo">
                    <img src={Nexcent}/>
                    <p>Copyright © 2020 Landify UI Kit.</p>
                    <p>All rights reserved</p>
                    <div className="socialIcons">
                        <a href="https://www.instagram.com/yourusername" target="_blank">
                            <img src={NSocial} alt="Instagram-Icon"/>
                        </a>
                        <a href="https://www.google.com" target="_blank">
                            <img src={Social2} alt="b-Icon"/>
                        </a>
                        <a href="https://www.twitter.com" target="_blank">
                            <img src={Social3} alt="Twitter-Icon"/>
                        </a>
                        <a href="https://www.youtube.com" target="_blank">
                            <img src={Social4} alt="YouTube-Icon"/>
                        </a>

                    </div>
                </div>
                <div className="aboutUsandHelp">
                    <div className="Company">
                        <h4>Company</h4>
                        <a href="#">About us</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact us</a>
                        <a href="#">Prising</a>
                        <a href="#">Testimonials</a>

                    </div>
                    <div className="support">
                        <h4>Support</h4>
                        <a href="#">Help center</a>
                        <a href="#">Terms of service</a>
                        <a href="#">Legal</a>
                        <a href="#">Privacy policy</a>
                        <a href="#">Status</a>
                    </div>
                    <div className='form'>
                        <h4>
                            Stay up to Date
                        </h4><br/>
                        <form className='fromEmail' action="#" method="post">
                            <input className="input" type="email" name="email" placeholder="Your email address"
                                   />
                            <button className='sendMessage'>
                                <img className="img" src={qir}/>
                            </button>


                        </form>

                    </div>
                </div>
            </Container>
        </WrapperFooter>

    </Wrapper>);
};

const WrapperFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  background-color: #263238;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`
const Container = styled.div`
  background-color: #263238;
  display: flex;
  width: 90%;
  justify-content: space-evenly;
  .footerLogo{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
    color: white;
  }
  .socialIcons{
    scale: 2;
    padding-left: 25px;
    gap: 10px;
    display: flex;
    justify-content: space-around;
    align-items: start;
  }
  .aboutUsandHelp{
    display: flex;
    justify-content: space-evenly;
    gap: 15px;
    width: 70%;
  }
  .Company{
    display: flex;
    flex-direction: column;
    gap: 15px;
    h4{
      color: #FFFFFF;
      font-size: 20px;
    }
    a {
      color: white;
      cursor: pointer;
      text-decoration: none;
    }
    text-align: left;

  }
  .support{
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: left;
    h4{
      color: #FFFFFF;
      font-size: 20px;
    }
  }
  .form{
    color: white;
    display: flex;
    flex-wrap: nowrap;
    text-align: left;
    flex-direction: column;
  }
  .fromEmail{
    border-radius: 50%;
    align-items: center;
    position: relative;
  }
  .input{
    background-color: gray;
    color: #ffffff;
    border: none;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 50px;
    padding-left: 15px;
    border-radius: 10px;
    position: relative;
    &::placeholder {
      color: #ffffff;
      padding: 10px;
    }
  }
  .sendMessage{
    background-color: gray;
    color: #ffffff;
    border: none;
    position: absolute;
    border-radius: 10px;
    cursor: pointer;
    right: 0;
    padding-top: 10px;
    padding-right: 5px;
  }
  .img{
    scale: 2.5;
    position: relative;
    padding-right: 5px;
  }
  @media (max-width: 1024px) {
    .socialIcons{
      padding-left: 0px;
    }
.aboutUsandHelp{
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  
}
    .footerLogo{
      align-items: center;
      padding: 0;
    }
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    
.Company{
  justify-content: center;
  align-items: center;
  
  gap: 0px;
  h4 {
    font-size: 20px;
  }
}
.support{
  gap: 0px;
  justify-content: center;
  align-items: center;
  h4 {
    font-size: 20px;
  }


}
.form{
  
  text-align: center;
  h4 {
    font-size: 20px;
  }

  
}


}
  `
const Wrapper = styled.div`
  
  .footerBtnText{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
    padding-top: 20px;
    gap:20px;
  }
  a {
    color: white;
  }

  a:hover {
    color: gray;
  }
`

export default Footer;