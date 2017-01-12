import React, { PropTypes, Component } from 'react';
import { connect } from 'redux';
import { toggleDisplay } from '../actions';
import { Filter } from './Filter';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(d) {
    this.props.setFilter(d);
  }
  render() {
    const { display, filters, children, ...rest } = this.props;
    delete rest.setFilter;
    return (<div {...rest}>{children}{
      filters.map(d => (<Filter
        key={d} display={d}
        className={(d === display) ? 'active' : 'inactive'}
        onClick={(event) => {
          event.preventDefault();
          return this.handleClick(d);
        }}
      />))
    }</div>);
  }
}

Header.propTypes = {
  filters: PropTypes.array,
  setFilter: PropTypes.func,
  display: PropTypes.string,
  children: PropTypes.node,
};

const mapStateToProps = state => ({
  filters: state.filters,
  display: state.display,
});

const mapDispatchToProps = dispatch => ({
  setFilter: display => dispatch(toggleDisplay(display)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
