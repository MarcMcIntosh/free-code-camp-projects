import React from 'react';
import { func } from 'prop-types';
import { fieldInputPropTypes } from 'redux-form';

const FileInput = ({
  input: { onChange, ...input },
}, {
  classnames,
}) => {
  const _handleChange = event => {
    const reader = new FileReader();
    reader.onloadend = (d) => {
      onChange(d.target.result);
    };
    reader.readAsDataURL(event.files[0]);
  };
  
  <div className={classnames('recipe-box-menu-item')}>
  <div className={classnames('recope-box-menu-item__primary')}>{/* Use input as a backgroundIamge */ }
    <div className={classnames('recipe-box-menu-item__image')} style={input.value ? { backgroundImage: `url(${input.value})` } : {}} />
  </div>
  <div className={classnames('recipe-box-menu-item__text')}>

    <input
      className={classnames('recipe-box-form__file-input')}
      {...input}
      type="file"
      accept="image/*"
      onChange={(event) => {
        const reader = new FileReader();
        reader.onloadend = (d) => {
          onChange(d.target.result);
        };
        reader.readAsDataURL(event.files[0]);
      }}
    />
  </div>
</div>);

FileInput.propTypes = { ...fieldInputPropTypes };
FileInput.contextTypes = { classnames: func.isRequired };

export default FileInput;
