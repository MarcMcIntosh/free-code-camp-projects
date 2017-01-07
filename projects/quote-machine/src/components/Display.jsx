import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../actions';

class Display extends Component {
  componentWillMount() {
    if (!this.props.done) {
      this.props.fetchQuote();
    }
  }

  render() {
    const cn = this.props.classed;
    if (this.props.isFetching) {
      return (<div className={`${cn} loading`}>Loading</div>);
    }
    if (this.props.error) {
      return (<div className={`${cn} error`}>{this.props.error}</div>);
    }
    return (<div className={cn}>
      <q>{this.props.quote}</q> -- <small>{this.props.author}</small>
    </div>);
  }
}

Display.propTypes = {
  classed: PropTypes.string,
  author: PropTypes.string,
  quote: PropTypes.string,
  fetchQuote: PropTypes.func,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  done: PropTypes.bool,
};

Display.defaultProps = {
  classed: 'qm__display',
};

const mapStateToProps = (state) => {
  const { author, quote, error, isFetching, done } = state;
  return { author, quote, error, isFetching, done };
};

const mapDispatchToProps = dispatch => ({
  fetchQuote: () => dispatch(fetchQuote()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
