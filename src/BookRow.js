import React from 'react';
import { AuthorTable } from './AuthorTable';
import { SubscribeModal } from './SubscribeModal';

const styles = {
    letter: {
        color: 'red'
    }
}

export class BookRow extends React.Component {
    render() {
        const book = this.props.book;

        return (
            <React.Fragment>
                <tr>
                    <td>{book.title}</td>
                    <td>{book.brief}</td>
                    <td>{book.page}</td>
                    <td>{book.lang}</td>
                    <td>{percentOfProgress(book.fundedSum, book.neededSum)}</td>
                    <td><img src={book.cover} width="40"
                        height="40"></img></td>
                    <td><AuthorTable authors={book.authors} /></td>

                    <td>{book.minCost}</td>
                    <td>{book.neededCost}</td>
                    <td>{book.fundedSum}</td>
                    <td>{book.neededSum}</td>

                    {(book.subscriber > 10) ? <td style={styles.letter}>{book.subscriber}</td>
                        : <td>{book.subscriber}</td>}
                </tr>
                <SubscribeModal />
            </React.Fragment>
        );
    }
}

function percentOfProgress(fundedSumStr, neededSumStr) {
    let neededInt = parseInt(neededSumStr);
    let fundedInd = parseInt(fundedSumStr);
    if (neededInt == 0) {
        return 0;
    }
    if (fundedInd >= neededInt) {
        return 100;
    }

    let per = 100 * fundedInd / neededInt;
    return per.toFixed(0);
}