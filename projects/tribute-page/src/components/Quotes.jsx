import React, { PropTypes } from 'react';
import { QUOTES } from '../constants';

const Quotes = ({
  config,
  ...props
}) => {
  const { list, QUOTE, ...conf } = config;
  return (<ul {...conf} {...props}>{
    list.map((d, i) => (
      <li key={i} {...QUOTE}>{d}</li>
    ))}
  </ul>);
};

Quotes.propTypes = {
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
