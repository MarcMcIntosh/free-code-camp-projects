import React from 'react';
import Title from './Title';
import Image from './Image';
import Ref from './Link';
import Quotes from './Quotes';

const Container = () => (
  <div className="tribute__page">
    <Title />
    <Image />
    <Ref text="Game Of Thrones Wikia" />
    <Quotes />
  </div>
);

export default Container;
