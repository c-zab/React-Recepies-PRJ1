import React, { Component } from 'react';
import Header from './Header.jsx'
import RecipeList from './RecipeList.jsx'
import RecipeDetail from './RecipeDetail.jsx'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      currentRecipe: null,
      favoriteStep: 'asdasd'
    }
  }

  componentDidMount() {
    axios.get(`${API_URL}/v1/recipes`)
      .then(res => {
        this.setState({
          recipes: res.data
        })
      })
      .catch(err => console.log(err))
  }

  onRecipeClick = (id) => {
    axios.get(`${API_URL}/v1/recipes/${id}`)
      .then(res => {
        this.setState({currentRecipe: res.data})
      })
      .catch(err => console.log(err))
  }

  selectFavorite = (step) => {
    console.log("TCL: App -> selectFavorite -> step", step)
    return (
      this.setState({favoriteStep: step})
    )
  }

  render() {
    const { recipes, currentRecipe,favoriteStep } = this.state;
    return (
      <div>
        <Header></Header>
        <main style={{ display: 'flex' }}>
          <RecipeList
            onClick={this.onRecipeClick}
            recipes={recipes}
            favoriteStep={favoriteStep}
            style={{ flex:3 }}>
          </RecipeList>

          <RecipeDetail
            recipe={currentRecipe}
            favorite={this.selectFavorite}
            style={{ flex:5 }} >
          </RecipeDetail>
        </main>
      </div>
    )
  }
}


export default App;
