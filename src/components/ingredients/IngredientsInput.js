import React, { Component } from 'react';

export class IngredientsInput extends Component {
  render(){
    return(
      <div>
        <input type="text" name="name" />
        <input type="text" name="calories" />
      </div>
    )
  }
}

export const ConnectedIngredientsInput = IngredientsInput
