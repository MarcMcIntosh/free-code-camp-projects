import React, { PureComponent } from 'react';
import { func, array, string } from 'prop-types';
import { connect } from 'react-redux';
import { setSrc } from './actions';

const mapStateToProps = ({
  tributePage: { src },
}) => ({ src });

const mapDispatchToProps = dispatch => ({
  setSrc: payload => dispatch(setSrc(payload)),
});

class TributePage extends PureComponent {
  componentDidMount() {
    const base = `https://www.youtube.com/embed/${this.props.video}`;
    const args = 'autoplay=1&modestbranding=1&rel=0&iv_load_policy=3';
    const addr = (window.origin) ? `${base}?${args}&origin=${window.origin}` : `${base}?${args}`;
    this.props.setSrc(addr);
  }
  render() {
    const { classnames } = this.context;
    return (<div className={classnames('tribute')}>
      <section className={classnames('tribute__primary')}>
        <h1 className={classnames('tribute__title')}>
          {this.props.title}
          {this.props.cite && (<cite>{this.props.cite}</cite>)}
        </h1>
        <a
          href={this.props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classnames('tribue__subtitle')}
        >{this.props.href}</a>
      </section>
      <section className={classnames('tribute__media')}>
        <iframe
          className={classnames('tribute__video')}
          title="tribute"
          height="360"
          width="640"
          rel="0"
          src={this.props.src}
        />
      </section>
      <section className={classnames('tribute__supportint-text')}>
        <ul className={classnames('tribute__quotes')}>{this.props.quotes.map((quote, index) => {
          const k = index;
          return (<li key={k} className={classnames('tribute__quote')}>{quote}</li>);
        })}</ul>
      </section>
    </div>);
  }
}

TributePage.propTypes = {
  src: string.isRequired,
  setSrc: func.isRequired,
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
