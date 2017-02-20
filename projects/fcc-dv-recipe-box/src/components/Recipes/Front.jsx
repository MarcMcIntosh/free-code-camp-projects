/* eslint max-len: ["error", { "ignoreStrings": true }]*/
import React, { PropTypes } from 'react';
import { Add } from '../Buttons';

const Front = ({
  onAdd,
  isEmpty,
  ...props
}) => (<article {...props}>
  <header>
    <h1>Local Storge Recipe Box</h1>
    <Add onClick={onAdd} title="Add Recipe" />
  </header>
  <p>{(isEmpty) ? 'This application stores user created content in the broswer so it can be saved and accessed later by the user' : 'Welcome Back'}</p>
</article>);

const { bool, func } = PropTypes;
Front.propTypes = {
  onAdd: func.isRequired,
  isEmpty: bool.isRequired,
};

export default Front;
