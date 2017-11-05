import React from 'react';
import { func } from 'prop-types';
import Cell from './Cell';

const Buttons = ({ onClick }, { classnames }) => (<table className={classnames('calculator__buttons')}>
  <tbody>
    <tr>
      <Cell value="clear" className={classnames('calculator__button', 'calculator__button--ac')} onClick={onClick}>AC</Cell>
      <Cell value="del" className={classnames('calculator__button', 'calculator__button--ce')} onClick={onClick}>CE</Cell>
      <Cell value="%" className={classnames('calculator__button', 'calculator__button--mod')} onClick={onClick}>Mod</Cell>
      <Cell value="/" className={classnames('calculator__button', 'calculator__button--divide')} onClick={onClick}>&divide;</Cell>
    </tr><tr>
      <Cell value={7} className={classnames('calculator__button', 'calculator__button--number')} onClick={onClick}>9</Cell>
      <Cell value={8} className={classnames('calculator__button', 'calculator__button--number')} onClick={onClick}>8</Cell>
      <Cell value={9} className={classnames('calculator__button', 'calculator__button--number')} onClick={onClick}>7</Cell>
      <Cell value="*" className={classnames('calculator__button', 'calculator__button--times')} onClick={onClick}>&times;</Cell>
    </tr><tr>
      <Cell value={4} className={classnames('calculator__button', 'calculator__button--number')} onClick={onClick}>6</Cell>
      <Cell value={5} className={classnames('calculator__button', 'calculator__button--number')} onClick={onClick}>5</Cell>
      <Cell value={6} className={classnames('calculator__button', 'calculator__button--number')} onClick={onClick}>4</Cell>
      <Cell value="-" className={classnames('calculator__button', 'calculator__button--minus')} onClick={onClick}>&minus;</Cell>
    </tr><tr>
      <Cell value={3} className={classnames('calculator__button', 'calculator__button--number')} onClick={onClick}>3</Cell>
      <Cell value={2} className={classnames('calculator__button', 'calculator__button--number')} onClick={onClick}>2</Cell>
      <Cell value={1} className={classnames('calculator__button', 'calculator__button--number')} onClick={onClick}>1</Cell>
      <Cell value="+" className={classnames('calculator__button', 'calculator__button--plus')} onClick={onClick}>&#43;</Cell>
    </tr><tr>
      <Cell value="." className={classnames('calculator__button', 'calculator__button--point')} onClick={onClick}>&#46;</Cell>
      <Cell value={0} className={classnames('calculator__button', 'calculator__button--number')} onClick={onClick}>0</Cell>
      <Cell value="ans" className={classnames('calculator__button', 'calculator__button--ans')} onClick={onClick}>Ans</Cell>
      <Cell value="=" className={classnames('calculator__button', 'calculator__button--equals')} onClick={onClick}>&#61;</Cell>
    </tr>
  </tbody>
</table>);

Buttons.propTypes = { onClick: func.isRequired };

Buttons.contextTypes = { classnames: func.isRequired };

export default Buttons;
