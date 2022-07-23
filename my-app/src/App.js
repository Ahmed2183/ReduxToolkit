import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <UserProfile/>
    </div>
  );
}

export default App;
