import React from 'react';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import { data } from '../data';
// import movies from '../reducers';
import {addMovies} from '../actions/index';
import {addFavourites} from '../actions/index';

class App extends React.Component{

  componentDidMount(){

    const{store}= this.props;
    store.subscribe(()=>{
      console.log('Update');
      this.forceUpdate();
    })

    store.dispatch(addMovies(data));
  }

  render(){
    const { list } = this.props.store.getState();
  return (
    <div className='App'>
      <NavBar />
      
      <div className='main'>
      <div className='tabs'>
          <div className='tab'>Movies</div>
          <div className='tab'>Favourites</div>
      </div>

      <div className='list'>
        {list.map((movie, index) => (
          <MovieCard movie={movie} key={`movie-${index}`} dispatch={this.props.store.dispatch} />
        ))}
      </div>
    </div>
    </div>
  );
}
}


export default App;
