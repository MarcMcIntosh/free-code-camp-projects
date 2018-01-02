import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array, string, func, oneOf, bool } from 'prop-types';
import classnames from './styles';
import { getData, setSort } from './actions';
import User from './components/User';
import Tab from './components/Tab';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

const mapStateToProps = ({
  leaderBoard: {
    isFetchingRecent,
    isFetchingAllTime,
    display,
    error,
    ...state
  },
}) => ({
  data: [].concat(state[display]),
  fetching: (isFetchingRecent !== isFetchingAllTime || isFetchingRecent || isFetchingAllTime),
  error,
  display,
});

const mapDispatchToProps = dispatch => ({
  sortBy: payload => dispatch(setSort(payload)),
  fetchData: () => dispatch(getData()),
});

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.clasnsnames = classnames;
  }
  getChildContext() { return { classnames: this.classnames }; }
  componentDidMount() { this.props.fetchData(); }

  render() {
    const { data, display, fetching, error } = this.props;
    return (<div className={this.classnames('leader-board')}>

      <nav className={this.classnames('leader-board__tab-bar')}>
        <Tab value="recent" active={(display === 'recent')} onClick={this.props.sortBy}>Recent</Tab>
        <Tab value="alltime" active={(display === 'alltime')} onClick={this.props.sortBy}>All Time</Tab>
        <span className={this.classnames('leader-board__tab-indicator')} />
      </nav>

      {error && !fetching && (<ErrorMessage onClick={this.props.fetchData}>{error}</ErrorMessage>)}

      <ul className={this.classnames('leader-board__users')}>
        {fetching && (<Loader />)}
        {data.map((d, i) => (<User key={d.username} name={d.username} src={d.img} points={d[display]} index={i + 1} />))}
      </ul>
    </div>);
  }
}

LeaderBoard.propTypes = {
  error: string.isRequired,
  fetching: bool.isRequired,
  data: array.isRequired,
  display: oneOf(['recent', 'alltime']).isRequired,
  fetchData: func.isRequired,
  sortBy: func.isRequired,
};

LeaderBoard.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);
