import React, { Fragment } from 'react';

import { useMediaQuery } from 'react-responsive'

import styles from "./style.module.css";

import { TableAuthors, TheadAuthors, Tr, Td, Tbody, Span } from './Table';

const AuthorRow = React.memo((props) => {
    console.log('render AuthorRow')

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 541px)'
    })

    let author = props.author

    let withHeader = {
        name: 'Name: ',
        email: 'Email: ',
        avatar: 'Avatar: ',
        brief: 'Brief: '
    }

    let withOutHeader = {
        name: '',
        email: '',
        avatar: '',
        brief: ''
    }

    return (
        <Tr>
            {isDesktopOrLaptop ? <AuthorStr author={author} column={withOutHeader} /> : <AuthorStr author={author} column={withHeader} />}
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


const AuthorStr = (props) => {
    let author = props.author
    let column = props.column
    return (
        <React.Fragment>
            <Td><Span>{column.name}</Span>{author.name}</Td>
            <Td><Span>{column.email}</Span>{author.email}</Td>
            <Td><Span>{column.avatar}</Span><img src={author.avatar} width="40" height="50"></img></Td>
            <Td><Span>{column.brief}</Span>{author.brief}</Td>
        </React.Fragment>
    );
}
