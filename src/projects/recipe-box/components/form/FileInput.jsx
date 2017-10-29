import React from 'react';
import { func } from 'prop-types';
import { fieldPropTypes } from 'redux-form';
import Dropzone from 'react-dropzone';

const FileInput = ({
  input: { onChange, value, ...input },
  label,
}, {
  classnames,
}) => (<div className={classnames('recipe-box-form-file')}>
  {!value && (<label className={classnames('recipe-box-form-file__label')} htmlFor={input.name}>{label}</label>)}
  <Dropzone
    {...input}
    className={classnames('recipe-box-form-file__preview')}
    style={value ? { backgroundImage: `url(${value})` } : {}}
    accept="image/*"
    onDrop={(files) => {
      files.forEach((file) => {
        const r = new FileReader();
        r.onload = () => { onChange(r.result); };
        r.readAsDataURL(file);
      });
    }}
  />
</div>);
/*
const FileInput = ({
  input: { onChange, ...input },
}, {
  classnames,
}) => (<div className={classnames('recipe-box-form-file')}>
  <img className={classnames('recipe-box-form-file__preview')} src={input.value} alt="" />

  <div className={classnames('recipe-box-form-file__actions')}>
    <input
      type="file"
      accept="image/*"
      className={classnames('recipe-box-form-file__action')}
      onChange={(event) => {
        const n = event.target.files.length - 1 || 0;
        const r = new FileReader();
        r.onloadend = (d) => { onChange(d.target.result); };
        r.readAsDataURL(event.target.files[n]);
      }}
    />
  </div>
</div>);
*/

FileInput.propTypes = { ...fieldPropTypes };
FileInput.contextTypes = { classnames: func.isRequired };

export default FileInput;
