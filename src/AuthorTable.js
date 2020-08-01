import React from 'react';

class AuthorRow extends React.Component {
    render() {

        return (
            <tr>
                {this.props.children}
            </tr>
        );
    }
}

export class AuthorTable extends React.Component {
    render() {

        let authors = Array.from(this.props.authors);
        if (authors.length > 3) {
            let result = confirm(`Число авторов ${authors.length}. Вывести всех?`);
            if (!result) {
                authors = authors.slice(0, 3);
            }
        }

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
                <tbody>
                    {authors.map(function (author, key) {
                        return (
                            <AuthorRow key={author.id}>
                                <td>{author.name}</td>
                                <td>{author.email}</td>
                                <td><img src={author.avatar} width="40" height="50"></img></td>
                                <td>{author.brief}</td>
                            </AuthorRow>
                        );
                    })}
                </tbody>
            </table>);
    }
}

