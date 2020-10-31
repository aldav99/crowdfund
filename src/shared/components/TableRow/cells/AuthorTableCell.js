import React from 'react';

import { GenerateTable } from './../../../elements/GenerateTable';

export const AvatarCell = ({ column, row }) => {
    return (
        row[column.accessor] && <img src={row[column.accessor]} width="40" height="50"></img>
    );
};

class AuthorTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { onlyThree: true };
        this.toggleView = this.toggleView.bind(this);

        this.mobileColumns = [
            { Header: '', accessor: 'name' },
            { Header: '', accessor: 'email' },
            { Header: '', accessor: 'avatar', cell: AvatarCell },
            { Header: '', accessor: 'brief' }
        ];

        this.columns = [
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
        const { onlyThree } = this.state;

        const authors = this.props.authors.slice(0, onlyThree ? 3 : this.props.authors.length);

        return (
            authors
                ? (
                    <div>
                        <GenerateTable rows={authors} mobileColumns={this.mobileColumns} columns={this.columns} />
                        {this.props.authors.length > 3 && <button onClick={this.toggleView}>{onlyThree ? 'Show all' : 'Hide'}</button>}
                    </div>
                )
                : null
        );
    }
}

export const AuthorsCell = ({ column, row }) => {
  const authors = row.authorsList;
  return authors ? <AuthorTable authors={authors} /> : null;
};