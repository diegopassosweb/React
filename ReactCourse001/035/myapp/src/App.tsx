import React from 'react';
import { AlbumList } from './components/AlbumList';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { Default } from './template/default';



function App() {
  return (
    <Default>
      <Header />
      <SearchBar />
      <AlbumList />
    </Default>
  );
}

export default App;
