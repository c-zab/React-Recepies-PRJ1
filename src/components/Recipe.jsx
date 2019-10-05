import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import RecipeDetail from './RecipeDetail.jsx';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`${API_URL}/v1/recipes/${params.id}`)
      .then((res) => {
        this.setState({ recipe: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { recipe } = this.state;
    return (
      <div className="px4">
        <RecipeDetail recipe={recipe} />
      </div>
    );
  }
}

Recipe.propTypes = {
  match: PropTypes.object,
};

export default Recipe;
