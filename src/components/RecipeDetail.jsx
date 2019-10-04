import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const RecipeDetails = ({ recipe, className }) => {
  if (!recipe) {
    return (
      <div className={classNames('h3 p2 bg-white italic center', className)}>
        <p className="h3 p2 bg-white italic center">No recipe selected</p>
      </div>
    );
  }
  return (
    <div className={classNames('col-8 p2 bg-white', className)}>
      <h2 className="h2">{recipe.name}</h2>
      <img className="fit" src={recipe.image} alt="Recipe" />
      <div>
        <span>{recipe.category}</span>
      </div>
      <div>
        <span>
          {recipe.calories}
          {' cal.'}
        </span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <Link to={`/recipe/${recipe.id}`}>See more</Link>
    </div>
  );
};

RecipeDetails.propTypes = {
  recipe: PropTypes.object,
  className: PropTypes.string,
};

export default RecipeDetails;
