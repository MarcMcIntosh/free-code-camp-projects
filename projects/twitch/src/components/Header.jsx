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
    const {
      display,
      filters,
      children,
      className,
    } = this.props;
    return (<div className={className}>
      {children}
      {filters.map((f, index) => (<Button
        className={(f === display) ? 'active' : 'inactive'}
        key={index}
        value={f}
        onClick={this.handleClick}
      >{f}</Button>))}
    </div>);
    /*
    return (<div {...rest}>{children}{
      filters.map(d => (<Filter
        key={d} display={d}
        className={(d === display) ? 'active' : 'inactive'}
        onClick={(event) => {
          event.preventDefault();
          return this.handleClick(d);
        }}
      />))
    }</div>);*/
  }
}

Header.propTypes = {
  filters: PropTypes.array,
  setFilter: PropTypes.func,
  display: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  filters: state.filters,
  display: state.display,
});

const mapDispatchToProps = dispatch => ({
  setFilter: display => dispatch(toggleDisplay(display)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
