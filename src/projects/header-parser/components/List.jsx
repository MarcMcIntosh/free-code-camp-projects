import React from 'react';
import { func, object } from 'prop-types';
import ListItem from './ListItem';

const List = ({ results }, { classnames }) => (<ul className={classnames('list')}>
  {Object.entries(results).map(([k, value]) => (<ListItem key={k}>{k} : {value} </ListItem>))}
</ul>);

List.propTypes = { results: object.isRequired };

List.contextTypes = { classnames: func.isRequired };

export default List;
