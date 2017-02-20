import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Add } from '../Buttons';
import { recipeAdd } from '../actions';
import NewRecipe from './Recipe';

const mapStateToProps = () => ({
  editing: state.edit,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(recipeAdd(values)),
});

const Menu = ({ editing, ...props }) => (
  <div> content</div>
);

Menu.propTypes = { editing: PropTypes.bool.isRequired };
Menu.defaultProps = {
  className: 'vertical-tab-content',
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
