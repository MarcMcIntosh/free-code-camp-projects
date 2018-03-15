import React, { PureComponent } from 'react';
import {
  // bool,
  func,
  shape,
  string,
  array,
} from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { interpolateSpectral } from 'd3-scale-chromatic';
import { Doughnut } from 'react-chartjs';
import { getResults } from '../actions';


const mapStateToProps = ({
  votingApp: {
    fetching,
    results: { _id, question, answers },
  },
}) => ({ fetching, _id, question, answers });

const mapDispatchToProps = (dispatch, {
  match: { params: { id } },
}) => ({
  fetchData: () => dispatch(getResults(id)),
});

class ResultsPage extends PureComponent {
  componentDidMount() { this.props.fetchData(); }
  render() {
    const { question, answers } = this.props;
    const { classnames, links: { view } } = this.context;
    const data = answers.map((d, i, a) => {
      const label = d.answer;
      const color = interpolateSpectral(i / (a.length - 1));
      const value = d.votes;
      return { label, color, value };
    });
    return (<div className={classnames('card')}>
      <section className={classnames('card__primary')}>
        <h1 className={classnames('card__title')}>Results</h1>
        <Link className={classnames('card__subtitle')} to={view + '/' + this.props._id}>{question}</Link>
      </section>
      <section className={classnames('card__media', 'chart')}>
        <Doughnut data={data} width="300" height="300" />
      </section>
    </div>);
  }
}

ResultsPage.propTypes = {
  // fetching: bool.isRequired,
  fetchData: func.isRequired,
  _id: string.isRequired,
  question: string.isRequired,
  answers: array.isRequired,
};

ResultsPage.contextTypes = {
  classnames: func.isRequired,
  links: shape({ view: string.isRequired }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
