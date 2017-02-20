import React from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../../actions';
import RecipeForm from '../Form/index';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(addRecipe(values)),
});

const NewRecipe = props => (<RecipeForm {...props} />);

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe);
