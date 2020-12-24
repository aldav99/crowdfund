import ReactDOM from 'react-dom';
import React, { useContext } from 'react';

import authContext from './shared/Providers/authContext';


import UserAvatar from './user.png';

import { App } from './App';

// import * as serviceWorker from './serviceWorker'


if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    worker.start()
}


const user = {
    email: 'vova@mail.com',
    firstName: 'Vova',
    lastName: 'Ivanov',
    avatarUrl: UserAvatar
};

ReactDOM.render(
    <authContext.Provider value={user}>
        <App />
    </authContext.Provider>,
    document.getElementById('root')
);

// serviceWorker.unregister()

