import React from 'react';
import logo from './logo.svg';
import './App.css';

type Item = {
  id: number
  title: string
}

const items: Item[] = [
  {
    id: 1,
    title: "キズぐすり"
  },
  {
    id: 2,
    title: "いいキズぐすり"
  }
]

const App: React.FC = () => {
  return (
    <div className="App">
      <ul>
        { items.map((item: Item) => (
          <li key={item.id}>{ item.title }</li>
        )) }
      </ul>
    </div>
  )
}

export default App;
