import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import axios from 'axios';
import Home from './Home.jsx';
import Favorite from './Favorite.jsx';
import Header from './Header.jsx';
import NotFound from './NotFound.jsx';
import Error from './Error.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      favorites: [],
      fetchError: false,
    };
  }

  componentDidMount() {
    axios.get(`${API_URL}/v1/recipes`)
      .then((res) => {
        this.setState({
          recipes: res.data,
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState((state) => ({
          fetchError: !state.fetchError,
        }));
      });
  }

  toggleToFavorites = (id) => (
    this.setState(({ favorites, ...state }) => {
      const idx = favorites.indexOf(id);
      if (idx !== -1) {
        return { ...state, favorites: favorites.filter((item) => item !== id) };
      }
      return { ...state, favorites: [...favorites, id] };
    })
  )

  render() {
    const { recipes, favorites, fetchError } = this.state;
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route
              exact
              path="/"
              render={() => (
                (fetchError) ? <Error />
                  : (
                    <>
                      <h2 className="h2 px4">Recipes</h2>
                      <Home
                        recipes={recipes}
                        favorites={favorites}
                        toggleToFavorites={this.toggleToFavorites}
                      />
                    </>
                  ))}
            />
            <Route
              path="/favorites"
              render={() => (
                <Favorite
                  favorites={favorites}
                  recipes={recipes}
                  toggleToFavorites={this.toggleToFavorites}
                />
              )}

            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
