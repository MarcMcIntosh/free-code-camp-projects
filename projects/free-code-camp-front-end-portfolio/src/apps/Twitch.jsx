import React from 'react';
import './Twitch.scss';
import Container, {
  UserList,
  Header,
  task,
} from '../../lib/twitch';

const Twitch = () => (
  <Container className="twitch-tv">
    <Header />
    <UserList />
  </Container>
);

export default Twitch;
export { task };
