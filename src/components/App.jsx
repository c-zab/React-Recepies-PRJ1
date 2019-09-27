import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Favorite from './Favorite.jsx';
import Header from './Header.jsx';
import NotFound from './NotFound.jsx';

const App = () => (
  <BrowserRouter>
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorite" component={Favorite} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
