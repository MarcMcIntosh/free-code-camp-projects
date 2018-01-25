import React, { PureComponent } from 'react';
import { func, string, array, bool } from 'prop-types';
import { connect } from 'react-redux';
import { rejected, submitting, received } from './actions';
import classnames from './styles';
import FileInput from './components/FileInput';
import List from './components/List';
import Loader from './components/Loader';

const mapStateToProps = ({ fileSize: { results, fetching, error } }) => ({ results, fetching, error });

const mapDispatchToProps = dispatch => ({
  rejected: payload => dispatch(rejected(payload)),
  submitting: () => dispatch(submitting()),
  received: payload => dispatch(received(payload)),
});

class FileSize extends PureComponent {
  constructor() {
    super();
    this.classnames = classnames;
    this.handleDrop = this.handleDrop.bind(this);
  }
  getChildContext() { return { classnames: this.classnames }; }
  handleDrop(files) {
    const body = new FormData();
    files.forEach(file => body.append(file.name, file));
    this.props.submitting();
    fetch(this.props.api, {
      method: 'POST',
      body,
      headers: { Accept: 'application/json' },
    }).then((res) => {
      if (!res.ok) { throw new Error(res.statusText); }
      return res.json();
    }).then(this.props.received).catch(error => this.props.rejected(error.message));
  }

  render() {
    return (<div className={this.classnames('card')}>
      {this.props.fetching && (<Loader />)}
      <div className={this.classnames('file-size')}>
        <FileInput onDrop={this.handleDrop} />
        {this.props.results.length > 0 && (<hr className={this.classnames('divider')} />)}
        <List results={this.props.results} />
      </div>
    </div>);
  }
}

FileSize.propTypes = {
  received: func.isRequired,
  rejected: func.isRequired,
  submitting: func.isRequired,
  api: string,
  fetching: bool.isRequired,
  results: array.isRequired,
};

FileSize.defaultProps = { api: '/api/file-size' };
FileSize.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(FileSize);
