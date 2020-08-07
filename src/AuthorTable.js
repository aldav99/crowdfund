import React from 'react';

const AuthorRow = React.memo((props) => {
    return (
        <tr>
            {props.children}
        </tr>
    );
})




export class AuthorTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { onlyThree: true };
    }

    toggleViev() {
        this.setState({ onlyThree: !this.state.onlyThree })
    }

    render() {
        console.log('render BookRow')
        let authors;
        (this.props.authors.length > 3 && this.state.onlyThree) ? authors = this.props.authors.slice(0, 3) : authors = this.props.authors;

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
                        (this.props.authors.length > 3) ? <tr><td><button onClick={() =>
                            this.toggleViev()}>More...</button></td></tr> : <tr></tr>
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
            </table >);
    }
}
