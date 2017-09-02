import React from 'react';
import Preview from '../components/app-preview';

const Gallary = () => (<div className="gallary">
  <h2>Gallary</h2>
  {/* <iframe title="Tribute Pages" src="/tribute-page" /> */}
  <Preview
    title="Tribute Page"
    src="/tribute-page"
    about="/tribute-page/about"
    challenge="https://www.freecodecamp.com/challenges/build-a-tribute-page"
  />
</div>);

export default Gallary;
