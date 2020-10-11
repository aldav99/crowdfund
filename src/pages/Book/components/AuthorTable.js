import React, { Fragment } from 'react';

import { useMediaQuery } from 'react-responsive'

import styles from "./../../../shared/styles/style.module.css"

import { TableAuthors, TheadAuthors, Tr, Td, Tbody, Span } from "./../../../shared/elements/Table";

export const AvatarCell = ({ column, row }) => {
    return (
        <React.Fragment>
            <Span>{column.Header}</Span>{row[column.accessor] && <img src={row[column.accessor]} width="40" height="50"></img>}
        </React.Fragment>
    );
};

export const columns = [
    { Header: '', accessor: 'name' },
    { Header: '', accessor: 'email' },
    { Header: '', accessor: 'avatar', cell: AvatarCell },
    { Header: '', accessor: 'brief' }
];

export const mobileColumns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Avatar', accessor: 'avatar', cell: AvatarCell },
    { Header: 'Brief', accessor: 'brief' }
];

// const AuthorRow = React.memo((props) => {
//     console.log('render AuthorRow')

//     const isDesktopOrLaptop = useMediaQuery({
//         query: '(min-device-width: 541px)'
//     })

//     let author = props.author



//     return (
//         <Tr>
//             {isDesktopOrLaptop ? <AuthorStr row={author} columns={columns} /> : <AuthorStr row={author} columns={mobileColumns} />}
//         </Tr>
//     );
// })

// return (
//     <React.Fragment>
//         <GenerateTable TableName={Table} rows={books} mobileColumns={mobileColumns} columns={columns} limitOfString={3} />
//         <FeedbackForm />
//     </React.Fragment>
// );

export class AuthorTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { onlyThree: true };
        this.toggleViev = this.toggleViev.bind(this);
    }

    toggleViev() {
        this.setState({ onlyThree: !this.state.onlyThree })
    }

    render() {
        console.log('render AuthorTable')
        let authors;
        let numberOfAuthors = this.props.authors.length;

        (this.props.authors && numberOfAuthors > 3 && this.state.onlyThree) ? authors = this.props.authors.slice(0, 3) : authors = this.props.authors;

        return (
            (authors) ? <Table rows={authors} columns={columns} numberOfAuthors={numberOfAuthors} toggleViev={this.toggleViev} /> : null);
    }
}

export const Table = React.memo(({ rows, columns, numberOfAuthors, toggleViev }) => {

    return (
        <TableAuthors>
            <TheadAuthors className={styles.theadTable} />
            <Tbody>
                {
                    (numberOfAuthors > 3) ? <Tr><td><button onClick={() =>
                        toggleViev()}>More...</button></td></Tr> : null
                }

                {rows.map(row => {
                    return (
                        <Tr key={row.id} >
                            <AuthorStr row={row} columns={columns} />
                        </Tr>
                    );
                })}
            </Tbody>
        </TableAuthors >)
})


export const AuthorStr = ({ row, columns }) => {
    if (!row)
        return null;

    return columns.map(column => {
        const CellComponent = column.cell;
        return (
            <Td key={column.accessor}>
                {CellComponent ? <CellComponent row={row} column={column}
                /> : row[column.accessor]}
            </Td>
        );
    });
};

