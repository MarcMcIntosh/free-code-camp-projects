import React, { Component } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
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
    const { classnames } = this.props;
    return (<table className={classnames('calculator__buttons')}><tbody>
      <tr>
        <td><Button value="clear" className={classnames('ac')} onClick={this.handleClick}>AC</Button></td>
        <td><Button value="del" className={classnames('ce')} onClick={this.handleClick}>CE</Button></td>
        <td><Button value="%" className={classnames('mod')} onClick={this.handleClick}>Mod</Button></td>
        <td><Button value="/" className={classnames('divide')} onClick={this.handleClick}>&divide;</Button></td>
      </tr><tr>
        <td><Button value={7} className={classnames('number')} onClick={this.handleClick}>9</Button></td>
        <td><Button value={8} className={classnames('number')} onClick={this.handleClick}>8</Button></td>
        <td><Button value={9} className={classnames('number')} onClick={this.handleClick}>7</Button></td>
        <td><Button value="*" className={classnames('times')} onClick={this.handleClick}>&times;</Button></td>
      </tr><tr>
        <td><Button value={4} className={classnames('number')} onClick={this.handleClick}>6</Button></td>
        <td><Button value={5} className={classnames('number')} onClick={this.handleClick}>5</Button></td>
        <td><Button value={6} className={classnames('number')} onClick={this.handleClick}>4</Button></td>
        <td><Button value="-" className={classnames('minus')} onClick={this.handleClick}>&minus;</Button></td>
      </tr><tr>
        <td><Button value={3} className={classnames('number')} onClick={this.handleClick}>3</Button></td>
        <td><Button value={2} className={classnames('number')} onClick={this.handleClick}>2</Button></td>
        <td><Button value={1} className={classnames('number')} onClick={this.handleClick}>1</Button></td>
        <td><Button value="+" className={classnames('plus')} onClick={this.handleClick}>&#43;</Button></td>
      </tr><tr>
        <td><Button value="." className={classnames('point')} onClick={this.handleClick}>&#46;</Button></td>
        <td><Button value={0} className={classnames('number')} onClick={this.handleClick}>0</Button></td>
        <td><Button value="ans" className={classnames('ans')} onClick={this.handleClick}>Ans</Button></td>
        <td><Button value="=" className={classnames('equals')} onClick={this.handleClick}>&#61;</Button></td>
      </tr>
    </tbody></table>);
  }
}

Buttons.propTypes = {
  onUserInput: func.isRequired,
  classnames: func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onUserInput: val => dispatch(handleUserInput(val)),
});

export default connect(null, mapDispatchToProps)(Buttons);
