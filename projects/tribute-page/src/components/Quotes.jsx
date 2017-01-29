import React, { PropTypes } from 'react';
import { QUOTES } from '../constants';

const Quotes = ({
  list,
  config,
  ...props
}) => {
  const { QUOTE, ...conf } = config;
  return (<ul {...conf} {...props}>{
    list.map((d, i) => (
      <li key={i} {...QUOTE}>{d}</li>
    ))}
  </ul>);
};

Quotes.propTypes = {
  list: PropTypes.array,
  config: PropTypes.shape({
    className: PropTypes.string,
    QUOTE: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
};

Quotes.defaultProps = { config: QUOTES };

export default Quotes;
