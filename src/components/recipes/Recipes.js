import React, { Component } from 'react';
import { connect } from 'react-redux'

export class Recipes extends Component {
  render(){
    return(
        <div>
          <ul>
            Recipes
          </ul>
        </div>
    )
  }
}


export const ConnectedRecipes = (Recipes)
