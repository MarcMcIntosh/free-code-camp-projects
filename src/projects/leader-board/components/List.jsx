import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array, string, func } from 'prop-types';
import { getData } from '../actions';
import Img from './Img';

const mapStateToProps = state => ({
  data: state[state.display],
  display: state.display,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(getData()),
});

class UserList extends Component {
  componentDidMount() {
    if (this.props.data.length === 0) {
      this.props.fetchData();
    }
  }
  render() {
    const { data, display } = this.props;
    return (<div className="users">{data.map((d, i) => (
      <div key={d.username} className="mdc-card mdc-card__horizontal-block">
        <section className="mdc-card__media">
          <Img src={d.img} className="mdc-card__media-item image" />
          #{i + 1}
        </section>
        <section className="mdc-card__primary">
          <h1 className="mdc-card__title">{d.username}</h1>
          <h2 className="mdc-card__subtitle">{d[display]} points</h2>
        </section>
      </div>))
    } </div>);
  }
}

UserList.propTypes = {
  data: array.isRequired,
  fetchData: func.isRequired,
  display: string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
