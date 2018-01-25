import React, { PureComponent } from 'react';
import { func, string, array } from 'prop-types';
import { connect } from 'react-redux';
import { onSubmit } from './actions';
import classnames from './styles';
import UrlForm from './components/Form';
import Results from './components/Results';

const mapStateToProps = ({ urlShortener: { results, error, fetching } }) => ({ results, error, fetching });

const mapDispatchToProps = dispatch => ({
  onSubmit: (address, values) => dispatch(onSubmit(address, values)),
});

class UrlShortener extends PureComponent {
  constructor(props) {
    super(props);
    this.classnames = classnames;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getChildContext() { return { classnames: this.classnames }; }
  handleSubmit(values) {
    const addr = this.props.submitUrl.replace(/\/?$/, '/');
    this.props.onSubmit(addr, values);
  }
  render() {
    return (<div className={this.classnames('url-shortener')}>
      <UrlForm onSubmit={this.handleSubmit} />
      <Results results={this.props.results} />
    </div>);
  }
}

UrlShortener.propTypes = {
  onSubmit: func.isRequired,
  submitUrl: string.isRequired,
  results: array.isRequired,
};

UrlShortener.defaultProps = {
  submitUrl: '/api/url-shortener',
};

UrlShortener.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(UrlShortener);
