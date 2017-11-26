import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array, string, func, oneOfType, instanceOf, oneOf, bool } from 'prop-types';
import { getData, setSort } from './actions';

const mapStateToProps = ({ leaderBoard: { recent, alltime, data, errorRecent, errorAllTime, isFetchingRecent, isFetchingAllTime, display, ascending } }) => ({ recent, alltime, data, errorRecent, errorAllTime, isFetchingRecent, isFetchingAllTime, display, ascending });

const mapDispatchToProps = dispatch => ({
  sortBy: event => dispatch(setSort(event.target.value)),
  fetchData: () => dispatch(getData()),
});

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { this.props.fetchData(); }
  render() {
    const { props, context: { classnames } } = this; return (<div {...props} className={classnames('leader-board')}>contenct</div>);
  }
}

LeaderBoard.propTypes = {
  recent: array.isRequired,
  alltime: array.isRequired,
  data: array.isRequired,
  isFetchingRecent: bool.isRequired,
  isFetchingAllTime: bool.isRequired,
  ascending: bool.isRequired,
  display: oneOf(['recent', 'alltime']).isRequired,
  errorRecent: oneOfType([instanceOf(Error), string]).isRequired,
  errorAllTime: oneOfType([instanceOf(Error), string]).isRequired,
  fetchData: func.isRequired,
  sortBy: func.isRequired,
};

LeaderBoard.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);
