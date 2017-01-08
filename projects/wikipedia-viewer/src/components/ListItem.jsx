import React, { PropTypes } from 'react';

const ListItem = (props) => {
  const { title, extract, pageid, ...args } = props;
  return (
    <div {...args}>
      <h1><a
        href={`https://en.wikipedia.org/?curid=${pageid}`}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex="0"
      >{title}</a></h1>
      <p>{extract}</p>
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  pageid: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]),
  extract: PropTypes.string,
};

export default ListItem;
