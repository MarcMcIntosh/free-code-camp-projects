import React from 'react';
import { func } from 'prop-types';

const AddButton = ({ cx, ...props }) => (<button type="button" className={cx('recipe-box-button')} tabIndex="0" title="Add" {...props}>
  <i className={cx('recipe-box-button__icon')}>add</i>
</button>);

AddButton.propTypes = { cx: func.isRequired };

export default AddButton;
