import React from 'react';
import AddIcon from 'material-design-icons/content/svg/production/ic_add_24px.svg';

const AddButton = (props, { classnames }) => (<button type="button" className={classnames('recipe-box-button')} tabInedx="0" title="Add" {...props}>
  <img className={classnames('recipe-box-button__icon')} src={AddIcon} alt="" />
</button>);

export default AddButton;
