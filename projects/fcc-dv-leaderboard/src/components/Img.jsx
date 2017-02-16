import React, { PropTypes, PureComponent } from 'react';

class Img extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false,
      status: 'loading',
    };
  }
  handleLoad() { this.setState({ loaded: true }); }
  handleError() { this.setState({ error: true, status: 'error' }); }
  render() {
    const { className, alt, children, ...props } = this.props;
    const { loaded, error, status } = this.state;
    return (<img
      alt={alt}
      role="presentation"
      className={(loaded || error) ? `${className} ${status}` : className}
      onLoad={this.handleLoad}
      {...props}
    >{children}</img>);
  }
}

const { node, string } = PropTypes;
Img.propTypes = {
  className: string,
  children: node,
  alt: string,
};
Img.defaultProps = {
  className: '',
  children: false,
  alt: '',
};

export default Img;
