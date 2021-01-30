import React from 'react';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import { data } from '../data';

class App extends React.Component {
  render(){
  return (
    <div className='App'>
      <NavBar />
      
      <div>
        <MovieCard />
      </div>
    </div>
  );
}
}

export default App;
