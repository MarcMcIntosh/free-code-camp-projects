import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone'

class CakeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      desc: this.props.desc,
      image: this.props.image,
      err: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.image) {
      this.setState({ err: 'Image Required' });
    } else {
      const { title, desc, image } = this.state;
      this.props.onSubmit({ title, desc, image });
    }
  }
  handleReset() {
    const { title, desc, image } = this.props;
    this.setState({ title, desc, image });
  }
  deleteImage() {
    if (this.canvas) { this.clearCanvas(); }
    this.setState({ image: '' });
  }
  clearCanvas() {
    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.width = 0;
    this.canvas.height = 0;
  }
  handleImage(files) {
    const mH = 350;
    const mW = 350;
    const file = files[files.length - 1];
    const img = new Image();
    const ctx = this.canvas.getContext('2d');
    img.onload = () => {
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
      ctx.drawImage(img, 0, 0, w, h);
      this.setState({
        err: '',
        image: this.canvas.toDataURL(),
      }, this.clearCanvas);
    };

    img.src = file.preview;
  }
  render() {
    return (<form
      className="mdc-card mdc-card--theme-dark bpc__cake"
      style={(this.state.image) ? ({
        backgroundImage: `url(${this.state.image})`,
      }) : {}}
      onSubmit={this.handleSubmit}
    >
    <Dropzone
      name="image"
      style={{}}
      ref={(drop) => { this.dropzone = drop; }}
      onDrop={(accepted, rejected) => {
        if (rejected) {
          this.setState({ err: 'Not a picture' });
        } else {
          this.handleImage(accepted);
        }
      }}
      accept="image/*"
      multiple={false}
    >{(!this.state.err) ? false : this.state.err}</Dropzone>
    <button
      type="button"
      title="Add A picture"
      className="mdc-button mdc-button--raised mdc-button--accent"
      onClick={() => this.dropzone.open()}
    >Upload Image</button>

      <section className="mdc-card__primary bpc__content">
        <input
          name="title"
          type="text"
          placeholder="cake"
          value={this.state.title}
          onChange={this.handleChange}
          required
        />
        <textarea
          value={this.state.desc}
          name="desc"
          onChange={this.handleChange}
        />
      </section>

      {/* <button
        className="mdc-button mdc-button--raised mdc-button--accent"
        onClick={() => this.setState({ image: '' })}
        title="Delete Image"
        disabled={(this.state.image) === ''}
      >Delete Image</button> */}

      <section className="mdc-card__actions bpc__content bpc__buttons">
        <input
          className="mdc-button mdc-button--theme-dark mdc-card__action"
          type="submit" value="Submit"
        />
        {(
          this.props.title !== this.state.title
          || this.props.desc !== this.state.desc
          || this.props.image !== this.state.image
        ) ? (
          <button
            className="mdc-button mdc-button--theme-dark mdc-card__action"
            onClick={this.handleReset}
            type="button" title="reset"
          >Reset</button>
        ) : (<button
          className="mdc-button mdc-button--theme-dark mdc-card__action"
          onClick={this.props.onCancel}
          type="button"
          title="Cancel"
        >Cancel</button>
      )}
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
