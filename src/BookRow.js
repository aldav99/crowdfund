import React from 'react';


export const BookRow = (props) => {
    return (
        <React.Fragment>
            <tr>
                {props.children}
            </tr>
        </React.Fragment>
    );
}
