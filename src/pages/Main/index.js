import React from 'react';

import useBooks from '../../shared/hooks/useBooks';
import Layout from '../../shared/Layout/Layout.js';

import BookTable from '../../shared/components/BookTable';

const Main = () => {
    const [books, authors] = useBooks();
    console.log("Render Main");
    console.log(authors);
    console.log(books);
    return (
        <Layout>
            <BookTable isLoading={!(books && authors)} books={books} authors={authors} />
        </Layout>
    );
};

export default Main;