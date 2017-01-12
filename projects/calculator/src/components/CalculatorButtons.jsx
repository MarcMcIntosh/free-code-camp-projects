import React, { Component, PropTypes } from 'react';
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
    const { ...rest } = this.props;
    delete rest.onUserInput;
    return (<table {...rest}><tbody>
      <Tr>
        <Td><Button value="clear" onClick={this.handleClick}>AC</Button></Td>
        <Td><Button value="del" onClick={this.handleClick}>CE</Button></Td>
        <Td><Button value="%" onClick={this.handleClick}>Mod</Button></Td>
        <Td><Button value="/" onClick={this.handleClick}>&divide;</Button></Td>
      </Tr><Tr>
        <Td><Button value={7} onClick={this.handleClick}>9</Button></Td>
        <Td><Button value={8} onClick={this.handleClick}>8</Button></Td>
        <Td><Button value={9} onClick={this.handleClick}>7</Button></Td>
        <Td><Button value="*" onClick={this.handleClick}>&times;</Button></Td>
      </Tr><Tr>
        <Td><Button value={4} onClick={this.handleClick}>6</Button></Td>
        <Td><Button value={5} onClick={this.handleClick}>5</Button></Td>
        <Td><Button value={6} onClick={this.handleClick}>4</Button></Td>
        <Td><Button value="-" onClick={this.handleClick}>&minus;</Button></Td>
      </Tr><Tr>
        <Td><Button value={3} onClick={this.handleClick}>3</Button></Td>
        <Td><Button value={2} onClick={this.handleClick}>2</Button></Td>
        <Td><Button value={1} onClick={this.handleClick}>1</Button></Td>
        <Td><Button value="+" onClick={this.handleClick}>&#43;</Button></Td>
      </Tr><Tr>
        <Td><Button value="." onClick={this.handleClick}>&#46;</Button></Td>
        <Td><Button value={0} onClick={this.handleClick}>0</Button></Td>
        <Td><Button value="ans" onClick={this.handleClick}>Ans</Button></Td>
        <Td><Button value="=" onClick={this.handleClick}>&#61;</Button></Td>
      </Tr>
    </tbody></table>);
  }
}

Buttons.propTypes = {
  onUserInput: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onUserInput: val => dispatch(handleUserInput(val)),
});

export default connect(null, mapDispatchToProps)(Buttons);
