import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Favorite from './Favorite.jsx';
import Header from './Header.jsx';

const App = () => (
  <BrowserRouter>
    <main>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/favorite" component={Favorite} />
    </main>
  </BrowserRouter>
);

export default App;
