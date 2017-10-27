import React, { PropTypes } from 'react';

const Ingredient = ({
  editing,
  value,
  onCancel,
  onSave,
  onDelete,
  onEdit,
  onChange,
  ...props
}) => {
  const handleKeyPress = (event) => {
    switch (event.key) {
      case 'Escape' : return onCancel();
      case 'Enter' : return onSave();
      default: return undefined;
    }
  };
  if (editing) {
    return (<li {...props}>
      <span className="controls">
        <a role="button" className="material-icons done" tabIndex="0" onClick={onSave} title="save" >check</a>
        <a role="button" className="material-icons close" tabIndex="0" onClick={onCancel} title="cancel">close</a>
      </span>
      <label htmlFor="ingredient">
        Ingredient
      </label>
      <input
        name="ingredient"
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        required
      />
    </li>);
  }
  return (<li {...props}>
    <span className="controls">
      <a
        role="button"
        className="material-icons edit"
        tabIndex="0"
        onClick={onEdit}
        title="edit ingredient"
      >mode_edit</a>
      <a
        role="button"
        className="material-icons delete"
        tabIndex="0"
        onClick={onDelete}
        title="remove ingredient"
      >delete</a>
    </span>
    {value}
  </li>);
};

const { func, bool, string } = PropTypes;
Ingredient.propTypes = {
  value: string,
  editing: bool.isRequired,
  onCancel: func.isRequired,
  onDelete: func.isRequired,
  onEdit: func.isRequired,
  onSave: func.isRequired,
  onChange: func.isRequired,
};

Ingredient.defaultProps = { value: '' };

export default Ingredient;
