import React from 'react';
import useBooks from './shared/hooks/useBooks';
import Layout from './shared/Layout/Layout.js';
import { BookTableEnhanced } from './App';
export const Main = (props) => {
    let [books, authors] = useBooks();
    console.log("Render Main");
    console.log(authors);
    console.log(books);
    return (
        <Layout>
            <BookTableEnhanced isLoading={!(books && authors)} books={books} authors={authors} />
        </Layout>
    );
};
