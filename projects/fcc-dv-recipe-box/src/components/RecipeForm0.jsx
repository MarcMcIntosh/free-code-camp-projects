/* eslint react/self-closing-comp: off */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Button, { Add } from './Buttons';
import { recipeEdit, recipeAdd } from '../actions';

const mapStateToProps = state => ({
  active: state.active,
});

const mapDispatchToProps = dispatch => ({
  onCancel: () => dispatch(recipeEdit(false)),
  onSubmit: (obj, n) => dispatch(recipeAdd(obj, n)),
});


class RecipeForm extends Component {
  constructor(props) {
    super(props);

    const { name, ingredients, notes, picture } = props;
    this.state = { name, ingredients, notes, picture };

    this.handleSumbit = this.handleSumbit.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.addIngredient = this.addIngredient.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.editIngredient = this.editIngredient.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.drawImage = this.drawImage.bind(this);
  }
  componentWillUnmount() {
    this.props.onCancel(false);
  }
  handleSumbit(event) {
    event.preventDefault();
    const { name, notes } = this.state;
    const ingredients = this.state.ingredients.filter(d => d.length > 0);
    const recipe = { name, ingredients, notes };
    this.props.onSubmit(recipe, this.props.active);
  }
  handleReset() {
    const { name, ingredients, notes } = this.props;
    this.setState({ name, ingredients, notes });
  }
  addIngredient() {
    const ingredients = this.state.ingredients.concat('');
    this.setState({ ingredients });
  }
  removeIngredient(n) {
    const { ingredients } = this.state;
    const next = [...ingredients];
    next.splice(n, 1);
    this.setState({ ingredients: next });
  }
  editIngredient(event, index) {
    // event.preventDefault();
    const ingredients = this.state.ingredients.slice();
    ingredients[index] = event.target.value;
    this.setState({ ingredients });
  }
  handleImage(event) {
    event.preventDefault();
    const f = this.file.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ picture: reader.result }, this.drawImage);
    };
    reader.readAsDataURL(f);
  }
  deleteImage() {
    this.file.value = '';
    this.file.type = '';
    this.file.type = 'file';
    if (this.canvas) {
      const ctx = this.canvas.getContext('2d');
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.width = 0;
      this.canvas.height = 0;
    }
    this.setState({ picture: '' });
  }
  drawImage() {
    const mH = 400;
    const mW = 300;
    const img = new Image();
    img.src = this.state.picture;
    let w = img.width;
    let h = img.height;
    if (w > h && w > mW) {
      h *= mW / w;
      w = mW;
    } else if (h > mH) {
      w *= mH / h;
      h = mH;
    }
    this.canvas.width = w;
    this.canvas.height = h;
    const ctx = this.canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, w, h);
    this.setState({ picture: this.canvas.toDataURL() });
  }

  render() {
    const { name, ingredients, notes, picture } = this.state;
    const { className, onCancel } = this.props;
    return (<form onSubmit={this.handleSumbit} className={className}>
      <header>
        <h1>Recipe Editor
          <a tabIndex="0" className="material-icons close" onClick={onCancel} title="Exit">close</a>
        </h1>
      </header>
      <section>
        <label htmlFor="name">Recipe</label>
        <input
          name="name"
          type="text"
          placeholder="Title"
          defaultValue={name}
          required
        />
      </section>
      <section className="image">
        <label htmlFor="picture">
          Image
        {(picture) ? (<a
          tabIndex="0"
          className="material-icons delete"
          title="remove picture"
          onClick={this.deleteImage}
        >close</a>) : false}
        </label>
        <input
          name="picture"
          type="file"
          accept="image/*"
          onChange={this.handleImage}
          ref={(file) => { this.file = file; }}
          disabled={(picture)}
        />
        <section className="preview">{(
          picture.length > 0 && this.state.picture === this.props.picture
        ) ? (
          <img alt="preview" src={picture} />
        ) : (
          <canvas
            width="0"
            height="0"
            ref={(canvas) => { this.canvas = canvas; }}
          ></canvas>
        )}</section>
      </section>

      <section className="ingredients">
        <legend>Ingredients <Add title="Add Ingredient" onClick={this.addIngredient} /> </legend>
        {ingredients.map((d, i) => (<div key={i}>
          <label htmlFor="name">
            Ingredient
            <a
              className="material-icons delete"
              tabIndex="0"
              onClick={() => this.removeIngredient(i)}
              title="remove ingredient"
            >delete</a>
          </label>
          <input
            name="name"
            type="text"
            placeholder="ingredient"
            value={d}
            onChange={event => this.editIngredient(event, i)}
            required
          />
        </div>))}
      </section>
      <section>
        <label htmlFor="notes">Preperation Notes</label>
        <textarea name="notes" defaultValue={notes} />
      </section>
      <Button type="submit">Submit</Button>
      <Button type="reset" onClick={this.handleReset}>Reset</Button>
    </form>);
  }
}

const { string, array, func, number } = PropTypes;
RecipeForm.propTypes = {
  name: string,
  ingredients: array,
  notes: string,
  className: string,
  onCancel: func.isRequired,
  onSubmit: func.isRequired,
  active: number.isRequired,
  picture: string,
};

RecipeForm.defaultProps = {
  name: '',
  ingredients: [],
  notes: '',
  picture: '',
  className: 'recipe recipe__form',
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
