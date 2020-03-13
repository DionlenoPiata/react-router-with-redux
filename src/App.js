import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import './App.css';
import { act } from 'react-dom/test-utils';

class App extends Component {
  render() {

    // actions types
    const ADD_ITEM = 'ADD_ITEM';
    const REMOVE_ITEM = 'REMOVE_ITEM';
    const APPLY_DISCOUNT = 'APPLY_DISCOUNT';

    // action creator
    const addItem = (item) => {
      return {
        type: ADD_ITEM,
        payload: item
      }
    }

    const removeitem = (index) => {
      return {
        type: REMOVE_ITEM,
        payload: index
      }
    }

    const applyDiscount = (discount) => {
      return {
        type: APPLY_DISCOUNT,
        payload: discount
      }
    }

    const items = (state = [], action) => {
      switch (action.type) {

        case ADD_ITEM:
          return [...state, action.payload];

        case REMOVE_ITEM:
          return [...state.slice(0, action.payload), ...state.slice(action.payload+1)];

        default:
          return state
      }
    }

    const discount = (state = 0, action) => {
      switch (action.type) {

        case APPLY_DISCOUNT:
          return action.payload
        default:
          return state
      }
    }

    const initialState = {
      items: [],
      discount: 5
    }
    
    // faz assim quando tem o mesmo nome
    const combinedReducerForCart = combineReducers ({
      items,
      discount
    })

    const store = createStore(combinedReducerForCart, initialState);
    const subscribe = store.subscribe(() => {
      console.log('State changed');
      console.log(store.getState());
    });

    store.dispatch(addItem('Samsung A10'));
    store.dispatch(addItem('Samsung A20'));
    store.dispatch(addItem('Samsung A30'));
    store.dispatch(removeitem(0));
    //store.dispatch(removeitem(0));
    //store.dispatch(removeitem(0));
    store.dispatch(applyDiscount(15));
    store.dispatch(removeitem(0));
    store.dispatch(applyDiscount(10));

    return (
      <div></div>
    );
  }
}
export default App;
