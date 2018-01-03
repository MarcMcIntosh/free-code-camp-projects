import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { func, bool, number, array } from 'prop-types';
import ReactModal from 'react-modal';
import classnames from './styles';
import RecipeForm from './components/form';
import Menu from './components/menu';
import Recipe from './components/recipe';

import {
  createRecipe,
  updateRecipe,
  readRecipe,
  deleteRecipe,
} from './actions';

const mapStateToProps = ({
  recipeBox: { recipes, reading, editting },
}) => ({ recipes, reading, editting });

const mapDispatchToProps = dispatch => ({
  onCreate: payload => dispatch(createRecipe(payload)),
  onUpdate: payload => dispatch(updateRecipe(payload)),
  onRead: n => dispatch(readRecipe(+n)),
  onDelete: n => dispatch(deleteRecipe(+n)),
});

class RecipeBox extends PureComponent {
  constructor() {
    super();
    this.classnames = classnames;
  }
  getChildContext() { return { classnames: this.classnames }; }

  render() {
    const { editting, reading, onCreate, recipes, onUpdate, onRead, onDelete } = this.props;
    return (<div className={this.classnames('recipe-box')}>
      <Menu recipes={recipes} onRead={onRead} onCreate={() => onCreate(true)} />

      <ReactModal
        isOpen={editting || reading >= 0}
        ariaHideApp={false}
        onRequestClose={(event) => { event.preventDefault(); onCreate(false); onRead(-1); }}
        contentLabel={(editting) ? 'Recipe Form' : 'Recipe'}
        className={this.classnames('recipe-box-modal__container')}
        overlayClassName={this.classnames('recipe-box-modal__overlay')}
      >
        <div>
          {editting && (<RecipeForm initialValues={(reading >= 0) ? recipes[reading] : { ingredients: [null] }} onSubmit={values => onUpdate({ index: reading, values })} onCancel={() => onCreate(false)} />)}

          {!editting && reading >= 0 && (<Recipe recipe={recipes[reading]} onEdit={() => onCreate(true)} onDelete={() => onDelete(reading)} />)}
        </div>
      </ReactModal>
    </div>);
  }
}

RecipeBox.propTypes = {
  onCreate: func.isRequired,
  onRead: func.isRequired,
  onUpdate: func.isRequired,
  onDelete: func.isRequired,
  editting: bool.isRequired,
  reading: number.isRequired,
  recipes: array.isRequired,
};

RecipeBox.childContextTypes = {
  classnames: func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBox);
