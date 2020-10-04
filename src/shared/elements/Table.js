import React from 'react';
import styles from "./../styles/style.module.css";

export function TableBooks(props) {
    return (
        <table className={styles.tableTableBooks}>
            {props.children}
        </table>)
};

export function TableAuthors(props) {
    return (
        <table className={styles.tableTableAuthors}>
            {props.children}
        </table>)
};

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

export class TheadBooks extends React.Component {
    render() {
        return (
            <thead className={styles.theadTable}>
                <tr className={[styles.theadTr, styles.Tr].join(' ')}>
                    <Th>Title</Th>
                    <Th>Close</Th>
                    <Th>Brief</Th>
                    <Th>Page</Th>
                    <Th>Lang</Th>
                    <Th>Progress</Th>
                    <Th>Cover</Th>
                    <Th>Author</Th>
                    <Th>minCost</Th>
                    <Th>royalty</Th>
                    <Th>neededCost</Th>
                    <Th>fundedSum</Th>
                    <Th>neededSum</Th>
                    <Th>subscriber</Th>
                </tr>
            </thead>);
    }
}

export class TheadAuthors extends React.Component {
    render() {
        return (
            <thead className={styles.theadTable}>
                <tr className={[styles.theadTr, styles.Tr].join(' ')}>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Avatar</Th>
                    <Th>Brief</Th>
                </tr>
            </thead>);
    }
}

