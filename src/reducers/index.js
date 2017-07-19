import { combineReducers } from 'redux';
import { recipeReducer } from './recipes'
import { ingredientReducer } from './ingredients'

const rootReducer = combineReducers({
  recipes: recipeReducer,
  ingredients: ingredientReducer
})

export default rootReducer