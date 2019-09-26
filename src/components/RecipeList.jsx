import React from 'react';

const RecipeList = ({style, recipes, onClick}) => (
  <div style={style}>
    <h2>Recipes</h2>
    <ul>
      {recipes.map(recipe => (
        <li onClick={() => {onClick(recipe.id)}} key={recipe.id}>
          <span>{recipe.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default RecipeList;
