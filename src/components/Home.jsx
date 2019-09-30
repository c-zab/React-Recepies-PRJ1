import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList.jsx';
import RecipeDetail from './RecipeDetail.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRecipe: null,
    };
  }

  onRecipeClick = (id) => {
    axios.get(`${API_URL}/v1/recipes/${id}`)
      .then((res) => {
        this.setState({ currentRecipe: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { currentRecipe } = this.state;
    const { recipes, favorites, toggleToFavorites } = this.props;
    return (
      <div>
        <main className="flex px4">
          <RecipeList
            onClick={this.onRecipeClick}
            recipes={recipes}
            favorites={favorites}
            toggleFavorite={toggleToFavorites}
            className="col-3"
          />
          <RecipeDetail
            recipe={currentRecipe}
            className="ml4"
          />
        </main>
      </div>
    );
  }
}

App.propTypes = {
  recipes: PropTypes.array,
  favorites: PropTypes.array,
  toggleToFavorites: PropTypes.func,
};

export default App;
