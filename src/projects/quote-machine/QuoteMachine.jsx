import React, { PureComponent } from 'react';
import { func, string, bool } from 'prop-types';
import { connect } from 'react-redux';
// import TweetButton from './components/TweetButton';
// import NextButton from './components/NextButton';
// import Display from './components/Display';
import { fetchQuote, handleError } from './actions';


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
    const address = `https://twitter/intent/tweet/text=${text}`;
    const opts = Object.keys(options).map(k => `${k}=${options[k]}`).join();
    window.open(address, 'intent', opts);
  }
  render() {
    const { classnames } = this.context;
    return (<div className={classnames('quote-machine')}>
      {this.props.error && (<p>this.props.error</p>)}
      {this.props.isFetching && (<p>loading...</p>)}
      {this.props.quote && (<p>{this.props.quote}</p>)}
      {this.props.author && (<p>{this.props.author}</p>)}
      <button type="button" title="Tweet" onClick={this.tweet}>Tweet</button>
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
