import React from 'react';

import { BookTable } from './BookTable';
import withLoading from './HOC/withLoading';

import withBooks from './HOC/withBooks';

import useBooks from './hooks/useBooks';

import Layout from './shared/Layout.js'
import NotFound from './pages/NotFound/index.js'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const BookTableEnhanced = withLoading(BookTable);

export const App = (props) => {
    return (
        <Router>
            <Switch>
                <Route component={Main} path='/' exact />
                <Route render={() => <div>Inner boook page</div>} path='/book/:id' strict exact />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

const Main = (props) => {
    let [books, authors] = useBooks()
    console.log(authors)
    return (
        <Layout>
            <BookTableEnhanced isLoading={!(books && authors)} books={books} authors={authors} />
        </Layout>
    );
}


