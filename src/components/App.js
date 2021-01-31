import React from 'react';
import NavBar from './NavBar';
import MovieCard from './MovieCard';
import { data } from '../data';
// import movies from '../reducers';
import {addMovies, showFavourites} from '../actions/index';
// import {addFavourites} from '../actions/index';

class App extends React.Component{

  componentDidMount(){

    const{store}= this.props;
    store.subscribe(()=>{
      console.log('Update');
      this.forceUpdate();
    })

    store.dispatch(addMovies(data));
    console.log('STATE', this.props.store.getState());
  }

  isMovieFavourite =(movie)=>{
    const {favourites} = this.props.store.getState();
    const index = favourites.indexOf(movie);

    if(index !== -1){
      // found the movie
      return true;
    }
    // not found
    return false;
  }

  onChangeTab = (val) =>{
    this.props.store.dispatch(showFavourites(val))
  }

  

  render(){
    const { list, showFavourites, favourites } = this.props.store.getState();
    console.log('RENDER', this.props.store.getState());
    
    const displayMovies = showFavourites ? favourites : list;

  return (
    <div className='App'>
      <NavBar />
      
      <div className='main'>
      <div className='tabs'>
          <div className={`tab $(showFavourites ? '': 'active-tabs')`} onClick={()=>this.onChangeTab(false)} >Movies</div>
          <div className={`tab $(showFavourites ? 'active-tabs' : '')`} onClick={()=>this.onChangeTab(true)} >Favourites</div>
      </div>

      <div className='list'>
        {displayMovies.map((movie, index) => (
          <MovieCard 
            movie={movie} 
            key={`movie-${index}`} 
            dispatch={this.props.store.dispatch} 
            isFavourite ={ this.isMovieFavourite(movie)}
            />
        ))}
      </div>
      {displayMovies.length === 0 ? <div  className='no-movies'> No movies to show! </div> : null}
    </div>
    </div>
  );
}
}


export default App;
