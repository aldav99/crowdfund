import React from 'react';

import styles from "./style.module.css";

import { TableAuthors, TheadAuthors, Tr, Td, Tbody } from './Table';

const AuthorRow = React.memo((props) => {
    console.log('render AuthorRow')
    let author = props.author
    return (
        <Tr>
            <Td>{author.name}</Td>
            <Td>{author.email}</Td>
            <Td><img src={author.avatar} width="40" height="50"></img></Td>
            <Td>{author.brief}</Td>
        </Tr>
    );
})

export class AuthorTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { onlyThree: true };
    }

    toggleViev() {
        this.setState({ onlyThree: !this.state.onlyThree })
    }

    render() {
        console.log('render AuthorTable')
        let authors;
        (this.props.authors.length > 3 && this.state.onlyThree) ? authors = this.props.authors.slice(0, 3) : authors = this.props.authors;

        return (
            <TableAuthors>
                <TheadAuthors className={styles.theadTable} />
                <Tbody>
                    {
                        (this.props.authors.length > 3) ? <Tr><td><button onClick={() =>
                            this.toggleViev()}>More...</button></td></Tr> : null
                    }

                    {authors.map(function (author, key) {
                        return (
                            <AuthorRow key={author.id} author={author} />
                        );
                    })}
                </Tbody>
            </TableAuthors >);
    }
}
