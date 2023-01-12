import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  dynaman: {
    title: string;
    name: string;
    numeral: number;
    dream: string;
    weapon: string;
    attack: string;
    image1983: string;
    image2011?: string;
  }[];
}

function App() {
  const [dynaman, setDynaman] = useState<IState['dynaman']>([
    {
      name: 'Hokuto Dan',
      title: 'DynaRed',
      numeral: 1,
      dream: 'To create an engine that does not cause pollution',
      weapon: 'Dyna Swords',
      attack: 'Yume no Tsubasa wo',
      image1983:
        'https://static.wikia.nocookie.net/powerrangers/images/2/2e/DynaRed.PNG',
    },
  ]);

  return (
    <div className="App">
      <h1>Kagaku Sentai Dynaman</h1>
      <List dynaman={dynaman} />
      <AddToList dynaman={dynaman} setDynaman={setDynaman} />
    </div>
  );
}

export default App;
