import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import movies from './reducers';

const store = createStore(movies);
console.log('store', store);
// console.log('before-STATE', store.getState())

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name : 'Superman'}]
// })

// console.log('after-STATE', store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
