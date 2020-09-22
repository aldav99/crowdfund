import React, { useState, useEffect } from 'react';

import axios from 'axios'

const API_TOKEN = 'keyEbYaaHT6MgQv8t'

const httpClient = axios.create({
    baseURL: 'https://api.airtable.com/v0/appe9eRK1BsGtd1dt',
    timeout: 15000,
    headers: {
        'Authorization': 'Bearer keyEbYaaHT6MgQv8t'
    }
});

function _fetchAuthors() {
    return (
        httpClient.get('/Authors', {
            params: {
                maxRecords: 10,
                view: 'Grid view'
            }
        }).then(result => result.data)
            .then(_mapFromAirtableAuthors)
    )
}

function _fetchData() {
    return (
        httpClient.get('/Books', {
            params: {
                maxRecords: 10,
                view: 'Grid view'
            }
        }).then(result => result.data)
            .then(_mapFromAirtable)
    )
}

function _mapFromAirtableAuthors(data) {
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

function _mapFromAirtable(data) {
    return data.records.map(
        record => (
            {
                Id: record.id,
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


const useBooks = () => {
    const [books, setBooks] = useState(null);
    const [authors, setAuthors] = useState(null);

    useEffect(() => {
        _fetchAuthors().then(records => { setAuthors(records) }).catch(function (e) { console.log(e) });
        _fetchData().then(records => { setBooks(records) }).catch(function (e) { console.log(e) });;
    }, []);

    return [books, authors];
};

export default useBooks;

