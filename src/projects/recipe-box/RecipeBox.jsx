import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import Header from './components/Header';
import {
  createRecipe,
  updateRecipe,
  readRecipe,
  deleteRecipe,
} from './actions';

const mapStateToProps = ({
  recipeBox: { recipes = [], reading = -1 },
}) => ({ recipes, reading });

const mapDispatchToProps = dispatch => ({
  onCreate: ({ target: { value = true } }) => dispatch(createRecipe(value)),
  onUpdate: payload => dispatch(updateRecipe(payload)),
  onRead: event => dispatch(readRecipe(+event.target.value)),
  onDelete: event => dispatch(deleteRecipe(+event.target.value)),
});

class RecipeBox extends Component {
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
    if (this.props.adding) {
      this.props.onSaveCake(data);
    } else if (this.props.edit >= 0) {
      this.props.onUpdateCake(data);
    }
  }
  render() {
    return (<div className={this.context.classnames('recipe-box')}>
      <Header onClick={this.props.onCreate} />

      <main className="bpc__container">
        <CakeList
          cakes={this.props.cakes}
          onEdit={this.props.onEditCake}
          onRemove={this.props.onRemoveCake}
        />
        
      </main>
      <ReactModal
        isOpen={this.props.edit >= 0 || this.props.adding}
        onRequestClose={this.props.onCancelEdit}
        contentLabel="Cake Form"
      >
        {(this.props.edit >= 0 && this.props.edit < this.props.cakes.length) ? (<CakeForm
          {...this.props.cakes[this.props.edit]}
          onSubmit={this.handleSubmit}
          onCancel={this.props.onCancelEdit}
        />) : (<CakeForm
          onSubmit={this.handleSubmit}
          onCancel={this.props.onCancelEdit}
        />)}
      </ReactModal>
    </div>);
  }
}

RecipeBox.propTypes = {
  onCreate: func.isRequired,
};

RecipeBox.contextTypes = {
  classnames: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBox);
