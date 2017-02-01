import React, { PropTypes } from 'react';

const Title = ({
  TEXT,
  TERM,
  DESC,
  SRC,
  ...props
}) => (<dl {...props}>
  <dt {...TERM}><q>{TEXT.TERM}</q></dt>
  <dd {...DESC}>{TEXT.DESC}<sup {...SRC}>
    <a href={TEXT.SRC} target="_blank" rel="noopener noreferrer">src</a>
  </sup>
  </dd>
</dl>);


const { string, shape } = PropTypes;
Title.propTypes = {
  TEXT: shape({
    TERM: string,
    DESC: string,
    SRC: string,
  }),
  TERM: shape({ className: string }),
  DESC: shape({ className: string }),
  SRC: shape({ className: string }),
};

// Title.defaultProps = { ...TITLE };

export default Title;
