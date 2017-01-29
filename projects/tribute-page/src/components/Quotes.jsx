import React, { PropTypes } from 'react';
import { QUOTES } from '../constants';

const Quotes = ({
  list,
  config,
  ...props
}) => {
  const { QUOTE, ...conf } = config;
  // const quotes = list || QUOTE.list;
  return (<ul {...conf} {...props}>{
    (list || QUOTE.list).map((d, i) => (
      <li key={i} {...QUOTE}>{d}</li>
    ))}
  </ul>);
};

Quotes.propTypes = {
  list: PropTypes.array,
  config: PropTypes.shape({
    list: PropTypes.array,
    className: PropTypes.string,
    QUOTE: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
};

Quotes.defaultProps = { config: QUOTES };

export default Quotes;
