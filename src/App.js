import React from 'react';
import Header from './Components/Header'
import Complated from './Components/CompletedRead';
import ReadIt from './Components/ReadIt';
import WantToRead from './Components/WantToRead';
import './App.css';
import AddButton from './Components/BookStore/AddButton';

function App() {
  return (
    <div className="App">
      <Header />
    <Complated />
    <WantToRead />
    <ReadIt />
    <AddButton />
    </div>
  );
}

export default App;
