import React from 'react';
import classes from "./Manage.module.css";

const Manage = () => {
    return (
        <div className={classes.manage}>
            <h2 className={classes.managetext}>
                Manage your entire community<br/>
                in a single system

            </h2>
            <p className="who_is">Who is Nexcent suitable for?</p>
        </div>

    );
};

export default Manage;