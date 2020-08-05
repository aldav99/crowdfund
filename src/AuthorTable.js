import React from 'react';

const AuthorRow = React.memo((props) => {
    return (
        <tr>
            {props.children}
        </tr>
    );
})


export const AuthorTable = (props) => {
    let original = [...props.authors];
    let authors = [...props.authors];
    let more = false;
    function flipFlop(changeView) {
        changeView = !changeView
    }

    if (more == false) {
        authors = authors.slice(0, 3);
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
                {
                    (props.authors.length > 3) ? <tr><button onClick={() =>
                        flipFlop(more)}>More...</button></tr> : ''
                }

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
