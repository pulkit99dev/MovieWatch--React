import React from 'react';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import { data } from '../data';

class App extends React.Component {
  render(){
  return (
    <div className='App'>
      <NavBar />
      
      <div className='main'>
      <div className='tabs'>
          <div className='tab'>Movies</div>
          <div className='tab'>Favourites</div>
      </div>

      <div className='list'>
        {data.map((movie, index) => (
          <MovieCard movie={movie} key={`movie-${index}`}/>
        ))}
      </div>
    </div>
    </div>
  );
}
}

export default App;
