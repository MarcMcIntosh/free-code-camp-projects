import React, { PropTypes } from 'react';
import Button from './Button';
import Row from './Row';
import Col from './Col';


const PlayerSelect = ({ onClick, ...props }) => {
  const handleClick = event => onClick((event.target.value === 'O'));
  return (<thead {...props}>
    <Row>
      <th colSpan="3">Select Player</th>
    </Row>
    <Row>
      <Col colSpan="3">
        <Button value="O" onClick={handleClick}>O</Button>
        <span />
        <Button value="X" onClick={handleClick}>X</Button>
      </Col>
    </Row>
  </thead>);
};

PlayerSelect.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlayerSelect;
