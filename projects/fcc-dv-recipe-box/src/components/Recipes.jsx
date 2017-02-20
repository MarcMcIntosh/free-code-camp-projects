import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import RecipeForm from './Form/index';

const mapStateToProps = state => ({
  recipes: state.recipes,
});

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.create = this.create.bind(this);
  }
  delete(n) {
    this.props.recipes
  }
  create(obj) {

  }
  render() {

  }
};
