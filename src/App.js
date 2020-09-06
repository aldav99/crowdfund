import React from 'react';

import { BookTable } from './BookTable';
import withLoading from './HOC/withLoading';

import withBooks from './HOC/withBooks';

import useBooks from './hooks/useBooks';

import Layout from './shared/Layout.js'
import NotFound from './pages/NotFound/index.js'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Book from './pages/Book';

const BookTableEnhanced = withLoading(BookTable);

export const App = (props) => {
    return (
        <Router>
            <Switch>
                <Route component={Main} path='/' exact />
                <Route component={Book} path='/book/:Id' strict exact />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

const Main = (props) => {
    let [books, authors] = useBooks()
    console.log(authors)
    console.log(books)
    return (
        <Layout>
            <BookTableEnhanced isLoading={!(books && authors)} books={books} authors={authors} />
        </Layout>
    );
}


