import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'LeBron James',
      age: 35,
      img: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png',
      note: 'Allegeric to staying on the same team',
    },
    {
      name: 'Kobe Bryant',
      age: 42,
      img: 'https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg',
    },
  ]);

  const peopleHandler = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className='List'>
          <div className='List-header'>
            <img className='List-img' src={person.img} alt='' />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className='List-note'>{person.note}</p>
        </li>
      );
    });
  };

  return (
    <div className='App'>
      <h1>People coming to my part!</h1>
      {peopleHandler()}
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
