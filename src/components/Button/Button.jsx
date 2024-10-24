import React from 'react';
import classes from "./Button.module.css";

const Button = ({children,isActive,...props}) => {
    return (
        <button  {...props}
                 className={classes.button} >

            {children}
        </button>
    );
};

export default Button;