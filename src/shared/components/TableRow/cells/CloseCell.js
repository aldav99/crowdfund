import React from 'react';
import styles from "../TableRow.module.css"

export const CloseCell = ({ column, row }) => {
    let removeFromTable = column.removeFromTable
    if (removeFromTable)
        return (
            <button onClick={() => removeFromTable(row.id)} className={styles.letter}>*</button>
        );
    return (
        <React.Fragment>
            Unaccessible
        </React.Fragment>
    );
};