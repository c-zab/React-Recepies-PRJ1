import React from 'react';
import PropTypes from 'prop-types';
import RecipeListItem from './RecipeListItem.jsx';

const RecipeList = ({
  recipes, favorites, onClick, addFavorite,
}) => (
  <div className="col-3">
    <h2 className="h2">Recipes</h2>
    <ul className="list-reset">
      {recipes.map((recipe) => (
        <RecipeListItem
          key={recipe.id}
          recipe={recipe}
          favorited={favorites.includes(recipe.id)}
          onClick={onClick}
          addFavorite={addFavorite}
        />
      ))}
    </ul>
  </div>
);

RecipeList.propTypes = {
  recipes: PropTypes.array,
  onClick: PropTypes.func,
  addFavorite: PropTypes.func,
  favorites: PropTypes.array,
};

export default RecipeList;
