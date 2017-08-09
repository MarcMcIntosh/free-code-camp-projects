import React, { PropTypes } from 'react';
import ReactModal from 'react-modal';

const Message = ({
  text,
  onClose,
}) => (<ReactModal
  isOpen={(text !== '')}
  onRequestClose={onClose}
  contentLabel="Game Message"
>
  <h4>{text}</h4>
  <button title="new game" onClick={onClose}>Play Again?</button>
  <ul>tips:
    <li>A weapon can be found on each level</li>
    <li>Turn on the lights by clicking the tourch in the top left</li>
  </ul>
</ReactModal>);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Message;
