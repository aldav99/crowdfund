import React from 'react';


export class BookRow extends React.Component {
    render() {

        return (
            <React.Fragment>
                <tr>
                    {this.props.children}
                </tr>
            </React.Fragment>
        );
    }
}

