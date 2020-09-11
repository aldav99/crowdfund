import React from 'react';


import { TableBooks, TheadBooks, Tbody } from './Table';

import { useMediaQuery } from 'react-responsive'



import { TrOfTable } from './TrOfTable';

export const BookRows = React.memo(({ books, removeFromTable, authors }) => {
    console.log('render BookRow')

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 541px)'
    })

    let withHeader = {
        title: 'Title: ',
        close: 'Close: ',
        brief: 'Brief: ',
        page: 'Page: ',
        lang: 'Lang: ',
        progress: 'Progress: ',
        cover: 'Cover: ',
        authors: 'Authors: ',
        minCost: 'minCost: ',
        royalty: 'royalty: ',
        neededCost: 'neededCost: ',
        fundedSum: 'fundedSum: ',
        neededSum: 'neededSum: ',
        subscriber: 'subscriber: '
    }

    let withOutHeader = {
        title: '',
        close: '',
        brief: '',
        page: '',
        lang: '',
        progress: '',
        cover: '',
        author: '',
        minCost: '',
        royalty: '',
        neededCost: '',
        fundedSum: '',
        neededSum: '',
        subscriber: ''
    }

    return (
        <TableBooks>
            <TheadBooks />
            <Tbody>
                {
                    books.slice(0, 3).map(book => {
                        return (
                            <React.Fragment key={book.id}>
                                {isDesktopOrLaptop ? <TrOfTable removeFromTable={removeFromTable} book={book} authors={authors} columns={withOutHeader} key={book.id} /> : <TrOfTable removeFromTable={removeFromTable} book={book} authors={authors} columns={withHeader} key={book.id} />}
                            </React.Fragment>
                        )
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


