import React from 'react';
import { BookTable } from './BookTable';
const BookTableEnhanced = withLoading(BookTable);


import axios from 'axios'
import { withLoading } from './HOC/withLoading';

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
            <BookTableEnhanced isLoading={!(books && authors)} books={books} authors={authors} />
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
                    id: record.fields.Id,
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
