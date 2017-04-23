import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { COOKIE_MESSAGE } from './constants';
import CakeForm from './components/CakeForm';

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
  adding: state.adding,
});

const mapDispatchToProps = dispatch => ({
  onEditCake: n => dispatch(editCake(n)),
  onCancelEdit: () => dispatch(cancelEdit()),
  onUpdateCake: n => dispatch(updateCake(n)),
  onAddCake: () => dispatch(addCake()),
  onSaveCake: d => dispatch(saveCake(d)),
  onRemoveCake: n => dispatch(rmCake(n)),
  onAccept: () => dispatch(acceptCookie()),
});

class Cakes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleReset(event) {
    event.preventDefault();
    this.props.onCancelEdit();
  }
  handleSubmit(event, data) {
    event.preventDefault();
    console.log(data);
    if (this.props.adding) {
      this.props.onSaveCake(data);
    } else if (this.props.edit >= 0) {
      this.props.onUpdateCake(data);
    }
  }
  render() {
    return (<div className="bpc__container">
      <ReactModal
        isOpen={this.props.edit >= 0 || this.props.adding}
        onRequestClose={this.props.onCancelEdit}
        contentLabel="Cake Form"
      >
        <CakeForm
          onSubmit={this.handleSubmit}
          onCancel={this.props.onCancelEdit}
        />
      </ReactModal>
      <button onClick={this.props.onAddCake}>new cake</button>

      <main className="bpc__container">
        <CakeList
          cakes={this.props.cakes} onEdit={this.props.onEditCake}
          onRemove={this.props.onRemoveCake}
        />
        {(this.props.cookies) ? false : (<div className="bpc__cookie-banner">
          <p>{COOKIE_MESSAGE}</p>
          <button onClick={this.props.onAccept}>Yes</button>
        </div>)}
      </main>
    </div>);
  }
}

const { bool, func, array, number } = PropTypes;
Cakes.propTypes = {
  cookies: bool.isRequired,
  edit: number.isRequired,
  cakes: array.isRequired,
  adding: bool.isRequired,
  onEditCake: func.isRequired,
  onCancelEdit: func.isRequired,
  onUpdateCake: func.isRequired,
  onAddCake: func.isRequired,
  onSaveCake: func.isRequired,
  onRemoveCake: func.isRequired,
  onAccept: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cakes);
