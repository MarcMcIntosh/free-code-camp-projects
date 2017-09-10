import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { toggleDisplay } from '../actions';
import Button from './Button';


class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.props.setFilter(event.target.value);
  }
  render() {
    const { display, filters, className, classnames } = this.props;

    return (<div className={className}>{
      filters.map((f, index) => (<Button
        className={classnames.button}
        key={index}
        value={f}
        disabled={(display === f)} onClick={this.handleClick}
      >{f}</Button>))
    }</div>);
  }
}

const { array, func, string, shape } = PropTypes;
Header.propTypes = {
  filters: array,
  setFilter: func,
  display: string,
  className: string,
  classnames: shape({ button: string }),
};

Header.defaultProps = {
  classnames: { button: 'btn' },
};

const mapStateToProps = state => ({
  filters: state.filters,
  display: state.display,
});

const mapDispatchToProps = dispatch => ({
  setFilter: display => dispatch(toggleDisplay(display)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
