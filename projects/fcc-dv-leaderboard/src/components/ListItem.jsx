import React, { PropTypes } from 'react';
import Img from './Img';

/* "username":"sjames1958gm","img":"https://avatars.githubusercontent.com/u/4639625?v=3","alltime":5489,"recent":512,"lastUpdate":"2017-02-12T11:01:34.549Z" */
const ListItem = ({
  img,
  username,
  alltime,
  recent,
  lastUpdate,
  ...props
}) => {
  const date = new Date(lastUpdate);
  return (<li className="mdc-list-item" {...props}>
    <Img className="mdc-list-item__start-detail" src={img} />
    {username}|{alltime}|{recent}
    <time clasSName="mdc-list-item__end-detail" dateTime={lastUpdate}>{date.toLocaleString()}</time>
  </li>);
};

ListItem.propTypes = {
  img: PropTypes.string.isRequired,
  alltime: PropTypes.number.isRequired,
  recent: PropTypes.number.isRequired,
  lastUpdate: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ListItem.defaultProps = { className: 'mdc-list-item' };

export default ListItem;
