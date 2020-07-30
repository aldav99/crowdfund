import React from 'react';

class AuthorRow extends React.Component {
    render() {

        return (
            <tr>
                {this.props.children}
            </tr>
        );
    }
}

export default AuthorRow;