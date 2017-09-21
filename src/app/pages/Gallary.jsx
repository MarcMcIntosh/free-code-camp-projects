import React from 'react';
import Preview from '../components/app-preview';
import appUrls from '../../common/app-urls';
import placeholder from '../images/4-3.jpg';

const Gallary = () => (<div className="gallary">
  <h2>Gallary</h2>
  <Preview
    title={appUrls.tribute.title}
    url={appUrls.tribute.url}
    about={appUrls.tribute.about}
    challenge={appUrls.tribute.challenge}
    img={placeholder}
  />
  <Preview
    title={appUrls.barChart.title}
    url={appUrls.barChart.url}
    about={appUrls.barChart.about}
    challenge={appUrls.barChart.challenge}
    img={placeholder}
  />
</div>);

export default Gallary;
