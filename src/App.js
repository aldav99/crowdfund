import React from 'react';
import Logo from './logo.jpg';
import { BookTable } from './BookTable';

const styles = {
    header: {
        paddingTop: '60px',
        textAlign: 'center',
        backgroundColor: '#1abc9c',
        color: 'white',
        fontSize: '30px'
    }
}

export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header style={styles.header}>
                    <h2>Crowdfunding</h2>
                    <img src={Logo} width="30"
                        height="30" alt="logo" />
                </header>
                <main>
                    <BookTable books={this.props.books} />
                </main>
                <footer>&copy; {new Date().getFullYear()}</footer>
            </React.Fragment>
        );
    }
}
