import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';

class App extends Component {
  render() {

    // action types
    // usually go to a different file
    // ADD_ITEM
    const ADD_ITEM = 'ADD_ITEM';
    const REMOVE_ITEM = 'REMOVE_ITEM';

    // action
    //let action = {
    //  type: ADD_ITEM,
    //  payload: 'Apple'
    //  }

    // action creators
    // usually go to a different file
    // item-actions.js
    const addItem = (item) => {
      return {
        type: ADD_ITEM,
        payload: item
      }
    }

    const removeItem = (item) => {
      return {
        type: REMOVE_ITEM,
        payload: item
      }
    }

    // Reducers
    // ser uma função pura
    const cartItem = (state = [], action) => {

      switch (action.type) {
        case ADD_ITEM:
          return [...state, action.payload]

        case REMOVE_ITEM:
          return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
        default:
          return state
      }
    }

    return (
      <div></div>
    );
  }
}

export default App;
