import React from 'react';
import Button from "../Button/Button.jsx";
import classes from './Footer.module.css'
import Nexcent from '../img/Nexcent.svg'
import NSocial from '../img/Social Icons.svg'
import Social2 from '../img/Social2.svg'
import Social3 from '../img/Social3.svg'
import Social4 from '../img/Social4.svg'
import qir from '../img/qir.svg'

const Footer = () => {
    return (
        <footer>

            <div className={classes.footerText}>
                <h2>Pellentesque suscipit fringilla libero eu.</h2>
                <Button className=" register footerBtn">
                    Get a Demo 🠒
                </Button>
            </div>
            <div className={classes.WrapperFooter}>
                <div className={classes.footerUs}>
                    <div className={classes.footerLogo}>
                        <img src={Nexcent}/>
                            <p>Copyright © 2020 Landify UI Kit.</p>
                            <p>All rights reserved</p>
                            <div className={classes.socialIcons}>
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

                            </div>
                    </div>
                    <div className={classes.footerAboutUs}>
                        <div className={classes.company}>
                            <h4>Company</h4>
                            <a href="#">About us</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact us</a>
                            <a href="#">Prising</a>
                            <a href="#">Testimonials</a>

                        </div>
                        <div className={classes.support}>
                            <h4>Support</h4>
                            <a href="#">Help center</a>
                            <a href="#">Terms of service</a>
                            <a href="#">Legal</a>
                            <a href="#">Privacy policy</a>
                            <a href="#">Status</a>
                        </div>
                        <div className={classes.stayup}>
                            <h4>
                                Stay up to Date
                            </h4><br/>
                            <form className={classes.email} action="#" method="post">
                                <input type="email" name="email" placeholder="Your email address" className={classes.ecri}/>
                                    <button className={classes.input}  >
                                        <img src={qir} className={classes.air}/>
                                    </button>


                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;