import ReactDOM from 'react-dom';
import React from 'react';


import PetrovAvatar from './photo.png';
import IvanovAvatar from './photo.png';
import SidorovAvatar from './photo.png';
import SemenovAvatar from './photo.png';

import Cover from './cat.jpeg';



import { App } from './App';

const AUTHORS = [
    { id: 1, name: 'Petrov', email: 'petrov@yandex.ru', avatar: PetrovAvatar, brief: 'Good' },
    { id: 2, name: 'Ivanov', email: 'ivanov@yandex.ru', avatar: IvanovAvatar, brief: 'Very Good' },
    { id: 3, name: 'Sidorov', email: 'sidorov@yandex.ru', avatar: SidorovAvatar, brief: 'Greatest' },
    { id: 4, name: 'Semenov', email: 'semenov@yandex.ru', avatar: SemenovAvatar, brief: 'Greatest' }
];

const BOOKS = [
    { id: 1, title: 'Ruby in dept', brief: 'comprehensive', page: 132, lang: 'rus', progress: 'todo', cover: Cover, authors: AUTHORS, minCost: 10, neededCost: 20, fundedSum: 1000, neededSum: 2000, subscriber: 10 },
    { id: 2, title: 'Pyton in dept', brief: 'all comprehensive', page: 300, lang: 'en', progress: 'todo', cover: Cover, authors: AUTHORS.slice(1, 2), minCost: 10, neededCost: 20, fundedSum: 1000, neededSum: 2000, subscriber: 20 }
];



ReactDOM.render(
    <App books={BOOKS} />,
    document.getElementById('root')
);

