import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Add, Close, Cancel, Done } from '../Buttons';
import { recipeEdit, recipeAdd } from '../../actions';

const mapStateToProps = state => ({
  active: state.active,
});

const mapDispatchToProps = dispatch => ({
  onReset: () => dispatch(recipeEdit()),
  onSubmit: (obj, n) => dispatch(recipeAdd(obj, n)),
});


class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      ingredients: props.ingredients,
      notes: props.notes,
    };
    this.handleSumbit = this.handleSumbit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.editIngredient = this.editIngredient.bind(this);
  }
  handleSumbit(event) {
    event.preventDefault();
    const { name, ingredients, notes } = this.state;
    const recipe = { name, ingredients, notes };
  }
  handleReset() {
    const { state, props } = this;
    if (state.name === props.name
      && state.ingredients.length === props.ingredients.length
      && state.notes === props.notes
    ) {
      this.props.onCancel();
    } else {
      this.setState({ name, ingredients, notes });
    }
  }
  addIngredient() {
    const ingredients = this.state.ingredients.concat({ name: '', quantity: '' });
    this.setState({ ingredients });
  }
  removeIngredient(n) {
    const { ingredients } = this.state;
    const next = [...ingredients];
    next.splice(n, 1);
    this.setState({ ingredients: next });
  }
  editIngredient(event, index) {
    const ingredients = this.state.ingredients.slice();
    ingredients[index][event.target.name] = event.target.value;
    this.setState({ ingredients });
  }
  render() {
    const { name, ingredients, notes } = this.state;
    const { className } = this.props;
    return (<form onSubmit={this.handleSumbit} className={className}>
      <section>
        <label htmlFor="name">Recipe</label>
        <input
          name="name"
          type="text"
          placeholder="Title"
          defaultValue={name}
        />
      </section>
      <section>
        Ingredients
        <Add title="Add Ingredient" onClick={this.addIngredient} />
        {ingredients.map((d, i) => {
          const a = `ingredients[${i}]`;
          return (<div key={a}>
            <label htmlFor="name">Ingredient</label>
            <input
              name="name"
              type="text"
              placeholder="ingredient"
              defaultValue={d.name}
              onChange={event => this.editIngredient(event, i)}
            />
            <label htmlFor="quantity">Quantity</label>
            <input
              name="quantity"
              type="text"
              defaultValue={d.quantity}
              placeholder="quantity"
              onChange={event => this.editIngredient(event, i)}
            />
            <Close onClick={() => this.removeIngredient(i)} />
          </div>);
        })}
      </section>
      <section>
        Notes
        <textarea name="notes" defaultValue={notes} />
      </section>
      <Done type="submit" />
      <Cancel type="reset" onClick={this.handleReset} />
    </form>);
  }
}

const { string, array, number } = PropTypes;
RecipeForm.propTypes = {
  name: string,
  ingredients: array,
  notes: string,
  className: string,
  active: number.isRequired,
  onReset: func.isRequired,
  onSubmit: func.isRequired,
};

RecipeForm.defaultProps = {
  name: '',
  ingredients: [],
  notes: '',
  className: 'vertical-tab-content',
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
