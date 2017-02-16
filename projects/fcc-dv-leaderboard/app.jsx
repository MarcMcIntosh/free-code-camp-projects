import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import { render } from 'react-dom';
import Container, {
  UserList,
  ListItem,
  Constants,
  SortBy,
} from './index';
import './styles/test.scss';

const cats = Constants.SORT.map(d => d.value);

const Test = () => (<Container>
  {cats.map(d => (<SortBy key={d} value={d} />))}
  <UserList>
    <ListItem />
  </UserList>
</Container>);

render(<Test />, document.getElementById('App'));
