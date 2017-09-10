import React, { PropTypes } from 'react';

const ListItem = (props) => {
  const { pageid, title, extract, ...args } = props;
  return (<div {...args}>
    <h3><a
      href={`https://en.wikipedia.org/?curid=${pageid}`}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex="0"
    >{title}</a></h3>
    <p>{extract}</p>
  </div>);
};

ListItem.propTypes = {
  title: PropTypes.string,
  pageid: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]),
  extract: PropTypes.string,
};

export default ListItem;
