import React from 'react';
import { AuthorTable } from './AuthorTable';
import { SubscribeModal } from './SubscribeModal';
import { Tr, Td } from './Table';
import { percentOfProgress } from './percentOfProgress';
import styles from "./style.module.css";
import { Link } from 'react-router-dom';
import { Royalty } from './BookRows';
export function TrOfTable(book, authors, removeFromTable) {
    return (
        <Tr key={book.id}>
            <Td><Link to={`/book/${book.Id}`}>{book.title}</Link></Td>
            <Td><button onClick={() => removeFromTable(book.id)} className={styles.letter}>*</button></Td>
            <Td>{book.brief}</Td>
            <Td>{book.page}</Td>
            <Td>{book.lang}</Td>
            <Td>{percentOfProgress(book.fundedSum, book.neededSum)}</Td>
            <Td><img src={book.cover} width="40"
                height="40"></img></Td>
            <Td>
                {(authors) ? <AuthorTable
                    authors={authors.filter(author => book.authors.includes(author.id))} /> : null}
            </Td>

            <Td>{book.minCost}</Td>
            <Td><Royalty minCost={book.minCost} /></Td>
            <Td>{book.neededCost}</Td>
            <Td>{book.fundedSum}</Td>
            <Td>{book.neededSum}</Td>


            {(book.subscriber > 10) ? <Td className={styles.letter}>{book.subscriber}</Td>
                : <Td>{book.subscriber}</Td>}

            <Td><SubscribeModal /></Td>
        </Tr>);
}
;
