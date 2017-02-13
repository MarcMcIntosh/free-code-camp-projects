import React, { PropTypes, Component } from 'react';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false, loaded: false };
    this.handleLoad = this.handleLoad.bind(this);
    this.handleError = this.handleError.bind(this);
  }
  handleLoad() {
    this.setState({ loaded: true });
  }
  handleError() {
    this.setState({ error: true });
  }
  render() {
    const { src, className, ...props } = this.props;
    return (<img
      {...props}
      role="presentation"
      alt=""
      className={this.state.loaded ? className : `${className} loading`}
      src={(this.state.error) ? '' : src}
      onLoad={this.handleLoad}
      onError={this.handleError}
    />);
  }
}

Thumbnail.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

export default Thumbnail;
