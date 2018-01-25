import React from 'react';
import { string, func } from 'prop-types';

const Message = ({ text }, { classnames }) => (<h2 className={classnames('message')}>{text}</h2>);

Message.propTypes = { text: string.isRequired };

Message.contextTypes = { classnames: func.isRequired };

export default Message;
