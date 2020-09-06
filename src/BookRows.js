import React from 'react';


import { TableBooks, TheadBooks, Tbody } from './Table';



import { TrOfTable } from './TrOfTable';

export const BookRows = React.memo(({ books, removeFromTable, authors }) => {
    console.log('render BookRow')

    return (
        <TableBooks>
            <TheadBooks />
            <Tbody>
                {
                    books.slice(0, 3).map(book => {
                        return (
                            TrOfTable(book, authors, removeFromTable)
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


