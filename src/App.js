import React from 'react';
import Logo from './logo.jpg';

import { UserInfo } from './UserInfo';

import { BookTable } from './BookTable';
import { withLoading } from './HOC/withLoading';

import { withBooks } from './HOC/withBooks';

import { useBooks } from './hooks/useBooks';

const BookTableEnhanced = withLoading(BookTable);

// const BookTableEnhancedwithBooks = withBooks(BookTableEnhanced);



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
    let [books, authors] = useBooks()
    console.log(authors)
    return (
        <React.Fragment>
            <header style={styles.header}>
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


