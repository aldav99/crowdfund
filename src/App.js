import React from 'react';

import { Helmet } from 'react-helmet';

import NotFound from './pages/NotFound/index.js'

import { Router, Switch, Route } from "react-router-dom";

import { createBrowserHistory } from "history";


import Book from './pages/Book';
import Main from './pages/Main';
import NewBook from './pages/NewBook';

import { bookPath, newBookPath } from './helpers/routes';

const browserHistory = createBrowserHistory()

export const App = (props) => {
    const history = props.history || browserHistory;

    return (
        <React.Fragment>
            <Helmet>
                <title>Crowdfunding App With Helmet</title>
            </Helmet>

            <Router history={history}>
                <Switch>
                    <Route component={Main} path='/' exact />
                    <Route component={NewBook} path={newBookPath()} strict exact />
                    <Route component={Book} path={bookPath()} strict exact />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}


