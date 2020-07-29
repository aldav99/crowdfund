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

export default AuthorRow;