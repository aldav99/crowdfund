import React from 'react';
import AuthorRow from './AuthorRow';


export class AuthorTable extends React.Component {
    render() {

        let authors = Array.from(this.props.authors);
        if (authors.length > 3) {
            let result = confirm(`Число авторов ${authors.length}. Вывести всех?`);
            if (!result) {
                authors = authors.slice(0, 3);
            }
        }
        const rows = authors.map((author) => <AuthorRow author={author} key={author.id} />);

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
                <tbody>{rows}</tbody>
            </table>);
    }
}
