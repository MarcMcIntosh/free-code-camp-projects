import React from 'react';
import Preview from '../components/app-preview';
import appUrls from '../../common/app-urls';
import placeholder from '../images/4-3.jpg';

const Gallary = () => (<div className="gallary">
  <h2>Gallary</h2>
  {/* <iframe title="Tribute Pages" src="/tribute-page" /> */}
  <Preview
    title={appUrls.tribute.title}
    url={appUrls.tribute.url}
    about={appUrls.tribute.about}
    challenge="https://www.freecodecamp.com/challenges/build-a-tribute-page"
    img={placeholder}
  />
</div>);

export default Gallary;
