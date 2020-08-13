import React from 'react';
import { BookTable } from './BookTable';

import axios from 'axios'

const API_TOKEN = 'keyEbYaaHT6MgQv8t'

const httpClient = axios.create({
    baseURL: 'https://api.airtable.com/v0/appe9eRK1BsGtd1dt',
    timeout: 5000,
    headers: {
        'Authorization': 'Bearer keyEbYaaHT6MgQv8t'
    }
});

export class BookContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: null,
            authors: null
        };
    }

    componentDidMount() {
        this._fetchAuthors();
        this._fetchData();
    }

    render() {
        const { books, authors } = this.state
        return (
            books ?
                <BookTable books={books} authors={authors} />
                : <div>Loading...</div>
        );
    }

    _fetchAuthors() {
        httpClient.get('/Authors', {
            maxRecords: 3,
            view: 'Grid view'
        }).then(result => result.data)
            .then(this._mapFromAirtableAuthors)
            .then(records => {
                this.setState({
                    authors: records
                });
            });
    }

    _fetchData() {
        httpClient.get('/Books', {
            maxRecords: 3,
            view: 'Grid view'
        }).then(result => result.data)
            .then(this._mapFromAirtable)
            .then(records => {
                this.setState({
                    books: records
                });
            });
    }

    _mapFromAirtableAuthors(data) {
        return data.records.map(
            record => (
                {
                    name: record.fields.Name,
                    email: record.fields.Email,
                    brief: record.fields.Brief,
                    id: record.fields.Id,
                    avatar: record.fields.Avatar[0].thumbnails.large.url
                }
            ))
    }

    _mapFromAirtable(data) {
        return data.records.map(
            record => (
                {
                    title: record.fields.Title,
                    brief: record.fields.Brief,
                    page: record.fields.Page,
                    lang: record.fields.Lang,
                    cover: record.fields.Cover[0].thumbnails.large.url,
                    authors: record.fields['Id (from Authors)'],
                    minCost: record.fields.MinCost,
                    neededCost: record.fields.NeededCost,
                    fundedSum: record.fields.FundedSum,
                    neededSum: record.fields.NeededSum,
                    subscriber: record.fields.Subscriber
                }
            )
        )
    }
}
// { id: 5, title: 'Go in dept', brief: 'all comprehensive', page: 300, lang: 'en', progress: 'todo', cover: Cover, authors: AUTHORS.slice(1, 2), minCost: 10, neededCost: 20, fundedSum: 1000, neededSum: 2000, subscriber: 20 }
