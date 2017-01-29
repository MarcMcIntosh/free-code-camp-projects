import React, { PropTypes, Component } from 'react';
import fetch from 'isomorphic-fetch';
import { IMAGE } from '../constants';

class IMG extends Component {
  constructor(props) {
    super(props);
    this.img = null;
    this.src = props.src || props.config.src;
    this.state = {
      loading: false,
      error: false,
      img: '',
    };
  }
  componentWillMount() {
    if (this.state.img) { return; }
    this.setState({ loading: true }, this.getImg());
  }
  getImg() {
    fetch(this.src).then((res) => {
      if (res.ok) return res.blob();
      throw new Error(res.statusTest);
    }).then(img => this.setState({
      loading: false, img,
    })).catch(error => this.setState({
      error, loading: false,
    }));
  }
  render() {
    const {
      children,
      config,
      ...props
    } = this.props;
    delete config.src; delete props.src;
    return (<img
      role="presentation"
      {...config} {...props}
      src={(
        this.state.img && window
      ) ? (window.URL || window.webkitURL).createObjectUrl(this.state.img) : this.src}
    >{(
      this.state.loading
    ) ? children || '...loading' : this.state.error}
    </img>);
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
