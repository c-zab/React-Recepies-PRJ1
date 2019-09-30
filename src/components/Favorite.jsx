import React from 'react';
import PropTypes from 'prop-types';
import RecipeList from './RecipeList.jsx';
import NotFavorites from './NoFavorites.jsx';

const Favorite = ({
  recipes, favorites, toggleToFavorites,
}) => (
  (favorites.length === 0)
    ? (<NotFavorites />)
    : (
      <div className="px4">
        <h2 className="h2">Favorites</h2>
        <RecipeList
          recipes={recipes.filter((f) => favorites.includes(f.id))}
          favorites={favorites}
          toggleFavorite={toggleToFavorites}
          className="col-5"
        />
      </div>
    )
);

Favorite.propTypes = {
  recipes: PropTypes.array,
  favorites: PropTypes.array,
  toggleToFavorites: PropTypes.func,
};

export default Favorite;
