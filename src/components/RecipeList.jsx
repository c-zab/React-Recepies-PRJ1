import React from 'react';

const RecipeList = ({recipes, onClick}) => (
  <div className='col-3'>
    <h2 className='h2'>Recipes</h2>
    <ul className='list-reset'>
      {recipes.map(recipe => (
        <li
          onClick={() => {onClick(recipe.id)}}
          key={recipe.id}
          className='py2 border-bottom border-bottom-dashed pointer'
        >
          <span>{recipe.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default RecipeList;
