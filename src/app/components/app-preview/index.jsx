import React from 'react';
import { string } from 'prop-types';
import Card, { CardActions, CardMedia, CardTitle } from 'material-ui/Card';
import Button from 'material-ui/Button';
import styles from './styles.scss';

const Preview = ({
  title,
  challenge,
  about,
  src,
}) => {
  const SubTitle = (<a href={challenge} target="_blank" rel="noopener noreferrer">{challenge}</a>);
  const Title = (<CardTitle title={title} subtitle={SubTitle} />);
  const OverLay = (<section>
    <CardTitle title={Title} subtitle={SubTitle} />
    <CardActions>
      <Button href={src}>View</Button>
      <Button href={about}>About</Button>
    </CardActions>
  </section>);
  return (<Card>
    <CardMedia overlay={OverLay}>
      <iframe className={styles.preview} title={title} src={src} />
    </CardMedia>
  </Card>);
};

Preview.propTypes = {
  title: string.isRequired,
  src: string.isRequired,
  challenge: string.isRequired,
  about: string.isRequired,
};

export default Preview;
