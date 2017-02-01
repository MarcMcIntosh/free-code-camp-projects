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
    const {
      className,
      author,
      quote,
      error,
      isFetching,
    } = this.props;
    if (isFetching) {
      return (<div className={(className) ? `${className} loading` : 'loading'}>Loading</div>);
    } else if (error) {
      return (<div className={(className) ? `${className} error` : 'error'}>{error}</div>);
    }
    return (<div className={className}>
      <q>{quote}</q> -- <small>{author}</small>
    </div>);
  }
}

const { string, func, bool } = PropTypes;
Display.propTypes = {
  className: string,
  author: string,
  quote: string,
  fetchQuote: func,
  error: string,
  isFetching: bool,
  done: bool,
};

const mapStateToProps = (state) => {
  const { author, quote, error, isFetching, done } = state;
  return { author, quote, error, isFetching, done };
};

const mapDispatchToProps = dispatch => ({
  fetchQuote: () => dispatch(fetchQuote()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
