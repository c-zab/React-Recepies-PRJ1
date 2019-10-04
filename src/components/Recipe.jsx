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
    // eslint-disable-next-line react/destructuring-assignment
    const { id } = this.props.match.params;
    axios.get(`${API_URL}/v1/recipes/${id}`)
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
