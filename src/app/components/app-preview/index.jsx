import React from 'react';
import { string } from 'prop-types';
import Button from 'material-ui/Button';
import Actions from './Actions';
import Card from './Card';
import Media from './Media';
import Primary from './Primary';
import SubTitle from './SubTitle';
import Title from './Title';

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
