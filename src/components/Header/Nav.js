import React from 'react';
import logo from '../../assets/images/logo-bg.png';
import style from './Nav.Module.css';
const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li>
                    <a href="index.html" className={style.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </a>
                </li>
            </ul>
            <div className={style.account}>
                <span className="material-icons-outlined" title="Account">
                    account_circle
                </span>
                <a href="signup.html">Signup</a>
                {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
            </div>
        </nav>
    );
};

export default Nav;