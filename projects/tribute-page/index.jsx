import React, { PropTypes } from 'react';
import CONF from './src/constants';
import task from './task';
import Quotes from './src/components/Quotes';
import Image from './src/components/Image';
import Quote from './src/components/Title';

const Tribute = ({
  config,
  ...props
}) => {
  const { TITLE, IMAGE, QUOTES } = config;
  return (<div {...props}>
    <Quote {...TITLE} />
    <Image config={IMAGE} />
    <Quotes config={QUOTES} />
  </div>);
};

const { shape, string, array } = PropTypes;
Tribute.propTypes = {
  config: shape({
    TITLE: shape({
      TERM: shape({ className: string }),
      DESC: shape({ className: string }),
      SRC: shape({ className: string }),
    }),
    IMAGE: shape({
      className: string,
      src: string,
    }),
    QUOTES: shape({
      list: array,
      className: string,
      QUOTE: shape({ className: string }),
    }),
  }),
};

Tribute.defaultProps = { config: CONF };

export default Tribute;
export {
  task,
  CONF as config,
  Quotes,
  Image,
  Quote,
};
