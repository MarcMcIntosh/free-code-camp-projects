import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Tab from './Tab';
import { recipeView } from '../../actions';
import { Menu } from '../Buttons';

const mapStateToProps = state => ({
  recipes: state.recipes,
  active: state.active,
  edit: state.edit,
});

const mapDispatchToProps = dispatch => ({
  setActive: event => dispatch(recipeView(event.target.value)),
});

const Tabs = ({
  setActive,
  recipes,
  active,
  ...props
}) => (<div {...props}>
  <Menu value={-1} onClick={setActive} disabled={active === -1} />
  {recipes.map((d, i) => {
    const { name } = d;
    const k = `${name}:${i}`;
    return (<Tab
      key={k}
      value={i}
      title={name}
      disabled={active === i}
      onClick={setActive}
    >{name}</Tab>);
  })}
</div>);

const { func, number, array } = PropTypes;
Tabs.propTypes = {
  setActive: func.isRequired,
  recipes: array.isRequired,
  active: number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
