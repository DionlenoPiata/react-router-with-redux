import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';

class App extends Component {

  render() {

    // reducer
    const reducer = (state = [], action) => {
      switch (action.type) {
        case 'ADD_ITEM':
          return [...state, action.payload] // retorna o que ja tinha mais o item novo. ou seja, muda o estado da aplicação
        default:
          return state
      }
    }

    // action create
    const addItemToArray = item => {
      return ({
        type: 'ADD_ITEM',
        payload: item
      })
    }


    // store
    var store = createStore(reducer)

    console.log("store: ", store.getState());
    store.dispatch(addItemToArray("ABC"));
    console.log("store: ", store.getState());
    store.dispatch(addItemToArray("ABC"));
    console.log("store: ", store.getState());
    store.dispatch(addItemToArray("CDF"));
    console.log("store: ", store.getState());
    store.dispatch(addItemToArray("GHI"));
    console.log("store: ", store.getState());
    store.dispatch(addItemToArray("ABC"));
    console.log("store: ", store.getState());
    store.dispatch(addItemToArray("JKL"));
    console.log("store: ", store.getState());

    return (
      <div>Finish the execution!</div>
    );
  }
}

export default App;
