import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider, connect} from 'react-redux'

import {testReducer} from './redux/reducers'

// Reducers ...
const reducer = combineReducers({
        test: testReducer
})

// Initial state ...
var initialState = {
        test: null
}

// Store ...
let store = createStore(reducer, initialState)
store.subscribe(() => {
        saveState(store.getState());
        console.log(store.getState());
})

// Render ...
ReactDOM.render(
        <h1>Hello, world!</h1>, document.getElementById('app')
)
