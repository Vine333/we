import React, { useState } from 'react';
import classes from './BurgerMenu.module.css';
import Menu from './Menu';

const BurgerButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={`classes.burgerButton ${isOpen ? 'classes.open' : ''}`} onClick={toggleMenu}>
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>
                <div className={classes.bar}></div>

            </div>
            <Menu isOpen={isOpen} />
        </div>
    );
};

export default BurgerButton;