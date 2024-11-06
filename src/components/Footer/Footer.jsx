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

        <FooterText>
            <h2>Pellentesque suscipit fringilla libero eu.</h2>
            <Button className=" register footerBtn">
                Get a Demo 🠒
            </Button>
        </FooterText>
        <WrapperFooter>
            <FooterUs>
                <FooterLogo>
                    <img src={Nexcent}/>
                    <p>Copyright © 2020 Landify UI Kit.</p>
                    <p>All rights reserved</p>
                    <SocialIcons>
                        <a href="https://www.instagram.com/yourusername" target="_blank">
                            <img src={NSocial} alt="Instagram-Icon"/>
                        </a>
                        <a href="https://www.google.com" target="_blank">
                            <img src={Social2} alt="b-Icon"/>
                        </a>
                        <a href="https://www.twitter.com" target="_blank">
                            <img src={Social3} alt="Twitter-Icon"/>
                        </a>
                        <a href="https://www.youtube.com/yourusername" target="_blank">
                            <img src={Social4} alt="YouTube-Icon"/>
                        </a>

                    </SocialIcons>
                </FooterLogo>
                <FooterAboutUs>
                    <Company>
                        <h4>Company</h4>
                        <a href="#">About us</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact us</a>
                        <a href="#">Prising</a>
                        <a href="#">Testimonials</a>

                    </Company>
                    <Support>
                        <h4>Support</h4>
                        <a href="#">Help center</a>
                        <a href="#">Terms of service</a>
                        <a href="#">Legal</a>
                        <a href="#">Privacy policy</a>
                        <a href="#">Status</a>
                    </Support>
                    <Stayup>
                        <h4>
                            Stay up to Date
                        </h4><br/>
                        <Email action="#" method="post">
                            <Ecri type="email" name="email" placeholder="Your email address"
                                   />
                            <Input>
                                <Air src={qir}/>
                            </Input>


                        </Email>

                    </Stayup>
                </FooterAboutUs>
            </FooterUs>
        </WrapperFooter>

    </Wrapper>);
};
const FooterText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 16px;
  padding-top: 20px;
  gap:20px;
`
const WrapperFooter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 20px 0;
  background-color: #263238;
  flex-wrap: wrap;
`
const FooterUs = styled.div`
  background-color: #263238;
  margin-top: 16px;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 767px) {

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
`
const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  
  gap: 15px;
  color: white;
  @media (max-width: 767px) {


    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`
const SocialIcons = styled.div`
  scale: 2;
  padding-left: 25px;
  gap: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: start;
`
const FooterAboutUs = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 15px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

  }
`
const Company = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 150px;
  gap: 15px;
 h4{
   color: #FFFFFF;
   font-size: 20px;
 }
  a {
    color: white;
    cursor: pointer;
  }
  text-align: left;

  @media (max-width: 767px) {


    padding: 0;
    margin: 0;
    h4 {
      font-size: 20px;
    }
  }
`
const Support = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  gap: 15px;
  text-align: left;
  h4{
    color: #FFFFFF;
    font-size: 20px;
  }
  @media (max-width: 767px) {
    h4 {
      font-size: 20px;
    }

    padding: 0;
    margin: 0;
  }
`
const Stayup = styled.div`
  color: white;
  display: flex;
  flex-wrap: nowrap;
text-align: left;
  flex-direction: column;
  @media (max-width: 767px) {
    h4 {
      font-size: 20px;
    }

    padding: 0;
    margin: 0;
  }
  @media (max-width: 1024px) {

    margin-right: 30px;
  }
`
const Email = styled.form`
  border-radius: 50%;
  align-items: center;
  position: relative;
`
const Ecri = styled.input`
  background-color: gray;
  color: #ffffff;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 50px;
  border-radius: 10px;
  position: relative;

  &::placeholder {
    color: #ffffff;
  }

`
const Input = styled.button`
  background-color: gray;
  color: #ffffff;
  border: none;
  position: absolute;
  border-radius: 10px;
  cursor: pointer;
  right: 0;
  padding-top: 10px;
  padding-right: 5px;

  
`
const Air = styled.img`
  scale: 2.5;
  position: relative;
  padding-right: 5px;
`
const Wrapper = styled.div`
  a {
    color: white;
  }

  a:hover {
    color: gray;
  }
`

export default Footer;