import React from 'react';
import { string, func } from 'prop-types';

const Item = ({ title, link, src }, { classnames }) => (<a className={classnames('item')} href={link}><img className={classnames('image')} src={src} alt={title} title={title} /></a>);

Item.propTypes = { title: string.isRequired, link: string.isRequired, src: string.isRequired };

Item.contextTypes = { classnames: func.isRequired };

export default Item;
