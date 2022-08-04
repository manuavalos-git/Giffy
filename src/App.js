import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import Header from './components/Header';
import{Route} from "wouter";

function App() {
  return (
    <div className="App">
      <section className='App-content'>
        <h1>Gifs</h1>
        <Header/>
        <Route 
        component={ListOfGifs}
        path="/gif/:keyword"
        />
      </section>
    </div>
  );
}

export default App;
