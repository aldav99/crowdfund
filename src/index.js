import ReactDOM from 'react-dom';
import React from 'react';

const styles = {
    header: {
        paddingTop: '60px',
        textAlign: 'center',
        backgroundColor: '#1abc9c',
        color: 'white',
        fontSize: '30px'
    },

    letter: {
        color: 'red'
    }
}

class AuthorRow extends React.Component {
    render() {
        const author = this.props.author;

        return (
            <table>
                <tbody>
                    <tr>
                        <td>{author.name}</td>
                        <td>{author.email}</td>
                        <td><img src={author.avatar} width="40"
                            height="50"></img></td>
                        <td>{author.brief}</td>
                    </tr>
                </tbody>
            </table >
        );
    }
}

function percentOfProgress(fundedSumStr, neededSumStr) {
    let neededInt = parseInt(neededSumStr);
    let fundedInd = parseInt(fundedSumStr);
    if (neededInt == 0) {
        return 0;
    }
    if (fundedInd >= neededInt) {
        return 100;
    }

    let per = 100 * fundedInd / neededInt;
    return per.toFixed(0);
}

class BookRow extends React.Component {
    render() {
        const book = this.props.book;

        return (
            <tr>
                <td>{book.title}</td>
                <td>{book.brief}</td>
                <td>{book.page}</td>
                <td>{book.lang}</td>
                <td>{percentOfProgress(book.fundedSum, book.neededSum)}</td>
                <td><img src={book.cover} width="40"
                    height="40"></img></td>
                <td><AuthorTable authors={book.authors} /></td>

                <td>{book.minCost}</td>
                <td>{book.neededCost}</td>
                <td>{book.fundedSum}</td>
                <td>{book.neededSum}</td>

                {(book.subscriber > 10) ? <td style={styles.letter}>{book.subscriber}</td>
                    : <td>{book.subscriber}</td>}
            </tr>
        );
    }
}

class AuthorTable extends React.Component {
    render() {

        let authors = Array.from(this.props.authors);
        if (authors.length > 3) {
            let result = confirm(`Число авторов ${authors.length}. Вывести всех?`)
            if (!result) {
                authors = authors.slice(0, 3);
            }
        }
        const rows = authors.map((author) =>
            <AuthorRow author={author} key={author.id} />);

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                        <th>Brief</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>);
    }
}

class BookTable extends React.Component {
    render() {

        const books = this.props.books;
        const rows = books.map((book) =>
            <BookRow book={book} key={book.title} />);

        return (
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Brief</th>
                        <th>Page</th>
                        <th>Lang</th>
                        <th>Progress</th>
                        <th>Cover</th>
                        <th>Author</th>
                        <th>minCost</th>
                        <th>neededCost</th>
                        <th>fundedSum</th>
                        <th>neededSum</th>
                        <th>subscriber</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}


import PetrovAvatar from './photo.png';
import IvanovAvatar from './photo.png';
import SidorovAvatar from './photo.png';
import SemenovAvatar from './photo.png';

import Cover from './cat.jpeg';

import Logo from './logo.jpg';

const AUTHORS = [
    { id: 1, name: 'Petrov', email: 'petrov@yandex.ru', avatar: PetrovAvatar, brief: 'Good' },
    { id: 2, name: 'Ivanov', email: 'ivanov@yandex.ru', avatar: IvanovAvatar, brief: 'Very Good' },
    { id: 3, name: 'Sidorov', email: 'sidorov@yandex.ru', avatar: SidorovAvatar, brief: 'Greatest' },
    { id: 4, name: 'Semenov', email: 'semenov@yandex.ru', avatar: SemenovAvatar, brief: 'Greatest' }
];

const BOOKS = [
    { title: 'Ruby in dept', brief: 'comprehensive', page: 132, lang: 'rus', progress: 'todo', cover: Cover, authors: AUTHORS, minCost: 10, neededCost: 20, fundedSum: 1000, neededSum: 2000, subscriber: 10 },
    { title: 'Pyton in dept', brief: 'all comprehensive', page: 300, lang: 'en', progress: 'todo', cover: Cover, authors: AUTHORS.slice(1, 2), minCost: 10, neededCost: 20, fundedSum: 1000, neededSum: 2000, subscriber: 20 }
];



class App extends React.Component {
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

ReactDOM.render(
    <App books={BOOKS} />,
    document.getElementById('root')
);

