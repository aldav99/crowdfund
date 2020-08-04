import React from 'react';

const AuthorRow = React.memo((props) => {
    return (
        <tr>
            {props.children}
        </tr>
    );
})


export const AuthorTable = (props) => {
    let authors = Array.from(props.authors);
    if (authors.length > 3) {
        let result = confirm(`Число авторов ${authors.length}. Вывести всех?`);
        if (!result) {
            authors = authors.slice(0, 3);
        }
    }
    console.log('render AuthorTable')
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
