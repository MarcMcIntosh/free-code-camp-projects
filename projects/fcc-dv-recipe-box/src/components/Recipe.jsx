/* eslint react/no-array-index-key: off */
import React, { PropTypes, Component } from 'react';

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
    const { name, ingredients, picture, notes } = this.props;
    const { options, enlarge } = this.state;
    const imgCN = (enlarge) ? 'recipe__image--enlarge' : 'recipe__image';
    return (<article className="recipe">
      <header className="recipe__header">
        <h1>{name}</h1>
        {(picture) ? (<a tabIndex="0" className={imgCN} onClick={this.handleImage}>
          <img alt={name} src={picture} />
        </a>) : false }
      </header>

      <section className="recipe__ingredients">
        <ul>{ingredients.map((d, i) => (
          <li key={i}>{d}</li>
        ))}</ul>
      </section>

      {(notes.length > 0) ? (<p className="recipe__notes">{notes}</p>) : false }

      <footer className="recipe__options">
        {(!options) ? false : (<span>
          <a
            tabIndex="0" onClick={this.handleEdit} className="material-icons"
            title="edit recipe"
          >mode_edit</a>
          <a
            tabIndex="0" onClick={this.handleDelete} className="material-icons"
            title="remove recipe"
          >delete_forever</a>
        </span>)}
        <a
          tabIndex="0"
          onClick={this.handleOptions} className="material-icons"
          title={(options) ? 'close options' : 'open options'}
        >{(options) ? 'close' : 'settings_applications'}</a>
      </footer>
    </article>);
  }
}

const { func, string, arrayOf } = PropTypes;
Recipe.propTypes = {
  onEdit: func.isRequired,
  onDelete: func.isRequired,
  name: string.isRequired,
  ingredients: arrayOf(string).isRequired,
  notes: string,
  picture: string,
};

Recipe.defaultProps = { notes: '', picture: '' };


export default Recipe;
