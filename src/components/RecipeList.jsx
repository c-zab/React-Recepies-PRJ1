import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RecipeListItem from './RecipeListItem.jsx';

const RecipeList = ({
  recipes, favorites, onClick, toggleFavorite, className,
}) => {
  RecipeList.defaultProps = { onClick: () => {} };
  return (
    <div className={classNames(className)}>
      <ul className="list-reset">
        {recipes.map((recipe) => (
          <RecipeListItem
            key={recipe.id}
            recipe={recipe}
            favorited={favorites.includes(recipe.id)}
            onClick={onClick}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </ul>
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array,
  onClick: PropTypes.func,
  toggleFavorite: PropTypes.func,
  favorites: PropTypes.array,
  className: PropTypes.string,
};

export default RecipeList;
