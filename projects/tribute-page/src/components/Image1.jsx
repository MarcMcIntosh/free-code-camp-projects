import React, { PropTypes, Component } from 'react';
import fetch from 'isomorphic-fetch';
import { IMAGE } from '../constants';

class IMG extends Component {
  constructor(props) {
    super(props);
    this.loading = false;
    this.error = null;
    this.img = null;
    this.src = props.src || props.config.src;
    this.state = {
      loading: false,
      error: false,
      img: '',
    };
  }
  componentWillMount() {
    if (this.img) { return; }
    this.loading = true;
    fetch(this.src).then((res) => {
      this.loading = false;
      if (res.ok) return res.blob();
      throw new Error(res.statusText);
    }).then((blob) => {
      this.img = blob;
    }).catch((e) => {
      this.error = e;
    });
  }
  getImg() {
    this.setState({ loading: true });
    fetch(this.src).then((res) => {
      if (res.ok) return res.blob();
      throw new Error(res.statusText);
    }).then(img => this.setState({
      loading: false, img,
    })).catch(error => this.setState({
      error, loading: false,
    }));
  }
  render() {
    const { children, config, ...props } = this.props;
    delete props.src; delete config.src;
    if (this.state.loading) {
      return (<div {...props}>{children || '...loading'}</div>);
    }
    if (this.state.error) {
      return (<div {...props}>{this.error}</div>);
    }
    return (<div {...props}><img
      role="presentation"
      src={(this.state.img) ? (window.URL.createObjectURL || window.webkitURL.createObjectURL
      )(this.state.img) : this.src}
    /></div>);
  }
}

const { node, string, shape } = PropTypes;
IMG.propTypes = {
  src: string,
  children: node,
  config: shape({ className: string, src: string }),
};

IMG.defaultProps = { config: IMAGE };

export default IMG;
