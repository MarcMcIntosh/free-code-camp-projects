import React, { PropTypes, Component } from 'react';
import fetch from 'isomorphic-fetch';
import { IMAGE } from '../constants';

class IMG extends Component {
  constructor(props) {
    super(props);
    this.loading = false;
    this.error = null;
    this.img = null;
    this.imgLoaded = this.imgLoaded.bind(this);
    this.state = {
      loaded: false,
      error: false,
      img: '',
    };
  }
  componentWillMount() {
    this.loading = true;
    fetch(this.props.src).then((res) => {
      this.loading = false;
      if (res.ok) return res.blob();
      throw new Error(res.statusText);
    }).then((blob) => {
      this.loading = false;
      this.img = blob;
    }).catch((e) => {
      this.loading = false;
      this.error = e;
    });
  }
  imgLoaded() {
    this.setState({ loaded: true });
  }
  render() {
    const { src, ...props } = this.props;
    return (<img
      {...props}
      role="presentation"
      src={(this.img && typeof window !== 'undefined') ? (window.URL.createObjectURL || window.webkitURL.createObjectURL
      )(this.img) : (this.src || src)}
      onLoad={this.imgLoaded}
    />);
  }
}

const { node, string } = PropTypes;
IMG.propTypes = {
  src: string,
  children: node,
  // config: shape({ className: string, src: string }),
};

IMG.defaultProps = { ...IMAGE };

export default IMG;
