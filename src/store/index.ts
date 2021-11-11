import { createStore } from 'redux';

import rootReducers from './reducers/index';

import { RootState } from '../types/types';

function saveToLocalStorage(state: RootState) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('persistantState', serialisedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const store = createStore(rootReducers, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
