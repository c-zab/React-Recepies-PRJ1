import React from 'react';
import PropTypes from 'prop-types';

const RecipeList = ({ recipes, onClick }) => (
  <div className="col-3">
    <h2 className="h2">Recipes</h2>
    <ul className="list-reset">
      {recipes.map((recipe) => (
        <li
          onClick={() => { onClick(recipe.id); }}
          key={recipe.id}
          className="py2 border-bottom border-bottom-dashed pointer"
        >
          <span>{recipe.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

RecipeList.propTypes = {
  recipes: PropTypes.array,
  onClick: PropTypes.func,
};

export default RecipeList;
