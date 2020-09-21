import React from 'react';

import { BookTable } from './BookTable';
import withLoading from './HOC/withLoading';

import withBooks from './HOC/withBooks';

import { Helmet } from 'react-helmet';


import NotFound from './pages/NotFound/index.js'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Book from './pages/Book';
import { Main } from './Main';
// import NewBook from './pages/NewBook';


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
                    <Route component={Book} path='/book/:Id' strict exact />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}


