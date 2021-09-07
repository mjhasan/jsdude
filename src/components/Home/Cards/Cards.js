import React from 'react';
import style from './Cards.Module.css';

const Cards = () => {
    return (
        <>
            <a href="quiz.html">
                <div className={style.video}>
                    <img src="./images/3.jpg" alt />
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

export default Cards;