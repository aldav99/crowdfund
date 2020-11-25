import React from 'react';

import { App } from './App';

import { render, act, screen, waitFor } from "@testing-library/react"


import userEvent from "@testing-library/user-event"

describe('Routing', () => {
    // beforeEach(() => {
    //     jest.setTimeout(10000);
    // });

    it('It renders Main page correctly', () => {
        const result = render(<App />)

        const headerEl = result.getByText('Crowdfunding')

        expect(headerEl).toBeTruthy()
    })

    it('Navigating to Ruby in debt page and back to homepage work correctly', async () => {
        const { getByText } = render(<App />);
        // expect(getByText(/Loading/i)).toBeTruthy()


        await waitFor(() => {
            expect(getByText(/Ruby/i)).toBeInTheDocument()
        })
    })
});