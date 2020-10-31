import React from 'react';
import styles from "./../styles/style.module.css";

export function Table(props) {
    return (
        <table>
            <Thead>
                <Tr>
                    {
                        props.columns.map((column, idx) => (
                            <Th key={idx}>{column.Header}</Th>
                        ))
                    }
                </Tr>
            </Thead>
            <Tbody>
                {
                    props.rows.map((row, idx) => (
                        <Tr key={idx}>
                            {
                                props.columns.map((column, idx) => (
                                    <Td key={idx}>
                                        {
                                            column.cell
                                                ? <column.cell row={row} column={column} />
                                                : row[column.accessor]
                                        }
                                    </Td>
                                ))
                            }
                        </Tr>
                    ))
                }
            </Tbody>
        </table>
    );
};

function Thead(props) {
    return (
        <thead>
            {props.children}
        </thead>
    );
}

export function Tbody(props) {
    return (
        <tbody className={styles.Tbody}>
            {props.children}
        </tbody>)
};

export function Td(props) {
    return (
        <td className={styles.Td}>
            {props.children}
        </td>)
};

export function Span(props) {
    return (
        <span className={styles.Span}>
            {props.children}
        </span>)
};

export function Th(props) {
    return (
        <th className={styles.Th}>
            {props.children}
        </th>)
};

export function Tr(props) {
    return (
        <tr className={styles.Tr}>
            {props.children}
        </tr>)
};

