import React from 'react';
import Button from "../Button/Button.jsx";
import classes from './PictureAndText.module.css'


const PictureAndText = (props) => {
    return (
        <div className={classes.frame5}>
            <div className={classes.fr5foto}>
                <img src={props.image}/>
            </div>
            <div className= {classes.fr5text}>
                <h2 >{props.title}<br/>{props.hd}</h2>
                <p>{props.description}2
                     </p>
                <div className={classes.btnreglm}>
                    <Button>
                        Learn More
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default PictureAndText;