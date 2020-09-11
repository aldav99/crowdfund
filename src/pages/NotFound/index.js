import React from 'react';

import Layout from '../../shared/Layout.js'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Layout>
            Oops, Nothing was Found
            {' '}
            <Link to={'/'}>go home!</Link>
        </Layout>
    )
}

export default NotFound;