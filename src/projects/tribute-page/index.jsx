import React from 'react';
import './src/styles';


const HodorImg = require('./src/images/Season_6_hodor_main.jpg');

const TributePage = () => (<div className="tribute-page">

  <h1 className="tribute-page__heading">Hodor</h1>

  <div className="tribute-page__content">

    <img className="tribute-page__image" src={HodorImg} role="presentation" alt="Hodor" />

    <div className="tribute__caption">

      <h3>Valar Morghulis</h3>

      <a href="http://gameofthrones.wikia.com/wiki/Hodor" target="_blank" rel="noopener noreferrer" className="tribute__link">Game of Thrones</a>

    </div>

  </div>

</div>);

export default TributePage;
