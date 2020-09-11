import React from 'react';


import Logo from './../logo.jpg';

import { UserInfo } from './../UserInfo';

import { Link } from 'react-router-dom';

import styles from "./../style.module.css";

const Layout = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <Link to={'/'}><h2>Crowdfunding</h2></Link>
                <img src={Logo} width="30"
                    height="30" alt="logo" />
                <UserInfo />
            </header>

            <main>
                {props.children}
            </main>
            <footer>&copy; {new Date().getFullYear()}</footer>
        </React.Fragment>
    );
}

export default Layout;