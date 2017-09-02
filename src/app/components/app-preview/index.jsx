import React from 'react';
import { string, node } from 'prop-types';
import Button from 'material-ui/Button';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const Card = ({ children, ...props }) => (<div
  className={cx('card')}
  {...props}
>{children}</div>);

Card.propTypes = { children: node.isRequired };

const Primary = ({
  children,
  ...props
}) => (<div className={cx('mdc-card__primary')} {...props}>{children}</div>);

Primary.propTypes = { children: node.isRequired };

const Title = ({
  children,
  ...props
}) => (<h1 className={cx({ 'mdc-card__title': true, 'mdc-card__title--large': true })} {...props}>{children}</h1>);

Title.propTypes = { children: node.isRequired };

const SubTitle = ({ children, ...props }) => (<h2 className={cx('mdc-card__subtitle')} {...props}>{children}</h2>);

SubTitle.propTypes = { children: node.isRequired };

const Actions = ({ children, ...props }) => (<div className={cx('mdc-card__actions')} {...props}>{children}</div>);

Actions.propTypes = { children: node.isRequired };

const Media = ({
  title,
  src,
  ...props
}) => (<img alt={title} src={src} className={cx('media')} {...props} />);

Media.propTypes = {
  title: string.isRequired,
  src: string.isRequired,
};

const Preview = ({
  title,
  challenge,
  about,
  url,
  img,
}) => (<Card>
  <Primary>
    <Title>{title}</Title>
    <SubTitle><a href={challenge} target="_blank" rel="noopener noreferrer">Spec Sheet</a></SubTitle>
  </Primary>
  <Media title={title} src={img} />
  <Actions>
    <Button href={url}>View</Button>
    <Button href={about}>About</Button>
  </Actions>
</Card>);


Preview.propTypes = {
  title: string.isRequired,
  url: string.isRequired,
  challenge: string.isRequired,
  about: string.isRequired,
  img: string.isRequired,
};

export default Preview;
