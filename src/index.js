import ReactDOM from 'react-dom';
import React from 'react';

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
                <td><AuthorRow author={book.author}
                    key={book.author.name} /></td>

                <td>{book.minCost}</td>
                <td>{book.neededCost}</td>
                <td>{book.fundedSum}</td>
                <td>{book.neededSum}</td>
            </tr>
        );
    }
}

class AuthorTable extends React.Component {
    render() {
        const rows = [];

        this.props.authors.forEach((author) => {
            rows.push(
                <AuthorRow
                    author={author}
                    key={author.name} />
            );
        });

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
        const rows = [];

        this.props.books.forEach((book) => {
            rows.push(
                <BookRow
                    book={book}
                    key={book.title} />
            );
        });

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

import Cover from './cat.jpeg';

const AUTHORS = [
    { id: 1, name: 'Petrov', email: 'petrov@yandex.ru', avatar: PetrovAvatar, brief: 'Good' },
    { id: 2, name: 'Ivanov', email: 'ivanov@yandex.ru', avatar: IvanovAvatar, brief: 'Very Good' },
    { id: 3, name: 'Sidorov', email: 'sidorov@yandex.ru', avatar: SidorovAvatar, brief: 'Greatest' }
];

const BOOKS = [
    { title: 'Ruby in dept', brief: 'comprehensive', page: 132, lang: 'rus', progress: 'todo', cover: Cover, author: AUTHORS[0], minCost: 10, neededCost: 20, fundedSum: 1000, neededSum: 2000 },
    { title: 'Pyton in dept', brief: 'all comprehensive', page: 300, lang: 'en', progress: 'todo', cover: Cover, author: AUTHORS[1], minCost: 10, neededCost: 20, fundedSum: 1000, neededSum: 2000 }
];



ReactDOM.render(
    <BookTable books={BOOKS} />,
    document.getElementById('root')
);