import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Button from '../Button';
import A from '../Href';
import Thumbnail from './Thumbnail';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: false,
    };
    this.displayInfo = this.displayInfo.bind(this);
  }
  displayInfo() {
    this.setState({
      displayInfo: !this.state.displayInfo,
    });
  }
  render() {
    const {
      name,
      description,
      path,
      preview,
      info,
      ...props
    } = this.props;

    return (<div className="mdc-card" {...props}>
      <div className="mdc-card__horizontal-block">
        <section className="mdc-card__primary">

          <h1 className="mdc-card__title mdc-card__title--large">{name}</h1>

          <h2 className="mdc-card__subtitle">{description}</h2>

        </section>

        <Link to={path}><Thumbnail
          className="mdc-card__media-item mdc-card__media-item--2x"
          src={preview}
        /></Link>

      </div>
      {this.state.displayInfo ? (<section className="mdc-card__supporting-text">

        <hr />

        <h2 className="mdc-card__subtitle">
          <small>Title: </small>
          {info.title}
        </h2>

        <h2 className="mdc-card__subtitle">
          <small>Objective: </small>
          {info.objective}{' '}
          <A src={info.example} text="example" />
        </h2>
        <section>
          <h2 className="mdc-card__subtitle">
            <small>User Stories</small>
          </h2>
          {info.stories.map((story, i) => (<h2
            className="mdc-card__subtitle"
            key={i}
          >{story}</h2>))}
        </section>

        <h2 className="mdc-card__subtitle">
          <small><A text="Source" src={info.challenge} /></small>
        </h2>

      </section>) : false
    }

      <section className="mdc-card__actions">
        <Link to={path}><Button
          className="mdc-button mdc-button--compact mdc-card__action"
        >View</Button></Link>
        <Button
          className="mdc-button mdc-button--compact mdc-card__action"
          onClick={this.displayInfo}
        >Info</Button>

      </section>
    </div>);
  }
}

const { string, node, shape, arrayOf } = PropTypes;
Item.propTypes = {
  path: string,
  preview: node,
  description: string,
  name: string,
  info: shape({
    title: string,
    objective: string,
    exapmle: string,
    challenge: string,
    stories: arrayOf(string),
  }),
};

export default Item;
