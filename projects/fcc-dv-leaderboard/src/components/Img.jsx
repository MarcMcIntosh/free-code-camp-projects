import React, { PropTypes, PureComponent } from 'react';

class Img extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false,
      status: 'loading',
    };
    this.handleLoad = this.handleLoad.bind(this);
    this.handleError = this.handleError.bind(this);
  }
  handleLoad() { this.setState({ loaded: true }); }
  handleError() { this.setState({ error: true, status: 'error' }); }
  render() {
    const { className, alt, ...props } = this.props;
    const { loaded, error, status } = this.state;
    return (<img
      alt={alt}
      role="presentation"
      className={(loaded || !error) ? className : `${className} ${status}`}
      onLoad={this.handleLoad}
      {...props}
    />);
  }
}

const { string } = PropTypes;
Img.propTypes = { className: string, alt: string };
Img.defaultProps = { className: '', alt: '' };

export default Img;
