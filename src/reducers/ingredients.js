import uuidV4  from 'uuid/v4';

export function ingredientReducer(state = [], action){
  switch (action.type){
    case 'СREATE_INGREDIENT':
      return Object.assign({}, state, {id: uuidV4(), name: action.name, calories: action.calories})
    default:
      return state;
  }
}
