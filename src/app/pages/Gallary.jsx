import React from 'react';
import Preview from '../components/Preview';
import appUrls from '../../common/app-urls';
import placeholder from '../images/4-3.jpg';

const Gallary = () => (<div className="gallary">
  <h2>Gallary</h2>
  <Preview
    title={appUrls.tribute.title}
    url={appUrls.tribute.url}
    challenge={appUrls.tribute.challenge}
    media={placeholder}
  />
  <Preview
    title={appUrls.barChart.title}
    url={appUrls.barChart.url}
    challenge={appUrls.barChart.challenge}
    media={placeholder}
  />
  <Preview
    title={appUrls.calculator.title}
    url={appUrls.calculator.url}
    challenge={appUrls.calculator.challenge}
    media={placeholder}
  />
</div>);

export default Gallary;
