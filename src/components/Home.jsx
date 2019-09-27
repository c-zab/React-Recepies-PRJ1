import React, { Component } from 'react';
import axios from 'axios';
import RecipeList from './RecipeList.jsx';
import RecipeDetail from './RecipeDetail.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      currentRecipe: null,
      favoriteStep: 'asdasd',
    };
  }

  componentDidMount() {
    axios.get(`${API_URL}/v1/recipes`)
      .then((res) => {
        this.setState({
          recipes: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  onRecipeClick = (id) => {
    axios.get(`${API_URL}/v1/recipes/${id}`)
      .then((res) => {
        this.setState({ currentRecipe: res.data });
      })
      .catch((err) => console.log(err));
  }

  selectFavorite = (step) => (
    this.setState({ favoriteStep: step })
  )

  render() {
    const { recipes, currentRecipe, favoriteStep } = this.state;
    return (
      <div>
        <main className="px4 flex">
          <RecipeList
            onClick={this.onRecipeClick}
            recipes={recipes}
            favoriteStep={favoriteStep}
          />

          <RecipeDetail
            recipe={currentRecipe}
            favorite={this.selectFavorite}
            className="ml4"
          />
        </main>
      </div>
    );
  }
}


export default App;
