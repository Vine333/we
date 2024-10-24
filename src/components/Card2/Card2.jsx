import React from 'react';
import foto1 from '../img/image 18.svg'
import foto2 from '../img/image 19.svg'
import foto3 from '../img/image 20.svg'

import classes from '../Card2/Card2.module.css'
const Card2 = () => {
    return (
        <div>
        <div className={classes.caring}>
            <h1>Caring is the new marketing</h1>
            <p>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See
                who's joining the community, read about how our community are increasing their membership income and
                lot's more.</p>
        </div>
    <div >
        <div className={classes.container}>
            <div className={classes.card}>
                <img src={foto1} alt="Фото"/>
                    <div className={classes.cardContent}>

                        <p>What are your safeguarding responsibilities and how can you manage them?</p>
                        <a href="#">Readmore 🠒</a>
                    </div>
            </div>
            <div className={classes.card}>
                <img src={foto2} alt="Фото"/>
                    <div className={classes.cardContent}>

                        <p>What are your safeguarding responsibilities and how can you manage them?</p>
                        <a href="#">Readmore 🠒</a>
                    </div>
            </div>
            <div className={classes.card}>
                <img src={foto3} alt="Фото"/>
                    <div className={classes.cardContent}>

                        <p>What are your safeguarding responsibilities and how can you manage them?</p>
                        <a href="#">Readmore 🠒</a>
                    </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Card2;