import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import Tr from './Tr';
import Td from './Td';
import Button from './Button';
import { handleUserInput } from '../actions';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    return this.props.onUserInput(event.target.value);
  }
  render() {
    return (<table className={this.props.cx('calculator__buttons')}><tbody>
      <Tr>
        <Td><Button value="clear" className={this.props.cx('ac')} onClick={this.handleClick}>AC</Button></Td>
        <Td><Button value="del" className={this.props.cx('ce')} onClick={this.handleClick}>CE</Button></Td>
        <Td><Button value="%" className={this.props.cx('mod')} onClick={this.handleClick}>Mod</Button></Td>
        <Td><Button value="/" className={this.props.cx('divide')} onClick={this.handleClick}>&divide;</Button></Td>
      </Tr><Tr>
        <Td><Button value={7} className={this.props.cx('number')} onClick={this.handleClick}>9</Button></Td>
        <Td><Button value={8} className={this.props.cx('number')} onClick={this.handleClick}>8</Button></Td>
        <Td><Button value={9} className={this.props.cx('number')} onClick={this.handleClick}>7</Button></Td>
        <Td><Button value="*" className={this.props.cx('times')} onClick={this.handleClick}>&times;</Button></Td>
      </Tr><Tr>
        <Td><Button value={4} className={this.props.cx('number')} onClick={this.handleClick}>6</Button></Td>
        <Td><Button value={5} className={this.props.cx('number')} onClick={this.handleClick}>5</Button></Td>
        <Td><Button value={6} className={this.props.cx('number')} onClick={this.handleClick}>4</Button></Td>
        <Td><Button value="-" className={this.props.cx('minus')} onClick={this.handleClick}>&minus;</Button></Td>
      </Tr><Tr>
        <Td><Button value={3} className={this.props.cx('number')} onClick={this.handleClick}>3</Button></Td>
        <Td><Button value={2} className={this.props.cx('number')} onClick={this.handleClick}>2</Button></Td>
        <Td><Button value={1} className={this.props.cx('number')} onClick={this.handleClick}>1</Button></Td>
        <Td><Button value="+" className={this.props.cx('plus')} onClick={this.handleClick}>&#43;</Button></Td>
      </Tr><Tr>
        <Td><Button value="." className={this.props.cx('point')} onClick={this.handleClick}>&#46;</Button></Td>
        <Td><Button value={0} className={this.props.cx('number')} onClick={this.handleClick}>0</Button></Td>
        <Td><Button value="ans" className={this.props.cx('ans')} onClick={this.handleClick}>Ans</Button></Td>
        <Td><Button value="=" className={this.props.cx('equals')} onClick={this.handleClick}>&#61;</Button></Td>
      </Tr>
    </tbody></table>);
  }
}

Buttons.propTypes = {
  onUserInput: func.isRequired,
  cx: func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onUserInput: val => dispatch(handleUserInput(val)),
});

export default connect(null, mapDispatchToProps)(Buttons);
