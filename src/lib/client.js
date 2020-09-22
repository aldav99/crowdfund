// import React, { useState, useEffect } from 'react';

import axios from 'axios'

const API_TOKEN = 'keyEbYaaHT6MgQv8t'

const httpClient = axios.create({
    baseURL: 'https://api.airtable.com/v0/appe9eRK1BsGtd1dt',
    timeout: 10000,
    headers: {
        'Authorization': `Bearer ${API_TOKEN}`
    }
});

export function createBook(fields) {
    return (
        httpClient.post('/Books', {
            records: [
                {
                    fields
                }
            ]
        })
        .then(result => result.data)
    );
}
