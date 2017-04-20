import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { COOKIE_MESSAGE } from './constants';
import {
  editCake,
  cancelEdit,
  updateCake,
  addCake,
  saveCake,
  rmCake,
  acceptCookie,
} from './actions';

import CakeList from './components/CakeList';

const mapStateToProps = state => ({
  cookies: state.cookies,
  cakes: state.cakes,
  edit: state.edit,
});

const mapDispatchToProps = dispatch => ({
  onEditCake: n => dispatch(editCake(n)),
  onCancelEdit: () => dispatch(cancelEdit()),
  onUpdateCake: n => dispatch(updateCake(n)),
  onAddCake: () => dispatch(addCake()),
  onSaveCake: () => dispatch(saveCake()),
  onRemoveCake: n => dispatch(rmCake(n)),
  onAccept: () => dispatch(acceptCookie()),
});

class Cakes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (<div className="bpc__container">
      <button onClick={this.props.onAddCake}>new cake</button>
      <CakeList
        cakes={this.props.cakes} onEdit={this.props.onEditCake}
        onRemove={this.props.onRemoveCake}
      />
      {(this.props.cookies) ? false : (<div className="bpc__cookie-banner">
        <p>{COOKIE_MESSAGE}</p>
        <button onClick={this.props.onAccept}>Yes</button>
      </div>)}
    </div>);
  }
}

const { bool, func, array /* , number */} = PropTypes;
Cakes.propTypes = {
  cookies: bool.isRequired,
//  edit: number.isRequired,
  cakes: array.isRequired,
  onEditCake: func.isRequired,
//  onCancelEdit: func.isRequired,
//  onUpdateCake: func.isRequired,
  onAddCake: func.isRequired,
  // onSaveCake: func.isRequired,
  onRemoveCake: func.isRequired,
  onAccept: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cakes);
