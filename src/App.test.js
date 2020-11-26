import React from 'react';

import { App } from './App';

import { render, act, waitFor } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';


import userEvent from "@testing-library/user-event"

import { createMemoryHistory } from 'history';

describe('Routing', () => {
    beforeEach(() => {
        jest.setTimeout(60000);
    });

    it('It renders Main page correctly', () => {
        const result = render(<App />)

        const headerEl = result.getByText('Crowdfunding')

        expect(headerEl).toBeTruthy()
    })

    it('Navigating to Ruby in debt page and back to homepage work correctly', async () => {
        const history = createMemoryHistory()

        const { getByText } = render(<App history={history} />);

        await waitFor(() => {
            expect(getByText(/Ruby/i)).toBeInTheDocument()
        }, { timeout: 50000 })


        userEvent.click(getByText(/Ruby/i));

        await waitFor(() => {
            expect(getByText(/home/i)).toBeInTheDocument()
        }, { timeout: 50000 })

        const { location: { pathname } } = history;
        expect(pathname).toBe('/book/recGJ0fHsdidP0Ebs')

        userEvent.click(getByText(/home/i));

        await waitFor(() => {
            expect(getByText(/Erlang/i)).toBeInTheDocument()
        }, { timeout: 50000 })

        userEvent.click(getByText(/Ruby/i));

        await waitFor(() => {
            expect(getByText(/crowdfunding/i)).toBeInTheDocument()
        }, { timeout: 50000 })

        userEvent.click(getByText(/crowdfunding/i));

        await waitFor(() => {
            expect(getByText(/Erlang/i)).toBeInTheDocument()
        }, { timeout: 50000 })
    })

    it('It renders NewBook page correctly', () => {
        const history = createMemoryHistory()
        history.push('/book/new')

        const { getByText } = render(<App history={history} />);

        expect(getByText(/Add Book/i)).toBeInTheDocument()
    })

    it('landing on a bad page', () => {
        const history = createMemoryHistory()
        history.push('/bad/page')

        const { getByText } = render(<App history={history} />);

        expect(getByText(/Oops, Nothing was Found/i)).toBeInTheDocument()
    })
});