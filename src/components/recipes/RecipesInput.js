import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
export class RecipesInput extends Component {

  componentDidMount() {
    console.log('I was triggered during componentDidMount')
  }
  
  render(){
    return(
      <div>
        <p>Hello</p>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     recipes: state.recipes
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     addRecipe: addRecipe
//   }, dispatch)
// }

// export const ConnectedRecipesInput = connect(mapStateToProps, mapDispatchToProps)(RecipesInput)
