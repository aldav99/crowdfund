import React from 'react';

import { AuthorTable } from './AuthorTable';
import { SubscribeModal } from './SubscribeModal';

import { TableBooks, TheadBooks, Tr, Td, Tbody } from './Table';

import { percentOfProgress } from './percentOfProgress';

import styles from "./style.module.css";

export const BookRows = React.memo(({ books, removeFromTable, authors }) => {
    console.log('render BookRow')
    return (
        <TableBooks>
            <TheadBooks />
            <Tbody>
                {
                    books.slice(0, 3).map(book => {
                        return (<Tr key={book.id}>
                            <Td>{book.title}</Td>
                            <Td><button onClick={() =>
                                removeFromTable(book.id)} className={styles.letter}>*</button></Td>
                            <Td>{book.brief}</Td>
                            <Td>{book.page}</Td>
                            <Td>{book.lang}</Td>
                            <Td>{percentOfProgress(book.fundedSum, book.neededSum)}</Td>
                            <Td><img src={book.cover} width="40"
                                height="40"></img></Td>
                            <Td><AuthorTable
                                authors={authors.filter(author => book.authors.includes(author.id))} />
                            </Td>

                            <Td>{book.minCost}</Td>
                            <Td><Royalty minCost={book.minCost} /></Td>
                            <Td>{book.neededCost}</Td>
                            <Td>{book.fundedSum}</Td>
                            <Td>{book.neededSum}</Td>


                            {
                                (book.subscriber > 10) ? <Td className={styles.letter}>{book.subscriber}</Td>
                                    : <Td>{book.subscriber}</Td>
                            }

                            <Td><SubscribeModal /></Td>
                        </Tr>)
                    })
                }
            </Tbody>
        </TableBooks>)
})


export class Royalty extends React.PureComponent {
    constructor(props) {
        super(props);
        this.searchInputRef = React.createRef();
        this.state = { royalty: '' };

        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }


    handleChange(event) {
        this.setState({ royalty: event.target.value });
    }

    keyPress(event) {
        if (event.keyCode == 13) {
            let authorsInterest = Math.floor(parseInt(event.target.value) * 0.9)

            let minCost = parseInt(this.props.minCost)

            if (authorsInterest < minCost) {
                alert(`Less minCost: ${minCost}`)
                return this.setState({ royalty: '' });
            }
            this.setState({ royalty: authorsInterest });
        }
    }

    componentDidMount() {
        this.searchInputRef.current.focus();
    }

    render() {
        return (
            <input ref={this.searchInputRef} value={this.state.royalty} onKeyDown={this.keyPress} onChange={this.handleChange} />
        )
    }
}

