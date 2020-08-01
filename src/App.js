import React from 'react';
import Logo from './logo.jpg';
import { BookTable } from './BookTable';

import { UserInfo } from './UserInfo';

const styles = {
    header: {
        paddingTop: '60px',
        textAlign: 'center',
        backgroundColor: '#1abc9c',
        color: 'white',
        fontSize: '30px'
    }
}

export const App = (props) => {
    return (
        <React.Fragment>
            <header style={styles.header}>
                <h2>Crowdfunding</h2>
                <img src={Logo} width="30"
                    height="30" alt="logo" />
                <UserInfo />
            </header>

            <main>
                <BookTable books={props.books} />
            </main>
            <footer>&copy; {new Date().getFullYear()}</footer>
        </React.Fragment>
    );
}


