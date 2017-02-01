import React, { PropTypes, Component } from 'react';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.handleLoad = this.handleLoad.bind(this);
  }
  handleLoad() {
    this.setState({ loaded: true });
  }
  render() {
    const { src, className, ...props } = this.props;
    return (<img
      {...props}
      role="presentation"
      className={this.state.loaded ? className : `${className} loading`}
      src={src}
      onLoad={this.handleLoad}
    />);
  }
}

Thumbnail.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};

export default Thumbnail;
