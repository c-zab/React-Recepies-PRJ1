import React from 'react';
import Header from './Header.jsx'
import RecipeList from './RecipeList.jsx'
import RecipeDetail from './RecipeDetail.jsx'
import axios from 'axios'

axios.get(`${API_URL}/v1/recipes`)
  .then(res => console.log(res.data))
  .catch(err => console.log(err))

const App = () => (
  <div>
    <Header></Header>
    <main style={{ display: 'flex' }}>
      <RecipeList style={{ flex:3 }}></RecipeList>
      <RecipeDetail style={{ flex:5 }}></RecipeDetail>
    </main>
  </div>
)

export default App;
