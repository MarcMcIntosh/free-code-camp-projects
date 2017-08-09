import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import '@material/card/mdc-card.scss';
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
    const { data, className, display } = this.props;
    return (<div className={className}>{data.map((d, i) => (
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


const { array, string, func } = PropTypes;

UserList.propTypes = {
  data: array.isRequired,
  className: string,
  fetchData: func.isRequired,
  display: string.isRequired,
};

UserList.defaultProps = {
  className: 'mdc-list mdc-list--avatar-list',
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
