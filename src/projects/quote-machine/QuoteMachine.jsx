import React, { PureComponent } from 'react';
import { func, string, bool } from 'prop-types';
import { connect } from 'react-redux';
import classnames from './styles';
import { fetchQuote, handleError } from './actions';
import Loader from './components/Loader';

const mapStateToProps = ({ quoteMachine: { error, isFetching, author, quote } }) => ({ error, isFetching, author, quote });

const mapDispatchToProps = dispatch => ({
  fetchQuote: () => dispatch(fetchQuote()),
  handleError: payload => dispatch(handleError(payload)),
});

class QuoteMachine extends PureComponent {
  constructor(props) {
    super(props);
    this.tweet = this.tweet.bind(this);
    this.classnames = classnames;
  }
  getChildContext() { return { classnames: this.classnames }; }
  componentDidMount() { this.props.fetchQuote(); }

  tweet(event) {
    /* bail if no quote */
    if (event.defaultPrevented || !this.props.quote || !this.props.author) { return; }

    const message = `${this.props.quote} -- ${this.props.author}`;

    /* bail if to long to tweet */
    if (message.length > 140) { this.props.handleError('Quote to long'); return; }

    /* prepair to tweet */
    const { screenX, screenY } = event;
    const width = 550;
    const height = 420;
    const left = Math.round((screenX / 2) - (width / 2));
    const top = (screenY > height) ? Math.round((screenY / 2) - (height / 2)) : 0;
    const options = { scrollbar: 'yes', resizable: 'yes', toolbar: 'no', location: 'yes', width, height, left, top };
    const address = `https://twitter.com/intent/tweet?text=${message}`;
    const opts = Object.keys(options).map(k => `${k}=${options[k]}`).join();
    window.open(address, 'intent', opts);
  }
  render() {
    return (<div className={this.classnames('quote-machine')}>
      <div className={this.classnames('quote-machine__primary')}>
        <i className={this.classnames('quote-machine__quote')}>
          &quot;{this.props.quote}&quot;
        </i>
        <h2 className={this.classnames('quote-machine__author')}>
          &nbsp;&nbsp;--&nbsp;&nbsp;{this.props.author}
        </h2>
        {this.props.isFetching ? (<Loader />) : (<hr />)}
      </div>
      {this.props.error && (<div className={this.classnames('quote-machine__error')}>{this.props.error}</div>)}
      <div className={this.classnames('quote-machine__actions')}>
        <button disabled={this.props.isFetching} type="button" title="Next Quote" tabIndex="0" className={this.classnames('quote-machine__button')} onClick={this.props.fetchQuote}>next</button>
        <button disabled={(!this.props.quote || !this.props.author || this.props.isFetching)} type="button" title="Tweet" tabIndex="0" className={this.classnames('quote-machine__button')} onClick={this.tweet}>Tweet</button>
      </div>
    </div>);
  }
}

QuoteMachine.propTypes = {
  fetchQuote: func.isRequired,
  handleError: func.isRequired,
  error: string.isRequired,
  author: string.isRequired,
  quote: string.isRequired,
  isFetching: bool.isRequired,
};

QuoteMachine.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(QuoteMachine);
