import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header'
import Search from './component/search_input'
import EmojiShow from './component/emojiShow'
function App() {
  return (
    <div className="App">
     <Header/>
     <Search/>
     <EmojiShow/>
    </div>
  );
}

export default App;
