import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const RecipeDetails = ({ recipe, favorite, className }) => {
  if (!recipe) {
    return (
      <div className={classNames('h3 p2 bg-white italic center', className)}>
        <p className="h3 p2 bg-white italic center">No recipe selected</p>
      </div>
    );
  }
  return (
    // <div className='col-9 pl4 p2 bg-white'>
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
          // eslint-disable-next-line react/no-array-index-key
          <li onClick={() => { favorite(ingredient); }} key={index}>
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
    </div>
  );
};

RecipeDetails.propTypes = {
  recipe: PropTypes.object,
  favorite: PropTypes.func,
  className: PropTypes.string,
};

export default RecipeDetails;
