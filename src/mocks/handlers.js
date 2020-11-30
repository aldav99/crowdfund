import { rest } from 'msw'

export const handlers = [
    rest.get('https://api.airtable.com/v0/appe9eRK1BsGtd1dt/Books', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(
                {
                    records: [
                        {
                            id: "recGJ0fHsdidP0Ebs",
                            fields: {
                                Id: 1,
                                Title: "Ruby in dept",
                                Brief: "comprehensive",
                                Page: 132,
                                Lang: "rus",
                                Cover: [
                                    {
                                        id: "attXJOQNfgHa3AUGm",
                                        thumbnails: {
                                            large: {
                                                url: ''
                                            }
                                        }
                                    }
                                ],
                                Authors: [],
                                MinCost: 10,
                                NeededCost: 20,
                                FundedSum: 1000,
                                NeededSum: 2000,
                                Subscriber: 10
                            }
                        },
                        {
                            id: "recGJ0fHsdidP0Ebt",
                            fields: {
                                Id: 1,
                                Title: "Erlang in dept",
                                Brief: "comprehensive",
                                Page: 132,
                                Lang: "rus",
                                Cover: [
                                    {
                                        id: "attXJOQNfgHa3AUGn",
                                        thumbnails: {
                                            large: {
                                                url: ''
                                            }
                                        }
                                    }
                                ],
                                Authors: [],
                                MinCost: 11,
                                NeededCost: 22,
                                FundedSum: 2000,
                                NeededSum: 4000,
                                Subscriber: 20
                            }
                        }
                    ]
                }

            ),
        )
    }),
    rest.get('https://api.airtable.com/v0/appe9eRK1BsGtd1dt/Authors', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                records: [
                    {
                        id: "recbLOsVog2rrDzSP",
                        fields: {
                            Name: 'Petrov',
                            Email: 'petrov@yandex.ru',
                            Brief: 'Good',
                            Id: 1,
                            Avatar: [{
                                id: "attJ2bhFpLgo5LoVd",
                                thumbnails: {
                                    large: {
                                        url: ''
                                    }
                                }
                            }]
                        }
                    }
                ]
            }),
        )
    })
]