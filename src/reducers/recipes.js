import uuidV4  from 'uuid/v4';

export function recipeReducer(state = [], action){
  switch (action.type){
    case 'ADD_RECIPE':
      return Object.assign({}, state, {id: uuidV4()})
    default:
      return state;
  }
}
