import React from 'react';
import PropTypes from 'prop-types';

const RecipeListItem = ({
  recipe, onClick, toggleFavorite, favorited,
}) => (
  <li
    onClick={() => { onClick(recipe.id); }}
    className="py2 border-bottom border-bottom-dashed pointer"
  >
    <span
      role="img"
      aria-label="emoji"
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(recipe.id);
      }}
    >
      { (favorited) ? '✅' : '🔲' }
    </span>
    <span>{recipe.name}</span>
  </li>
);

RecipeListItem.propTypes = {
  recipe: PropTypes.object,
  onClick: PropTypes.func,
  toggleFavorite: PropTypes.func,
  favorited: PropTypes.bool,
};

export default RecipeListItem;
