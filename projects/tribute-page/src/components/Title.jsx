import React, { PropTypes } from 'react';
import { TITLE } from '../constants';

const Title = ({
  term,
  desc,
  src,
  config,
  ...props
}) => {
  const { TERM, DESC, SRC, ...conf } = config;
  return (<dl {...conf} {...props}>
    <dt {...TERM}><q>{term}</q></dt>
    <dd {...DESC}>{desc}<sup {...SRC}>
      <a href={src} target="_blank" rel="noopener noreferrer">src</a>
    </sup></dd>
  </dl>);
};

Title.propTypes = {
  term: PropTypes.string,
  desc: PropTypes.string,
  src: PropTypes.string,
  config: PropTypes.shape({
    TERM: PropTypes.shape({
      className: PropTypes.string,
    }),
    DESC: PropTypes.shape({
      className: PropTypes.string,
    }),
    SRC: PropTypes.shape({
      className: PropTypes.string,
    }),
  }),
};

Title.defaultProps = { config: TITLE };

export default Title;
