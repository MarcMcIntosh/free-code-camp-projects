import React from 'react';
import { string, func } from 'prop-types';
/* {
kind: 'customsearch#result',
title: 'Are LOLCats Making Us Smart? - The Atlantic',
htmlTitle: 'Are <b>LOLCats</b> Making Us Smart? - The Atlantic',
link: 'https://www.theatlantic.com/technology/archive/2012/05/are-lolcats-making-us-smart/256830/',
displayLink: 'www.theatlantic.com',
snippet: 'May 8, 2012 ... According to Miltner, "When it came to LOLCats, sharing and creating were often \ndifferent means to the same end: making meaningful connections with others." At \ntheir core LOLCats weren\'t about those funny captions, the weird grammar, or the \ncute kitties, but people employed those qualities in service of ...',
htmlSnippet: 'May 8, 2012 <b>...</b> According to Miltner, &quot;When it came to <b>LOLCats</b>, sharing and creating were often <br>\ndifferent means to the same end: making meaningful connections with others.&quot; At <br>\ntheir core <b>LOLCats</b> weren&#39;t about those funny captions, the weird grammar, or the <br>\ncute kitties, but people employed those qualities in service of&nbsp;...',
cacheId: 'S5C_CjGgDvcJ',
formattedUrl: 'https://www.theatlantic.com/technology/archive/...lolcats.../256830/',
htmlFormattedUrl: 'https://www.theatlantic.com/technology/archive/...<b>lolcats</b>.../256830/',
pagemap:{
  cse_thumbnail: [Array],
  metatags: [Array],
  sitenavigationelement: [Array],
  newsarticle: [Array],
  imageobject: [Array],
  person: [Array],
  organization: [Array],
  cse_image: [Array] } },
  cse_image[0].src contains image
    */
const Item = ({ title, link, src }, { classnames }) => (<a className={classnames('item')} href={link}><img className={classnames('image')} src={src} alt={title} title={title} /></a>);

Item.propTypes = { title: string.isRequired, link: string.isRequired, src: string.isRequired };

Item.contextTypes = { classnames: func.isRequired };

export default Item;
