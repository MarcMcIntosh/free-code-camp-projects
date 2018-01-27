import React, { PureComponent } from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
import classnames from './styles';
import Preview from './components/Preview';

const mapStateToProps = ({ portfolio: { apps } }) => ({ apps });

const mapDispatchToProps = () => ({});

class Portfolio extends PureComponent {
  constructor() {
    super();
    this.classnames = classnames;
  }
  getChildContext() {
    return { classnames: this.classnames };
  }
  render() {
    return (<div className={this.classnames('grid')}>
      <div className={this.classnames('grid__inner')}>
        {Object.entries(this.props.apps).map(([k, { title, challenge, url, media }]) => (<div key={k} className={this.classnames('grid__cell')}>
          <Preview title={title} challenge={challenge} url={url} media={media} />
        </div>))}
      </div>
    </div>);
  }
}

Portfolio.propTypes = { apps: object.isRequired };

Portfolio.childContextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
export reducer from './reducer';
