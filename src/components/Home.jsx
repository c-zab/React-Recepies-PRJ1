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
      favorites: [],
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

  addToFavorites = (id) => (
    this.setState(({ favorites, ...state }) => {
      const idx = favorites.indexOf(id);
      if (idx !== -1) {
        return { ...state, favorites: favorites.filter((item) => item !== id) };
      }
      return { ...state, favorites: [...favorites, id] };
    })
  )

  render() {
    const { recipes, currentRecipe, favorites } = this.state;
    return (
      <div>
        <main className="px4 flex">
          <RecipeList
            onClick={this.onRecipeClick}
            recipes={recipes}
            favorites={favorites}
            addFavorite={this.addToFavorites}
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
