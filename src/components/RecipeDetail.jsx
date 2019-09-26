import React from 'react'

const RecipeDetails = ({style, recipe, favorite}) => {
  if(!recipe) {
    return (
      <div style={style}>
        <p>No recipe selected</p>
      </div>
    )
  }
  return (
    <div style={style}>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt="Recipe"/>
      <div>
        <span>{recipe.category}</span>
      </div>
      <div>
        <span>{recipe.calories} cal.</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => {
          return (
            <li onClick={() => {favorite(ingredient)}} key={index}>
              {ingredient}
            </li>
          )
        })}
      </ul>
      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  )
}

export default RecipeDetails;
