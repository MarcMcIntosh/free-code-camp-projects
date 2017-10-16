/* eslint react/no-array-index-key: off */
import React, { Component } from 'react';
import { func, string, arrayOf } from 'prop-types';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: false,
      enlarge: false,
    };
    this.handleOptions = this.handleOptions.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleEdit(event) {
    event.preventDefault();
    this.props.onEdit();
    return false;
  }
  handleDelete(event) {
    event.preventDefault();
    this.props.onDelete();
    return false;
  }
  handleImage(event) {
    event.preventDefault();
    this.setState({ enlarge: !this.state.enlarge });
    return false;
  }
  handleOptions(event) {
    event.preventDefault();
    this.setState({ options: !this.state.options });
    return false;
  }
  render() {
    const { name, ingredients, picture, notes, onClose } = this.props;
    const { options } = this.state;
    return (<article className="recipe">
      <a
        role="button"
        className="recipe__a material-icons close"
        tabIndex="0"
        onClick={onClose}
        title="close recipe"
      >close</a>
      <header className="recipe__header">
        <h1>{name}
          {(picture) ? (<img className="recipe__image" alt={name} src={picture} />) : false }
        </h1>
      </header>

      <section className="recipe__ingredients">
        <i>Ingredients</i>
        <ul>{ingredients.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
        </ul>
      </section>

      {(notes.length > 0) ? (
        <section className="recipe__notes">
          <i>Preperation Notes</i>
          <p>{notes}</p>
        </section>
      ) : false }

      <footer className="recipe__options">
        {(!options) ? false : (<span>
          <a
            role="button"
            tabIndex="0"
            onClick={this.handleEdit}
            className="recipe__a material-icons"
            title="edit recipe"
          >mode_edit</a>
          <a
            role="button"
            tabIndex="0"
            onClick={this.handleDelete}
            className="recipe__a material-icons"
            title="remove recipe"
          >delete_forever</a>
        </span>)}
        <a
          role="button"
          tabIndex="0"
          onClick={this.handleOptions}
          className="recipe__a material-icons"
          title={(options) ? 'close options' : 'open options'}
        >{(options) ? 'close' : 'settings_applications'}</a>
      </footer>
    </article>);
  }
}

Recipe.propTypes = {
  onEdit: func.isRequired,
  onDelete: func.isRequired,
  name: string.isRequired,
  ingredients: arrayOf(string).isRequired,
  onClose: func.isRequired,
  notes: string,
  picture: string,
};

Recipe.defaultProps = { notes: '', picture: '' };


export default Recipe;
