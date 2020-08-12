import React from 'react';
import { BookTable } from './BookTable';

import axios from 'axios'

const API_TOKEN = 'keyEbYaaHT6MgQv8t'

const httpClient = axios.create({
    baseURL: 'https://api.airtable.com/v0/appe9eRK1BsGtd1dt',
    timeout: 2000,
    headers: {
        'Authorization': 'Bearer keyEbYaaHT6MgQv8t'
    }
});
// appe9eRK1BsGtd1dt

// "https://api.airtable.com/v0/appe9eRK1BsGtd1dt/Books?maxRecords=3&view=Grid%20view" \
//   -H "Authorization: Bearer keyEbYaaHT6MgQv8t"

export class BookContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            records: null
        };
    }

    componentDidMount() {
        this._fetchData();
    }

    render() {
        const { records } = this.state
        return (
            records ?
                <BookTable books={records} />
                : <div>Loading...</div>
        );
    }

    _fetchData() {
        httpClient.get('/Books', {
            maxRecords: 3,
            view: 'Grid view'
        }).then(console.log);
    }
}
// { id: 5, title: 'Go in dept', brief: 'all comprehensive', page: 300, lang: 'en', progress: 'todo', cover: Cover, authors: AUTHORS.slice(1, 2), minCost: 10, neededCost: 20, fundedSum: 1000, neededSum: 2000, subscriber: 20 }
