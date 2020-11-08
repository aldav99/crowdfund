import React from 'react';
import styles from "../TableRow.module.css"

export const SubscriberCell = ({ column, row }) => {
    if (row.subscriber > 10)
        return (
            <b className={styles.letter}>{row.subscriber}</b>
        );
    return (
        row.subscriber)
};