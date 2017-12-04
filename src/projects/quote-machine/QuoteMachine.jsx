import React, { PureComponent } from 'react';
import { func, string, bool } from 'prop-types';
import { connect } from 'react-redux';
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
  }
  componentDidMount() {
    this.props.fetchQuote();
  }

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
    const text = encodeURIComponent(message);
    const address = `https://twitter.com/intent/tweet/text=${text}`;
    const opts = Object.keys(options).map(k => `${k}=${options[k]}`).join();
    window.open(address, 'intent', opts);
  }
  render() {
    const { classnames } = this.context;
    return (<div className={classnames('quote-machine')}>
      {this.props.isFetching && (<Loader />)}
      <div className={classnames('quote-machine__primary')}>
        <h1 className={classnames('quote-machine__quote')}>
          <i>{this.props.quote}</i>
        </h1>
        <h2 className={classnames('quote-machine__author')}>{this.props.author}</h2>
      </div>
      {this.props.error && (<p>this.props.error</p>)}
      <div className={classnames('quote-machine__actions')}>
        <button disabled={this.props.isFetching} type="button" title="Next Quote" tabIndex="0" className={classnames('quote-machine__button')} onClick={this.props.fetchQuote}>next</button>
        <button disabled={!(this.props.quote && this.props.author && this.props.isFetching)} type="button" title="Tweet" tabIndex="0" className={classnames('quote-machine__button')} onClick={this.tweet}>Tweet</button>
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

QuoteMachine.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(QuoteMachine);
