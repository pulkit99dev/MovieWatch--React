import React from 'react';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import { data } from '../data';

class App extends React.Component{

  componentDidMount(){

    const{store}= this.props;
    store.subscribe(()=>{
      console.log('Update');
      this.forceUpdate();
    })

    store.dispatch({
         type: 'ADD_MOVIES',
         movies: data
       })
  }

  render(){
    const movies = this.props.store.getState();
  return (
    <div className='App'>
      <NavBar />
      
      <div className='main'>
      <div className='tabs'>
          <div className='tab'>Movies</div>
          <div className='tab'>Favourites</div>
      </div>

      <div className='list'>
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={`movie-${index}`}/>
        ))}
      </div>
    </div>
    </div>
  );
}
}


export default App;
