import React from 'react';
import {
  MAIN_TITLE,
  SUB_TITLE,
} from '../constants';

const Heading = props => (<header {...props}>
  <h1 className="scatterplot__title">{MAIN_TITLE}</h1>
  <h2 className="scatterplot__sub-title">{SUB_TITLE}</h2>
</header>);

export default Heading;
