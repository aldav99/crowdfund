import React from 'react';
import Logo from './logo.jpg';

import { UserInfo } from './UserInfo';

import { BookTable } from './BookTable';
import withLoading from './HOC/withLoading';

import withBooks from './HOC/withBooks';

import useBooks from './hooks/useBooks';

import styles from "./style.module.css";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const BookTableEnhanced = withLoading(BookTable);

export const App = (props) => {
    return (
        <Main />
    );
}

const Main = (props) => {
    let [books, authors] = useBooks()
    console.log(authors)
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h2>Crowdfunding</h2>
                <img src={Logo} width="30"
                    height="30" alt="logo" />
                <UserInfo />
            </header>

            <main>
                <BookTableEnhanced isLoading={!(books && authors)} books={books} authors={authors} />
            </main>
            <footer>&copy; {new Date().getFullYear()}</footer>
        </React.Fragment>
    );
}


