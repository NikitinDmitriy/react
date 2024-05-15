import React from 'react';
import pizza from './jpg/meet.jpg';
import PizzaCard from './components/PizzaCard';
import './App.css'

function App() {
  return (
    <div className="App">
      <PizzaCard title="Мясная" text='Пицца с грибами и мясом' img={pizza} price='от 549 руб.'/>
    </div>
  );
}

export default App;