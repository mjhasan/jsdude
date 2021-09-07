import React from 'react';
import thumbnails from '../../../assets/images/3.jpg';
import style from './Card.Module.css';
const Card = () => {
    return (
        <>
            <a href="quiz.html">
                <div className={style.video}>
                    <img src={thumbnails} alt={''} />
                    <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                    <div className={style.qmeta}>
                        <p>10 Questions</p>
                        <p>Score : Not taken yet</p>
                    </div>
                </div>
            </a>
        </>
    );
};

export default Card;