import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../actions';

class Display extends Component {
  componentWillMount() {
    if (!this.props.author || this.props.quote) {
      this.props.fetchQuote();
    }
  }

  render() {
    const cn = this.props.classed;
    if (this.props.isLoading) {
      return (<div className={`${cn} loading`}>Loading</div>);
    }
    if (this.props.error) {
      return (<div className={`${cn} error`}>{this.props.error}</div>);
    }
    return (
      <div className={cn}>
        <q>{this.props.quote}</q>
        <bdo dir="rtl">-- {this.props.author}</bdo>
      </div>
    );
  }
}

Display.propTypes = {
  classed: PropTypes.string,
  author: PropTypes.string,
  quote: PropTypes.string,
  fetchQuote: PropTypes.func,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

Display.defaultProps = {
  classed: 'qm__display',
};

const mapStateToProps = state => ({
  ...state.author,
  ...state.quote,
  ...state.error,
  ...state.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchQuote: () => dispatch(fetchQuote()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
