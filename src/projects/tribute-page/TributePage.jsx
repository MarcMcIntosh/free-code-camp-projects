import React, { PureComponent } from 'react';
import { func, array, string, bool } from 'prop-types';
import { connect } from 'react-redux';
import { setSrc, onLoad, onError } from './actions';
import Loader from './components/Loader';

const mapStateToProps = ({
  tributePage: { src, loading, loaded, error },
}) => ({ src, loading, loaded, error });

const mapDispatchToProps = dispatch => ({
  setSrc: payload => dispatch(setSrc(payload)),
  onLoad: () => dispatch(onLoad()),
  onError: error => dispatch(onError(error)),
});

class TributePage extends PureComponent {
  componentDidMount() {
    const base = `https://www.youtube.com/embed/${this.props.video}`;
    const args = 'autoplay=1&modestbranding=1&rel=0&iv_load_policy=3';
    const addr = (window.origin) ? `${base}?${args}&origin=${window.origin}` : `${base}?${args}`;
    if (this.video) {
      this.video.onload = this.props.onLoad;
      this.video.onerror = this.props.onError;
    }
    this.props.setSrc(addr);
  }
  render() {
    const { classnames } = this.context;
    return (<div className={classnames('tribute-page')}>
      <section className={classnames('tribute-page__primary')}>
        <h1 className={classnames('tribute-page__title')}>
          {this.props.title}
          {this.props.cite && (<cite>{this.props.cite}</cite>)}
        </h1>
        <h2 className={classnames('tribute-page__subtitle')}>
          <a className={classnames('tribute-page__link')} href={this.props.href} target="_blank" rel="noopener noreferrer">{this.props.href}</a>
        </h2>
        <hr />
      </section>
      <section className={classnames('tribute-page__media')}>
        <iframe
          className={classnames('tribute-page__video', {
            'tribute-page__video--hidden': this.props.loading || !this.props.loaded,
          })}
          title="tribute"
          height="360"
          width="640"
          src={this.props.src}
          ref={(elem) => { this.video = elem; }}
          sandbox="allow-scripts allow-same-origin"
        />
        {this.props.loading && (<Loader />) }
      </section>
      <section className={classnames('tribute-page__supporting-text')}>
        {this.props.error || (<ul className={classnames({ 'tribute-page__quotes': true, 'tribute-page__quotes--hidden': !this.props.loaded })}>
          {this.props.quotes.map((quote, index) => {
            const k = index;
            return (<li key={k} className={classnames('tribute-page__quote')}>{quote}</li>);
          })}</ul>)}
      </section>
    </div>);
  }
}

TributePage.propTypes = {
  src: string.isRequired,
  error: string.isRequired,
  setSrc: func.isRequired,
  onError: func.isRequired,
  onLoad: func.isRequired,
  loading: bool.isRequired,
  loaded: bool.isRequired,
  quotes: array,
  video: string,
  href: string,
  title: string,
  cite: string,
};

TributePage.defaultProps = {
  quotes: ['Never gonna give you up', 'Never gonna let you down', 'Never gonna run around and desert you', 'Never gonna make you cry', 'Never gonna say goodbye', 'Never gonna tell a lie and hurt you'],
  video: 'oHg5SJYRHA0',
  href: 'https://musicbrainz.org/artist/db92a151-1ac2-438b-bc43-b82e149ddd50',
  title: 'Best Act Ever',
  cite: 'MTV Europe Music Awards 2008',
};

TributePage.contextTypes = { classnames: func.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(TributePage);
