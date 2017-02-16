import React, { PropTypes, cloneElement, Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

const mapStateToProps = state => ({
  data: {
    recent: state.recent,
    alltime: state.alltime,
  },
  ascending: state.ascending,
  display: state.display,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getData()),
});

function sortUsersBy(obj, arr, acc) {
  return obj[arr].sort((a, b) => (
    (acc) ? a[arr] < b[arr] : a[arr] > b[arr]
  ));
}

class UserList extends Component {
  componentDidMount() {
    if (this.props.data.alltime.length === 0
      || this.props.data.recent.length === 0
    ) {
      this.props.fetchData();
    }
  }
  render() {
    const { data, ascending, display, children } = this.props;
    return (<ul className={this.props.className}>{
      sortUsersBy(data, display, ascending).map((user, index) => cloneElement(children, {
        key: index,
        ...user,
      }),
    )}
    </ul>);
  }
}


const { shape, array, bool, oneOf, string, node, func } = PropTypes;
UserList.propTypes = {
  data: shape({
    recent: array.isRequired,
    alltime: array.isRequired,
  }).isRequired,
  ascending: bool.isRequired,
  display: oneOf(['alltime', 'recent']).isRequired,
  className: string,
  children: node.isRequired,
  fetchData: func.isRequired,
};

UserList.defaultProps = {
  className: 'mdc-list mdc-list--avatar-list',
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
