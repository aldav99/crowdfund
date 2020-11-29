import { rest } from 'msw'

export const handlers = [
    rest.get('https://api.airtable.com/v0/appe9eRK1BsGtd1dt/Books', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    data: {
                        records: [
                            {
                                id: "recGJ0fHsdidP0Ebs",
                                fields: {
                                    Id: 1,
                                    Title: "Ruby in dept",
                                    Brief: "comprehensive",
                                    Page: 132,
                                    Lang: "rus",
                                    Cover: [],
                                    Authors: [],
                                    MinCost: 10,
                                    NeededCost: 20,
                                    FundedSum: 1000,
                                    NeededSum: 2000,
                                    Subscriber: 10
                                }
                            }
                        ]
                    }
                }
            ]),
        )
    }),
    rest.get('https://api.airtable.com/v0/appe9eRK1BsGtd1dt/Authors', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([]),
        )
    })
]