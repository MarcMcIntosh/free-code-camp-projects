import React, { PropTypes } from 'react';
import { TITLE } from '../constants';

const Title = ({
  config,
  ...props
}) => {
  const { TERM, DESC, SRC, TEXT, ...conf } = config;
  return (<dl {...conf} {...props}>
    <dt {...TERM}><q>{TEXT.TERM}</q></dt>
    <dd {...DESC}>{TEXT.DESC}<sup {...SRC}>
      <a href={TEXT.SRC} target="_blank" rel="noopener noreferrer">src</a>
    </sup></dd>
  </dl>);
};

const { string, shape } = PropTypes;
Title.propTypes = { config: shape({
  TEXT: shape({
    TERM: string,
    DESC: string,
    SRC: string,
  }),
  TERM: shape({ className: string }),
  DESC: shape({ className: string }),
  SRC: shape({ className: string }),
}) };

Title.defaultProps = { config: TITLE };

export default Title;
