import React from 'react';
import './menu.css';
import Button from "../Button/Button.jsx"; // Импортируем стили

const Menu = ({ isOpen }) => {
    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>

                <a href='#'>Home</a>
                <a href='#'>Features</a>
                <a href='#'>Community</a>
                <a href='#'>Blog</a>
                <a href='#'>Pricing</a>
                <Button>Register Now🠒</Button>

        </div>
    );
};
export default Menu;
