import ReactDOM from 'react-dom';
import React, { useContext } from 'react';

import authContext from './shared/Providers/authContext';


import PetrovAvatar from './photo.png';
import IvanovAvatar from './photo.png';
import SidorovAvatar from './photo.png';
import SemenovAvatar from './photo.png';
import UserAvatar from './user.png';

import { App } from './App';

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

