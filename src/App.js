import React from 'react';

import { BookTable } from './pages/Books/BookTable';
import withLoading from './shared/HOC/withLoading';


import { Helmet } from 'react-helmet';


import NotFound from './pages/NotFound/index.js'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Book from './pages/Book';
import { Main } from './Main';
import NewBook from './pages/NewBook';

import { bookPath, newBookPath } from './helpers/routes';


export const BookTableEnhanced = withLoading(BookTable);

export const App = (props) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Crowdfunding App With Helmet</title>
            </Helmet>

            <Router>
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


