import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';

class App extends Component {
  render() {

    // action types
    // usually go to a different file
    // ADD_ITEM
    const ADD_ITEM = 'ADD_ITEM'

    // action
    let action = {
      type: ADD_ITEM,
      payload: 'Apple'
    }

    // action creators
    // usually go to a different file
    // item-actions.js
    const addItem = (item) => {
      return {
        type: ADD_ITEM,
        payload: item
      }
    }

    return (
      <div></div>
    );
  }
}

export default App;
