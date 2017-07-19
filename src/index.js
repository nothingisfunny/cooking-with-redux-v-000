import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { RecipesInput } from './components/recipes/RecipesInput'
import { New } from './components/new'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { Router, Route, browserHistory } from 'react-router'
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/recipes/new" component={New} />
    </Router>
  </Provider>,
  document.getElementById('root'));
