import React from 'react';
import logo1 from '../img/per.svg'
import logo2 from '../img/vtor.svg'
import logo3 from '../img/tre.svg'
import  classes from '../Card/Card.module.css'

const Card = () => {
    return (
        <>
            <div className={classes.frame4}>

                <div className={classes.fr4logo1}>
                    <div className={classes.fr4l1}>
                        <img src={logo1}  />
                    </div>
                    <div className={classes.textfr4logo1}>
                        <h2 className={classes.membership}>
                            Membership<br/>Organisations
                        </h2>
                        <p >Our membership management software provides full automation of membership
                            renewals and payment</p>
                    </div>
                </div>

                <div className={classes.fr4logo2}>
                    <div className={classes.fr4l2}>
                        <img src={logo2} />
                    </div>
                    <div className={classes.textfr4logo2}>
                        <h2 className={classes.national}>
                            National<br/>Associations
                        </h2>
                        <p>Our membership management software provides full automation of membership
                            renewals and payment</p>
                    </div>
                </div>
                <div className={classes.fr4logo3}>
                    <div className={classes.fr4l3}>
                        <img src={logo3} />
                    </div>
                    <div className={classes.textfr4logo3}>
                        <h2 className={classes.clubs}>
                            Clubs And<br/>Groups
                        </h2>
                        <p>Our membership management software provides full automation of membership
                            renewals and payment</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;