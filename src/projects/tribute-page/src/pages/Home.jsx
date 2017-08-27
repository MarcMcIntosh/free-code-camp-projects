import React from 'react';
import HodorImg from '../components/HodorImg';

const Home = () => (<div>
  <h1>Hodor</h1>
  <figure>
    <HodorImg />
    <figcaption>
      <a
        href="http://gameofthrones.wikia.com/wiki/Hodor"
        target="_blank"
        rel="noopener noreferrer"
      >Game of Throne wiki</a>
    </figcaption>
  </figure>
</div>);

export default Home;
