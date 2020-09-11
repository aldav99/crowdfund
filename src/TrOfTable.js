import React from 'react';
import { AuthorTable } from './AuthorTable';
import { SubscribeModal } from './SubscribeModal';
import { Tr, Td, Span } from './Table';
import { percentOfProgress } from './percentOfProgress';
import styles from "./style.module.css";
import { Link } from 'react-router-dom';
import { Royalty } from './BookRows';

export const TrOfTable = ({ book, authors, removeFromTable, columns }) => {
    return (
        <Tr key={book.id}>
            <Td><Span>{columns.title}</Span><Link to={`/book/${book.Id}`}>{book.title}</Link></Td>
            {
                (removeFromTable) ? <Td><Span>{columns.close}</Span><button onClick={() => removeFromTable(book.id)} className={styles.letter}>*</button></Td> : <Td><Span>{columns.close}</Span>Unaccessible</Td>
            }
            <Td><Span>{columns.brief}</Span>{book.brief}</Td>
            <Td><Span>{columns.page}</Span>{book.page}</Td>
            <Td><Span>{columns.lang}</Span>{book.lang}</Td>
            <Td><Span>{columns.progress}</Span>{percentOfProgress(book.fundedSum, book.neededSum)}</Td>
            <Td><Span>{columns.cover}</Span><img src={book.cover} width="40"
                height="40"></img></Td>
            <Td><Span>{columns.authors}</Span>
                {(authors) ? <AuthorTable
                    authors={authors.filter(author => book.authors.includes(author.id))} /> : null}
            </Td>

            <Td><Span>{columns.minCost}</Span>{book.minCost}</Td>
            <Td><Span>{columns.royalty}</Span><Royalty minCost={book.minCost} /></Td>
            <Td><Span>{columns.neededCost}</Span>{book.neededCost}</Td>
            <Td><Span>{columns.fundedSum}</Span>{book.fundedSum}</Td>
            <Td><Span>{columns.neededSum}</Span>{book.neededSum}</Td>


            {(book.subscriber > 10) ? <Td className={styles.letter}><Span>{columns.subscriber}</Span>{book.subscriber}</Td>
                : <Td><Span>{columns.subscriber}</Span>{book.subscriber}</Td>}

            <Td><SubscribeModal /></Td>
        </Tr>);
};
