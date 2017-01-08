import React, { PropTypes } from 'react';

const RandomWiki = (props) => {
  const { children, ...args } = props;
  return (<a
    href="https://en.wikipedia.org/wiki/Special:Random" target="_blank"
    rel="noopener noreferrer"
    {...args}
  >{children}</a>);
};

RandomWiki.propTypes = {
  children: PropTypes.node,
};

RandomWiki.defaultProps = {
  children: 'Random Wiki Article',
};

export default RandomWiki;
