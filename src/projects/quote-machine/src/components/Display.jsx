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
      classnames,
      done,
    } = this.props;

    if (error) {
      return (<div className={(className) ? `${className} error` : 'error'}>{error}</div>);
    }
    return (<section className={className}>
      {(error) ? (<div className="error">{error}</div>) : false }
      {(isFetching) ? (<div className="loading" />) : false}
      {(done && quote) ? (<h1 className={classnames.quote}><q>{quote}</q></h1>) : false}
      {(done && author) ? (<h2 className={classnames.author}> -- {author}</h2>) : false}
    </section>);
  }
}

const { string, func, bool, shape } = PropTypes;
Display.propTypes = {
  className: string,
  classnames: shape({
    quote: string,
    author: string,
  }),
  author: string,
  quote: string,
  fetchQuote: func,
  error: string,
  isFetching: bool,
  done: bool,
};

Display.defaultProps = {
  classnames: {
    quote: 'quote',
    author: 'author',
  },
};

const mapStateToProps = (state) => {
  const { author, quote, error, isFetching, done } = state;
  return { author, quote, error, isFetching, done };
};

const mapDispatchToProps = dispatch => ({
  fetchQuote: () => dispatch(fetchQuote()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);