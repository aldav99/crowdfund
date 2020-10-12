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

export const ToggleViewCell = ({ toggleView }) => {
    return (
        <React.Fragment>
            {(toggleView) ? <td><button onClick={() =>
                toggleView()}>More...</button></td> : null}
        </React.Fragment>
    );
};

// export const columns = [
//     { Header: '', accessor: 'name' },
//     { Header: '', accessor: 'email' },
//     { Header: '', accessor: 'avatar', cell: AvatarCell },
//     { Header: '', accessor: 'brief' }
// ];

// export const mobileColumns = [
//     { Header: 'Name', accessor: 'name' },
//     { Header: 'Email', accessor: 'email' },
//     { Header: 'Avatar', accessor: 'avatar', cell: AvatarCell },
//     { Header: 'Brief', accessor: 'brief' }
// ];

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
        this.toggleView = this.toggleView.bind(this);

        this.columns = [
            { Header: '', accessor: 'more', cell: ToggleViewCell},
            { Header: '', accessor: 'name' },
            { Header: '', accessor: 'email' },
            { Header: '', accessor: 'avatar', cell: AvatarCell },
            { Header: '', accessor: 'brief' }
        ];

        this.mobileColumns = [
            { Header: '', accessor: 'more', cell: ToggleViewCell},
            { Header: 'Name', accessor: 'name' },
            { Header: 'Email', accessor: 'email' },
            { Header: 'Avatar', accessor: 'avatar', cell: AvatarCell },
            { Header: 'Brief', accessor: 'brief' }
        ];

    }

    toggleView() {
        this.setState({ onlyThree: !this.state.onlyThree })
    }

    render() {
        console.log('render AuthorTable')
        let authors;
        let numberOfAuthors = this.props.authors.length;

        if (this.props.authors && numberOfAuthors > 3 && this.state.onlyThree) {
            authors = this.props.authors.slice(0, 3)

            this.columns[0].toggleView = this.toggleView
            this.mobileColumns[0].toggleView = this.toggleView
        } else {
            authors = this.props.authors
        }

        return (
            (authors) ? <Table rows={authors} columns={this.columns} /> : null);
    }
}

export const Table = React.memo(({ rows, columns }) => {
    const buttonColumn = columns[0]
    console.log('buttonColumn', buttonColumn)
    const ButtonComponent = buttonColumn.cell
    console.log('buttonColumn.toggleView', buttonColumn.toggleView)
    columns = columns.slice(1)
    return (
        <TableAuthors>
            <TheadAuthors className={styles.theadTable} />
            <Tbody>
                <Tr><ButtonComponent toggleView={buttonColumn.toggleView} /></Tr>

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

function deleteElement(arr, elem, strProp) {
    if (arr[0][strProp] == elem)
        return arr.slice(1)
}

