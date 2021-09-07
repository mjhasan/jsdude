import React from 'react';
import Nav from '../Header/Nav';
import style from './Layout.Module.css';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <main className={style.main}>
                <div className={style.container}>{children}</div>
            </main>
        </>
    );
};

export default Layout;