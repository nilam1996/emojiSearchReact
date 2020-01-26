import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './component/header'
import FilterEmoji from './component/emojiShow'
import Github from './component/github'
function App() {
  return (
    <div className="App">
     <Header/>
     <FilterEmoji/>
     <Github/>
    </div>
  );
}

export default App;
