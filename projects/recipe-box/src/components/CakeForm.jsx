import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CakeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      desc: this.props.desc,
      image: this.props.image,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleImage(event) {
    event.preventDefault();
    const f = this.file.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.drawImage(reader.result);
    };
    reader.readAsDataURL(f);
  }
  deleteImage() {
    this.file.value = '';
    this.file.type = '';
    this.file.type = 'file';
    if (this.canvas) { this.clearCanvas(); }
    this.setState({ image: '' });
  }
  clearCanvas() {
    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.width = 0;
    this.canvas.height = 0;
  }
  drawImage(data) {
    const mH = 350;
    const mW = 350;
    const img = new Image();
    img.src = data;
    let w = img.width;
    let h = img.height;
    if (w > h && w > mW) {
      h *= mW / w;
      w = mW;
    } else if (h > mH) {
      w *= mH / h;
      h = mH;
    }
    this.canvas.width = w;
    this.canvas.height = h;
    const ctx = this.canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, w, h);
    this.setState({
      image: this.canvas.toDataURL(),
    }, this.clearCanvas);
  }

  handleReset(event) {
    event.preventDefault();
    const { title, desc, image } = this.props;
    this.setState({ title, desc, image });
  }
  render() {
    return (<form
      className="mdc-card mdc-button--theme-dark bpc__form"
      style={(this.state.image) ? ({
        backgroundImage: this.state.image,
      }) : {}}
      onSubmit={this.handleSubmit}
    >
      <label htmlFor="title">Name of Cake</label>
      <input
        name="title"
        type="text"
        placeholder="cake"
        value={this.state.title}
        onChange={this.handleChange}
        required
      />
      <label htmlFor="desc">Description</label>
      <textarea value={this.state.desc} name="desc" onChange={this.handleChange} />
      <input type="file" />
      <section>
        Add an Image
        <input
          name="image"
          type="file"
          accept="image/*"
          title="Upload a picture"
          onChange={this.handleImage}
          ref={(file) => { this.file = file; }}
          disabled={(this.state.image !== '')}
        >Upload</input>
        <button
          onClick={this.deleteImage}
          title="Delete Image"
          disabled={(this.state.image) === ''}
        >Delete</button>
      </section>
      <canvas style={{ display: 'none' }} width="0" height="0" ref={(canvas) => { this.canvas = canvas; }} />
    </form>);
  }
}

CakeForm.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

CakeForm.defaultProps = { title: '', desc: '', image: '' };

export default CakeForm;
